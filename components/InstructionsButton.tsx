'use client';

import { useState } from 'react';

export default function InstructionsButton() {
  const [showCopied, setShowCopied] = useState(false);

  const promptInstructions = `# Instrucciones para trabajar con la aplicación Atalaya

## 📋 Contexto de la aplicación

Esta es una aplicación Next.js para dirigir estudios de La Atalaya con soporte bilingüe (Español y LSM - Lengua de Señas Mexicana).

## 🗂️ Estructura de archivos

**ARCHIVO PRINCIPAL A MODIFICAR CADA SEMANA:**
- \`data/atalaya-data.ts\` - ÚNICO archivo que se modifica semanalmente con el contenido del nuevo estudio

**ARCHIVOS QUE NUNCA SE MODIFICAN:**
- \`components/QuestionCard.tsx\` - Componente de preguntas (diseño Tarjetas Compactas)
- \`components/ReviewQuestionCard.tsx\` - Componente de preguntas de repaso
- \`components/StudyHeader.tsx\` - Encabezado del estudio
- \`components/Timer.tsx\` - Temporizador flotante arrastrable
- \`app/page.tsx\` - Página principal con lógica de navegación
- \`types/atalaya.ts\` - Definición de tipos TypeScript
- \`app/api/lsm/route.ts\` - API para guardar traducciones LSM en Vercel KV

## 📝 Cómo actualizar el contenido semanal

### Paso 1: Abrir el archivo de datos
Abre el archivo: \`data/atalaya-data.ts\`

### Paso 2: Actualizar la información del estudio
Modifica el objeto \`atalayaData\` con la nueva información:

\`\`\`typescript
export const atalayaData: AtalayaStudy = {
  // 1. CANCIÓN INICIAL
  song: "Canción XXX",

  // 2. TÍTULO DEL ESTUDIO
  title: "Título completo del estudio",

  // 3. TEXTO BÍBLICO (las referencias bíblicas se resaltan automáticamente)
  biblicalText: "\"Texto entre comillas\" (REFERENCIA BÍBLICA)",

  // 4. TEMA
  theme: "Texto del tema completo",

  // 5. PREGUNTAS (Array de preguntas)
  questions: [
    {
      number: "1, 2",              // Número(s) de pregunta
      textEs: "¿Pregunta completa en español?",
      textLSM: "",                  // Dejar vacío, se llena en la app
      paragraphs: [1, 2],           // Números de párrafos relacionados
      section: "SUBTÍTULO OPCIONAL", // Solo si hay subtítulo
      sectionLSM: ""                // Dejar vacío, se llena en la app
    },
    // ... más preguntas
  ],

  // 6. PÁRRAFOS (Array de párrafos completos)
  paragraphs: [
    {
      number: 1,
      content: "Contenido completo del párrafo con referencias bíblicas (LIBRO 1:1)."
    },
    // ... más párrafos
  ],

  // 7. PREGUNTAS DE REPASO (Array de preguntas finales)
  reviewQuestions: [
    {
      question: "¿Pregunta de repaso en español?",
      questionLSM: ""  // Dejar vacío, se llena en la app
    },
    // ... más preguntas de repaso
  ],

  // 8. CANCIÓN FINAL
  finalSong: "Canción XXX y oración"
};
\`\`\`

### Paso 3: Formato especial para preguntas

**Preguntas simples:**
\`\`\`typescript
{
  number: "3",
  textEs: "¿Pregunta?",
  textLSM: "",
  paragraphs: [3]
}
\`\`\`

**Preguntas múltiples (mismo párrafo):**
\`\`\`typescript
{
  number: "4, 5",
  textEs: "¿Primera pregunta y segunda pregunta?",
  textLSM: "",
  paragraphs: [4]
}
\`\`\`

**Pregunta con subtítulo de sección:**
\`\`\`typescript
{
  number: "6",
  textEs: "¿Pregunta?",
  textLSM: "",
  paragraphs: [6],
  section: "SUBTÍTULO EN MAYÚSCULAS",  // Aparece antes de la pregunta
  sectionLSM: ""                       // Se traduce en la app
}
\`\`\`

### Paso 4: Párrafos con referencias bíblicas
Las referencias bíblicas entre paréntesis se resaltan automáticamente en azul:

\`\`\`typescript
{
  number: 5,
  content: "Texto del párrafo que menciona (Salmo 32:5) y también (1 Juan 1:9). Todo esto se resalta automáticamente."
}
\`\`\`

## 🎨 Características de la aplicación

### Modos de visualización:
1. **Modo Scroll** - Ver todas las preguntas en una página
2. **Modo Navegación** - Ver una pregunta a la vez con botones Anterior/Siguiente

### Funcionalidades:
- ✅ Edición de texto LSM (click en área LSM para editar)
- ✅ Guardado automático en Vercel KV
- ✅ Sincronización entre localhost y producción
- ✅ Temporizador flotante y arrastrable
- ✅ Ver párrafos completos (click en círculo azul con número)
- ✅ Atajos de teclado:
  - Enter: Guardar LSM
  - Escape: Cancelar edición
  - Shift+Enter: Nueva línea en textarea

### Diseño "Tarjetas Compactas":
- Círculo azul con número (clickeable para ver párrafos)
- Español en caja gris
- LSM en caja azul (más grande y destacado)
- Todo el texto LSM se muestra automáticamente en MAYÚSCULAS

## 🔄 Flujo de trabajo semanal

1. **Obtener el nuevo estudio** de jw.org
2. **Abrir**: \`data/atalaya-data.ts\`
3. **Reemplazar** todo el contenido con el nuevo estudio
4. **Verificar** que la estructura sea correcta
5. **Probar** en localhost: \`npm run dev\`
6. **Traducir** las preguntas a LSM usando la interfaz
7. **Hacer commit** cuando esté listo
8. **Hacer push** para desplegar en Vercel

## ⚠️ IMPORTANTE

- **NUNCA modificar** componentes ni archivos de configuración
- **SOLO modificar** \`data/atalaya-data.ts\` cada semana
- **Dejar vacíos** los campos \`textLSM\`, \`sectionLSM\`, \`questionLSM\` - se llenan en la interfaz
- **Las traducciones LSM se guardan** automáticamente en Vercel KV con clave única: \`atalaya-lsm-data\`
- **Los commits los hace el usuario**, nunca automáticos

## 🗄️ Base de datos

- **Vercel KV** (Redis): biblioteca-db
- **Clave única**: \`atalaya-lsm-data\`
- **Sincronización**: localhost y producción usan la misma BD
- **Credenciales**: en \`.env.local\` (no en git)

## 📦 Comandos útiles

\`\`\`bash
npm run dev          # Iniciar desarrollo (localhost:3000)
npm run build        # Construir para producción
npm run start        # Iniciar producción local
git add .            # Agregar cambios
git commit -m "msg"  # Hacer commit
git push             # Desplegar a Vercel
\`\`\`

## 💡 Tips

- Si necesitas agregar un nuevo estudio, **solo copia y pega** el contenido en el formato mostrado arriba
- Los subtítulos son **opcionales**, solo agrégalos si el estudio los tiene
- Las preguntas de repaso están **separadas** de las preguntas normales
- El navegador **cachea** las traducciones LSM, así que si actualizas verás tus traducciones anteriores

---

**¿Necesitas ayuda?** Pregunta sobre cualquier parte de esta estructura y te ayudaré a mantener la consistencia del proyecto.`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(promptInstructions);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    } catch (err) {
      alert('Error al copiar. Intenta de nuevo.');
    }
  };

  return (
    <div className="fixed bottom-4 left-4 z-10 hidden lg:block">
      <button
        onClick={handleCopy}
        className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg shadow-lg hover:from-green-600 hover:to-green-700 transition-all font-medium text-sm flex items-center gap-2"
        title="Copiar instrucciones para nueva conversación"
      >
        📋 Copiar Instrucciones
      </button>

      {showCopied && (
        <div className="absolute bottom-full left-0 mb-2 bg-green-600 text-white px-3 py-1 rounded shadow-lg text-sm whitespace-nowrap">
          ✅ ¡Copiado al portapapeles!
        </div>
      )}
    </div>
  );
}
