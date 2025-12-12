import { NextRequest, NextResponse } from 'next/server';
import { writeFile, readdir, unlink } from 'fs/promises';
import { existsSync, mkdirSync } from 'fs';
import path from 'path';

const PDFS_DIR = path.join(process.cwd(), 'pdfs');

// Asegurar que la carpeta pdfs existe
function ensurePdfsDir() {
  if (!existsSync(PDFS_DIR)) {
    mkdirSync(PDFS_DIR, { recursive: true });
  }
}

// GET: Listar todos los PDFs disponibles
export async function GET() {
  try {
    ensurePdfsDir();

    const files = await readdir(PDFS_DIR);
    const pdfFiles = files
      .filter(file => file.endsWith('.pdf'))
      .map(file => ({
        name: file.replace('.pdf', ''),
        filename: file,
        path: `/pdfs/${file}`
      }));

    return NextResponse.json({ pdfs: pdfFiles });
  } catch (error) {
    console.error('Error listing PDFs:', error);
    return NextResponse.json({ error: 'Error al listar PDFs' }, { status: 500 });
  }
}

// POST: Subir un nuevo PDF
export async function POST(request: NextRequest) {
  try {
    ensurePdfsDir();

    const formData = await request.formData();
    const file = formData.get('file') as File;
    const customName = formData.get('name') as string;

    if (!file) {
      return NextResponse.json({ error: 'No se proporcionó archivo' }, { status: 400 });
    }

    if (!file.name.endsWith('.pdf')) {
      return NextResponse.json({ error: 'Solo se permiten archivos PDF' }, { status: 400 });
    }

    // Usar nombre personalizado o el nombre original
    const fileName = customName
      ? `${customName.toLowerCase().replace(/\s+/g, '-')}.pdf`
      : file.name;

    const filePath = path.join(PDFS_DIR, fileName);

    // Convertir el archivo a buffer y guardarlo
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    await writeFile(filePath, buffer);

    return NextResponse.json({
      success: true,
      message: `PDF "${fileName}" guardado correctamente`,
      filename: fileName
    });
  } catch (error) {
    console.error('Error uploading PDF:', error);
    return NextResponse.json({ error: 'Error al subir el PDF' }, { status: 500 });
  }
}

// DELETE: Eliminar un PDF
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const filename = searchParams.get('filename');

    if (!filename) {
      return NextResponse.json({ error: 'No se especificó archivo' }, { status: 400 });
    }

    const filePath = path.join(PDFS_DIR, filename);

    if (!existsSync(filePath)) {
      return NextResponse.json({ error: 'Archivo no encontrado' }, { status: 404 });
    }

    await unlink(filePath);

    return NextResponse.json({
      success: true,
      message: `PDF "${filename}" eliminado correctamente`
    });
  } catch (error) {
    console.error('Error deleting PDF:', error);
    return NextResponse.json({ error: 'Error al eliminar el PDF' }, { status: 500 });
  }
}
