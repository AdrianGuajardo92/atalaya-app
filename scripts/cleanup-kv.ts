/**
 * Limpia datos de Vercel KV para artículos eliminados
 *
 * Uso:
 *   npm run cleanup-kv -- --article=44    # Limpia solo el artículo 44
 *   npm run cleanup-kv -- --all           # Limpia todos los artículos no activos
 *
 * Nota: Requiere que las variables de entorno KV_REST_API_URL y KV_REST_API_TOKEN
 * estén configuradas (ya sea en .env.local o en el entorno).
 */

import { kv } from '@vercel/kv';
import * as fs from 'fs';
import * as path from 'path';

// Parsear argumentos
const args = process.argv.slice(2);
const articleArg = args.find(arg => arg.startsWith('--article='));
const cleanAll = args.includes('--all');

if (!articleArg && !cleanAll) {
  console.log('\n📋 Uso del script cleanup-kv:\n');
  console.log('   npm run cleanup-kv -- --article=44    # Limpia el artículo 44');
  console.log('   npm run cleanup-kv -- --all           # Limpia todos los no activos\n');
  process.exit(0);
}

const specificArticle = articleArg ? parseInt(articleArg.split('=')[1]) : null;

// Obtener artículos activos de la configuración
function getActiveArticles(): number[] {
  try {
    const configPath = path.join(__dirname, '../data/articles-config.ts');
    const configContent = fs.readFileSync(configPath, 'utf-8');
    const activeMatch = configContent.match(/activeArticles:\s*\[([\s\S]*?)\]/);
    if (activeMatch) {
      return (activeMatch[1].match(/\d+/g) || []).map(Number);
    }
  } catch {
    // Ignorar errores
  }
  return [];
}

async function cleanup() {
  console.log('\n🧹 Limpiando datos de Vercel KV...\n');

  const prefixes = [
    'atalaya-favorites-data',
    'atalaya-lsm-data',
    'atalaya-hidden-cards-data'
  ];

  let deletedCount = 0;
  const activeArticles = getActiveArticles();

  for (const prefix of prefixes) {
    try {
      // Buscar todas las claves con este prefijo
      const pattern = `${prefix}:*`;
      const keys = await kv.keys(pattern);

      for (const key of keys) {
        // Extraer el número de artículo de la clave
        // Formato: atalaya-xxx-data:2025-11-article-44
        const articleMatch = key.match(/article-(\d+)/);
        if (!articleMatch) continue;

        const articleNum = parseInt(articleMatch[1]);

        // Decidir si eliminar
        let shouldDelete = false;

        if (specificArticle !== null) {
          // Modo específico: solo eliminar si coincide
          shouldDelete = articleNum === specificArticle;
        } else if (cleanAll) {
          // Modo --all: eliminar si no está activo
          shouldDelete = !activeArticles.includes(articleNum);
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

// Ejecutar
cleanup().catch(error => {
  console.error('\n❌ Error al ejecutar limpieza:', error);
  console.log('\n💡 Asegúrate de que las variables KV_REST_API_URL y KV_REST_API_TOKEN están configuradas.\n');
  process.exit(1);
});
