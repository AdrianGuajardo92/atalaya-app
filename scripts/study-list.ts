/**
 * Lista estudios disponibles (study-YYYY-MM-DD.ts)
 *
 * Uso: npm run study:list
 */

import * as fs from 'fs';
import * as path from 'path';

const articlesDir = path.join(__dirname, '../data/articles');

if (!fs.existsSync(articlesDir)) {
  console.error('\n❌ Error: La carpeta data/articles/ no existe\n');
  process.exit(1);
}

const studyFiles = fs
  .readdirSync(articlesDir)
  .filter((f) => /^study-\d{4}-\d{2}-\d{2}\.ts$/.test(f))
  .sort();

const legacyFiles = fs
  .readdirSync(articlesDir)
  .filter((f) => /^article-\d+\.ts$/.test(f))
  .sort();

console.log('\n📚 Estudios disponibles en data/articles/:\n');
console.log('─'.repeat(50));

if (studyFiles.length === 0) {
  console.log('   (No hay estudios study-*.ts)');
} else {
  studyFiles.forEach((file) => {
    const id = file.replace(/^study-|\.ts$/g, '');
    console.log(`   📄 ${file}  (studyId: ${id})`);
  });
}

if (legacyFiles.length > 0) {
  console.log('\n⚠️  Archivos legacy (deprecados):');
  legacyFiles.forEach((file) => console.log(`   📄 ${file}`));
}

console.log('─'.repeat(50));
console.log(`\n   Total estudios: ${studyFiles.length}\n`);

try {
  const configPath = path.join(__dirname, '../data/articles-config.ts');
  const configContent = fs.readFileSync(configPath, 'utf-8');
  const activeMatch = configContent.match(/activeStudyIds:\s*\[([\s\S]*?)\]/);
  if (activeMatch) {
    const ids = activeMatch[1].match(/"\d{4}-\d{2}-\d{2}"/g) || [];
    console.log('🔘 Estudios activos (visibles en la app):');
    console.log(`   [${ids.map((id) => id.replace(/"/g, '')).join(', ')}]\n`);
  }
} catch {
  // Ignorar
}
