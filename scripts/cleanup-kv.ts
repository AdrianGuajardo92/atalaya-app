/**
 * Limpia datos de Vercel KV para estudios eliminados
 *
 * Uso:
 *   npm run cleanup-kv -- --study=2026-06-29
 *   npm run cleanup-kv -- --all
 */

import { kv } from '@vercel/kv';
import * as fs from 'fs';
import * as path from 'path';

const args = process.argv.slice(2);
const studyArg = args.find((arg) => arg.startsWith('--study='));
const cleanAll = args.includes('--all');

if (!studyArg && !cleanAll) {
  console.log('\n📋 Uso del script cleanup-kv:\n');
  console.log('   npm run cleanup-kv -- --study=2026-06-29');
  console.log('   npm run cleanup-kv -- --all\n');
  process.exit(0);
}

const specificStudyId = studyArg ? studyArg.split('=')[1] : null;

function getActiveStudyIds(): string[] {
  try {
    const configPath = path.join(__dirname, '../data/articles-config.ts');
    const configContent = fs.readFileSync(configPath, 'utf-8');
    const activeMatch = configContent.match(/activeStudyIds:\s*\[([\s\S]*?)\]/);
    if (activeMatch) {
      return activeMatch[1].match(/"\d{4}-\d{2}-\d{2}"/g)?.map((s) => s.replace(/"/g, '')) || [];
    }
  } catch {
    // Ignorar
  }
  return [];
}

async function cleanup() {
  console.log('\n🧹 Limpiando datos de Vercel KV...\n');

  const prefixes = ['atalaya-favorites', 'atalaya-lsm', 'atalaya-hidden-cards', 'atalaya-used-items'];
  let deletedCount = 0;
  const activeStudyIds = getActiveStudyIds();

  for (const prefix of prefixes) {
    try {
      const pattern = `${prefix}:*`;
      const keys = await kv.keys(pattern);

      for (const key of keys) {
        const studyMatch = key.match(/(\d{4}-\d{2}-\d{2})/);
        if (!studyMatch) continue;

        const studyId = studyMatch[1];
        let shouldDelete = false;

        if (specificStudyId !== null) {
          shouldDelete = studyId === specificStudyId;
        } else if (cleanAll) {
          shouldDelete = !activeStudyIds.includes(studyId);
        }

        if (shouldDelete) {
          await kv.del(key);
          console.log(`   ✅ Eliminado: ${key}`);
          deletedCount++;
        }
      }
    } catch (error) {
      console.error(`   ❌ Error al procesar ${prefix}:`, error);
    }
  }

  if (deletedCount === 0) {
    console.log('   ℹ️  No se encontraron claves para eliminar');
  }

  console.log(`\n✨ Limpieza completada: ${deletedCount} clave(s) eliminada(s)\n`);
}

cleanup().catch((error) => {
  console.error('\n❌ Error al ejecutar limpieza:', error);
  console.log('\n💡 Configura KV_REST_API_URL y KV_REST_API_TOKEN.\n');
  process.exit(1);
});
