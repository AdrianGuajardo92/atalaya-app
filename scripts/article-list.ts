/**
 * Lista todos los artículos disponibles en el sistema
 *
 * Uso: npm run article:list
 */

import * as fs from 'fs';
import * as path from 'path';

const articlesDir = path.join(__dirname, '../data/articles');

// Verificar que existe la carpeta
if (!fs.existsSync(articlesDir)) {
  console.error('\n❌ Error: La carpeta data/articles/ no existe\n');
  process.exit(1);
}

// Leer archivos de artículos
const files = fs.readdirSync(articlesDir)
  .filter(f => f.startsWith('article-') && f.endsWith('.ts'))
  .sort((a, b) => {
    const numA = parseInt(a.match(/article-(\d+)/)?.[1] || '0');
    const numB = parseInt(b.match(/article-(\d+)/)?.[1] || '0');
    return numA - numB;
  });

console.log('\n📚 Artículos disponibles en data/articles/:\n');
console.log('─'.repeat(50));

if (files.length === 0) {
  console.log('   (No hay artículos)');
} else {
  files.forEach(file => {
    console.log(`   📄 ${file}`);
  });
}

console.log('─'.repeat(50));
console.log(`\n   Total: ${files.length} artículo(s)\n`);

// Mostrar artículos activos desde la configuración
try {
  const configPath = path.join(__dirname, '../data/articles-config.ts');
  const configContent = fs.readFileSync(configPath, 'utf-8');
  const activeMatches = [...configContent.matchAll(/activeArticles:\s*\[([\s\S]*?)\]/g)];
  const activeMatch = activeMatches[activeMatches.length - 1];

  if (activeMatch) {
    const activeBlock = activeMatch[1].replace(/\/\/.*$/gm, '');
    const activeNumbers = activeBlock.match(/\d+/g) || [];
    console.log('🔘 Artículos activos (visibles en la app):');
    console.log(`   [${activeNumbers.join(', ')}]\n`);
  }
} catch {
  // Ignorar si no se puede leer la configuración
}
