/**
 * Elimina un artículo completamente del sistema
 *
 * Uso: npm run article:remove 44
 *
 * Este script:
 * 1. Elimina el archivo data/articles/article-XX.ts
 * 2. Quita el número del array activeArticles en articles-config.ts
 * 3. Actualiza el archivo index.ts (quita imports y referencias)
 * 4. Muestra instrucciones para limpiar Vercel KV
 */

import * as fs from 'fs';
import * as path from 'path';

const articleNumber = parseInt(process.argv[2]);

if (!articleNumber || isNaN(articleNumber)) {
  console.error('\n❌ Error: Debes especificar el número del artículo');
  console.log('   Uso: npm run article:remove 44\n');
  process.exit(1);
}

console.log(`\n🗑️  Eliminando Artículo ${articleNumber}...\n`);

const rootDir = path.join(__dirname, '..');

// 1. Eliminar archivo del artículo
const articleFile = path.join(rootDir, `data/articles/article-${articleNumber}.ts`);
if (fs.existsSync(articleFile)) {
  fs.unlinkSync(articleFile);
  console.log(`✅ Eliminado: data/articles/article-${articleNumber}.ts`);
} else {
  console.log(`⚠️  Archivo no encontrado: article-${articleNumber}.ts (puede que ya haya sido eliminado)`);
}

// 2. Actualizar articles-config.ts
const configPath = path.join(rootDir, 'data/articles-config.ts');
if (fs.existsSync(configPath)) {
  let configContent = fs.readFileSync(configPath, 'utf-8');

  // Quitar del array activeArticles (con o sin comentario)
  const originalContent = configContent;

  // Patrón 1: número con comentario en la misma línea
  configContent = configContent.replace(
    new RegExp(`\\s*${articleNumber},\\s*//[^\\n]*`, 'g'),
    ''
  );

  // Patrón 2: solo el número con coma
  configContent = configContent.replace(
    new RegExp(`\\s*${articleNumber},`, 'g'),
    ''
  );

  // Patrón 3: número al final del array (sin coma después)
  configContent = configContent.replace(
    new RegExp(`,\\s*${articleNumber}\\s*\\]`, 'g'),
    '\n  ]'
  );

  // Si el defaultArticleNumber era este artículo, actualizarlo
  const defaultMatch = configContent.match(/defaultArticleNumber:\s*(\d+)/);
  if (defaultMatch && parseInt(defaultMatch[1]) === articleNumber) {
    // Buscar el primer artículo activo disponible
    const activeMatch = configContent.match(/activeArticles:\s*\[\s*(\d+)/);
    if (activeMatch) {
      const newDefault = activeMatch[1];
      configContent = configContent.replace(
        /defaultArticleNumber:\s*\d+/,
        `defaultArticleNumber: ${newDefault}`
      );
      console.log(`✅ Actualizado defaultArticleNumber a ${newDefault}`);
    }
  }

  if (configContent !== originalContent) {
    fs.writeFileSync(configPath, configContent);
    console.log(`✅ Actualizado: data/articles-config.ts`);
  }
}

// 3. Actualizar index.ts (quitar imports y del mapa)
const indexPath = path.join(rootDir, 'data/articles/index.ts');
if (fs.existsSync(indexPath)) {
  let indexContent = fs.readFileSync(indexPath, 'utf-8');
  const originalIndex = indexContent;

  // Quitar línea de import
  indexContent = indexContent.replace(
    new RegExp(`import \\{ article${articleNumber}, biblicalTexts${articleNumber} \\} from ['\"]\\./article-${articleNumber}['\"];?\\n?`, 'g'),
    ''
  );

  // Quitar del articlesMap
  indexContent = indexContent.replace(
    new RegExp(`\\s*${articleNumber}: article${articleNumber},?`, 'g'),
    ''
  );

  // Quitar del biblicalTextsMap
  indexContent = indexContent.replace(
    new RegExp(`\\s*${articleNumber}: biblicalTexts${articleNumber},?`, 'g'),
    ''
  );

  // Limpiar comas dobles o comas antes de }
  indexContent = indexContent.replace(/,(\s*,)/g, ',');
  indexContent = indexContent.replace(/,(\s*\})/g, '$1');

  if (indexContent !== originalIndex) {
    fs.writeFileSync(indexPath, indexContent);
    console.log(`✅ Actualizado: data/articles/index.ts`);
  }
}

console.log(`\n✨ Artículo ${articleNumber} eliminado exitosamente!\n`);
console.log('📝 Para limpiar los datos de Vercel KV, ejecuta:');
console.log(`   npm run cleanup-kv -- --article=${articleNumber}\n`);
