/**
 * Elimina un estudio por studyId (fecha inicio de semana)
 *
 * Uso: npm run study:remove 2026-06-29
 *
 * 1. Elimina data/articles/study-YYYY-MM-DD.ts
 * 2. Quita studyId de activeStudyIds en articles-config.ts
 * 3. Actualiza data/articles/index.ts
 * 4. Recuerda eliminar videos en public/videos/
 */

import * as fs from 'fs';
import * as path from 'path';

const studyId = process.argv[2];

if (!studyId || !/^\d{4}-\d{2}-\d{2}$/.test(studyId)) {
  console.error('\n❌ Error: Debes especificar un studyId válido (YYYY-MM-DD)');
  console.log('   Uso: npm run study:remove 2026-06-29\n');
  process.exit(1);
}

const rootDir = path.join(__dirname, '..');
const suffix = studyId.replace(/-/g, '');

console.log(`\n🗑️  Eliminando estudio ${studyId}...\n`);

const studyFile = path.join(rootDir, `data/articles/study-${studyId}.ts`);
if (fs.existsSync(studyFile)) {
  fs.unlinkSync(studyFile);
  console.log(`✅ Eliminado: data/articles/study-${studyId}.ts`);
} else {
  console.log(`⚠️  Archivo no encontrado: study-${studyId}.ts`);
}

const configPath = path.join(rootDir, 'data/articles-config.ts');
if (fs.existsSync(configPath)) {
  let configContent = fs.readFileSync(configPath, 'utf-8');
  const original = configContent;

  configContent = configContent.replace(
    new RegExp(`\\s*"${studyId}",\\s*//[^\\n]*`, 'g'),
    ''
  );
  configContent = configContent.replace(
    new RegExp(`\\s*"${studyId}",`, 'g'),
    ''
  );
  configContent = configContent.replace(
    new RegExp(`,\\s*"${studyId}"\\s*\\]`, 'g'),
    '\n  ]'
  );

  if (configContent.includes(`defaultStudyId: "${studyId}"`)) {
    const remaining = [...configContent.matchAll(/"(\d{4}-\d{2}-\d{2})"/g)]
      .map((m) => m[1])
      .filter((id) => id !== studyId);
    const newDefault = remaining[0] ?? 'null';
    configContent = configContent.replace(
      /defaultStudyId: "[^"]*"|defaultStudyId: null/,
      `defaultStudyId: ${newDefault === 'null' ? 'null' : `"${newDefault}"`}`
    );
  }

  if (configContent !== original) {
    fs.writeFileSync(configPath, configContent);
    console.log('✅ Actualizado: data/articles-config.ts');
  }
}

const indexPath = path.join(rootDir, 'data/articles/index.ts');
if (fs.existsSync(indexPath)) {
  let indexContent = fs.readFileSync(indexPath, 'utf-8');
  const originalIndex = indexContent;

  indexContent = indexContent.replace(
    new RegExp(
      `import \\{ study${suffix}, biblicalTexts${suffix} \\} from '\\./study-${studyId}';\\n?`,
      'g'
    ),
    ''
  );
  indexContent = indexContent.replace(
    new RegExp(`\\s*'${studyId}': study${suffix},?`, 'g'),
    ''
  );
  indexContent = indexContent.replace(
    new RegExp(`\\s*'${studyId}': biblicalTexts${suffix},?`, 'g'),
    ''
  );
  indexContent = indexContent.replace(
    new RegExp(`\\s*study${suffix}, biblicalTexts${suffix},?`, 'g'),
    ''
  );
  indexContent = indexContent.replace(/,(\s*,)/g, ',');
  indexContent = indexContent.replace(/,(\s*\})/g, '$1');

  if (indexContent !== originalIndex) {
    fs.writeFileSync(indexPath, indexContent);
    console.log('✅ Actualizado: data/articles/index.ts');
  }
}

const videosDir = path.join(rootDir, 'public/videos', `study-${studyId}`);
if (fs.existsSync(videosDir)) {
  console.log(`⚠️  Elimina manualmente los videos: public/videos/study-${studyId}/`);
}

console.log(`\n✨ Estudio ${studyId} eliminado del registro.\n`);
console.log('📝 Para limpiar Vercel KV:');
console.log(`   npm run cleanup-kv -- --study=${studyId}\n`);
