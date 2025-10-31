'use client';

import { useState } from 'react';

export default function InstructionsButton() {
  const [showCopied, setShowCopied] = useState(false);

  const promptInstructions = `# Instrucciones - Aplicación Atalaya

## ¿Qué es esta aplicación?

Una app Next.js para dirigir el estudio de La Atalaya. Tiene soporte bilingüe: **Español y LSM** (Lengua de Señas Mexicana).

## 🗂️ Archivos importantes

**ARCHIVO QUE CAMBIAS CADA SEMANA:**
- \`data/atalaya-data.ts\` - Aquí va el contenido del nuevo estudio

**ARCHIVOS QUE NUNCA MODIFICAS:**
- \`components/QuestionCard.tsx\` - Muestra las preguntas con diseño de tarjetas
- \`components/ReviewQuestionCard.tsx\` - Muestra las preguntas de repaso
- \`components/FlashCards.tsx\` - Tarjetas didácticas amarillas
- \`components/BiblicalCards.tsx\` - Tarjetas de textos bíblicos moradas
- \`components/StudyHeader.tsx\` - Encabezado del estudio
- \`components/Timer.tsx\` - Temporizador flotante
- \`app/page.tsx\` - Página principal
- \`types/atalaya.ts\` - Tipos de TypeScript
- \`app/api/lsm/route.ts\` - Guarda traducciones LSM en Vercel KV

## 📝 Cómo actualizar el estudio cada semana

### Paso 1: Abre el archivo de datos
Abre: \`data/atalaya-data.ts\`

### Paso 2: Cambia el contenido
Actualiza el objeto \`atalayaData\` con la información del nuevo estudio:

\`\`\`typescript
export const atalayaData: AtalayaStudy = {
  song: "Canción 123",
  title: "Título del estudio",
  biblicalText: "\"Texto bíblico\" (Referencia)",
  theme: "Tema del estudio",

  questions: [
    {
      number: "1, 2",
      textEs: "¿Pregunta en español?",
      textLSM: "",              // Dejar VACÍO - se traduce en la app
      paragraphs: [1, 2],
      answer: "Respuesta directa en lenguaje sencillo",
      answerBullets: "• Punto 1\\n• Punto 2\\n• Punto 3"
    }
  ],

  paragraphs: [
    {
      number: 1,
      content: "Contenido completo del párrafo..."
    }
  ],

  reviewQuestions: [
    {
      question: "¿Pregunta de repaso?"
    }
  ],

  finalSong: "Canción 45 y oración"
};
\`\`\`

## 🔤 Campos LSM (Lengua de Señas Mexicana)

Hay campos LSM en la app que se traducen desde la interfaz:

1. **\`textLSM\`** - Traducción de preguntas principales
2. **\`sectionLSM\`** - Traducción de subtítulos de sección (cuando existen)

**IMPORTANTE:**
- Siempre déjalos vacíos (\`""\`) en el archivo de datos
- Se traducen haciendo click en el área LSM azul en la interfaz
- Las traducciones se guardan automáticamente en Vercel KV
- El texto LSM siempre se muestra en MAYÚSCULAS

## 📖 Preguntas con subtítulos

Algunas preguntas tienen subtítulos de sección:

\`\`\`typescript
{
  number: "6",
  textEs: "¿Pregunta?",
  textLSM: "",
  paragraphs: [6],
  section: "SUBTÍTULO EN MAYÚSCULAS",
  sectionLSM: ""              // Se traduce en la app
}
\`\`\`

## 🖼️ Imágenes ilustrativas (opcional)

Puedes agregar imágenes a las preguntas para ilustrarlas:

\`\`\`typescript
{
  number: "1, 2",
  textEs: "¿Pregunta?",
  textLSM: "",
  paragraphs: [1, 2],
  image: "https://i.imgur.com/xxxxx.jpg"  // URL directa de la imagen
}
\`\`\`

**IMPORTANTE:**
- Usa URLs directas de imágenes (que terminen en .jpg, .png, etc.)
- Para imgur: usa \`https://i.imgur.com/xxxxx.jpg\` (no \`https://imgur.com/xxxxx\`)
- Las imágenes se muestran después de las preguntas ES/LSM
- Son opcionales, solo agrégalas cuando realmente aporten valor

## 💬 Respuestas: dos niveles

Cada pregunta tiene dos tipos de respuesta:

**1. Respuesta directa (\`answer\`):**
\`\`\`typescript
answer: "Explicación sencilla que responde la pregunta directamente"
\`\`\`

**2. Puntos clave (\`answerBullets\`):**
\`\`\`typescript
answerBullets: "**Título opcional**\\n• Punto 1\\n• Punto 2\\n• Punto 3"
\`\`\`

## 🎴 Tarjetas didácticas (Flashcards)

Las flashcards son **OPCIONALES** - se agregan conforme se estudia cada párrafo.

**Características:**
- Color amarillo
- Se muestran después de las respuestas
- Grid de 2 columnas (desktop) o 1 columna (móvil)
- Click para voltear (frente = pregunta, reverso = respuesta)

**Qué incluir:**
✅ Conceptos clave del párrafo
✅ Datos específicos importantes
✅ Información que ayude a recordar puntos principales

**Qué NO incluir:**
❌ Preguntas sobre "¿en qué texto viene...?" o referencias bíblicas
❌ Nombres de ejemplos personales
❌ Información obvia o poco importante

**Ejemplo:**
\`\`\`typescript
flashcards: [
  {
    question: "¿Cuáles son las 3 condiciones para que Jehová nos perdone?",
    answer: "Arrepentirnos de verdad, confesar nuestros pecados, y no volverlos a cometer"
  },
  {
    question: "¿Qué hace Jehová con el pecado cuando nos perdona?",
    answer: "Lo borra por completo, como si nunca lo hubiéramos cometido"
  }
]
\`\`\`

**Reglas de lenguaje:**
- Preguntas claras y directas
- Respuestas breves (1-2 oraciones máximo)
- Lenguaje sencillo

## 📖 Tarjetas de textos bíblicos

Las tarjetas bíblicas se muestran **después de las flashcards**.

**Características:**
- Color morado/púrpura
- Grid de 2 columnas (desktop) o 1 columna (móvil)
- Frente: referencia + propósito
- Reverso: referencia + texto completo TNM
- Click para voltear

**Estructura:**
\`\`\`typescript
biblicalCards: [
  {
    reference: "2 Samuel 12:13",
    purpose: "David confesó su pecado y Jehová lo perdonó",
    text: "Entonces David le dijo a Natán: \\"He pecado contra Jehová\\". Natán le dijo a David: \\"Jehová, por su parte, te perdona tu pecado. No morirás\\"."
  }
]
\`\`\`

**IMPORTANTE - Cómo escribir el propósito:**
- ✅ Lenguaje simple y directo
- ✅ Fácil de escanear rápido al dirigir
- ✅ Una frase corta (máximo 10-12 palabras)
- ❌ NO usar: "Muestra que...", "Nos enseña que...", "Explica que..."
- ✅ SÍ usar: "David confesó y fue perdonado", "Hay que confesar y abandonar"

**Textos bíblicos:**
- SIEMPRE de la Traducción del Nuevo Mundo (TNM)
- Texto completo y exacto
- Incluir TODOS los textos mencionados en el párrafo

## 🎨 Cómo funciona la interfaz

### Dos modos de visualización:
1. **Modo Scroll** - Todas las preguntas en una página
2. **Modo Navegación** - Una pregunta a la vez con botones Anterior/Siguiente

### Funcionalidades:
- Click en el **círculo azul** con el número → abre modal con los párrafos
- Click en **área LSM** (azul) → editar traducción LSM
- **Enter** → guardar traducción LSM
- **Escape** → cancelar edición LSM o cerrar modal de párrafos
- **Shift+Enter** → nueva línea en el editor LSM
- **Temporizador** flotante y arrastrable
- Las traducciones LSM se guardan automáticamente en Vercel KV

### Diseño de tarjetas:
- Círculo azul con número (clickeable)
- Pregunta en español: caja gris
- Pregunta en LSM: caja azul (más grande y destacado)
- Respuestas: fondo verde claro
- Flashcards: amarillas con flip al hacer click
- Tarjetas bíblicas: moradas con flip al hacer click

## 🔄 Flujo de trabajo semanal

1. Obtén el nuevo estudio de jw.org
2. Abre \`data/atalaya-data.ts\`
3. Reemplaza el contenido con el nuevo estudio
4. Deja vacíos los campos LSM (\`textLSM\`, \`sectionLSM\`)
5. Prueba en localhost: \`npm run dev\`
6. Traduce a LSM usando la interfaz (click en áreas azules)
7. Las traducciones se guardan automáticamente en Vercel KV

**NOTA:** El usuario maneja git manualmente cuando esté listo (add, commit, push).

## 🗄️ Base de datos

- **Vercel KV** (Redis)
- **Nombre**: biblioteca-db
- **Clave única**: \`atalaya-lsm-data\`
- **Sincronización**: localhost y producción usan la misma base de datos
- **Credenciales**: en \`.env.local\` (no se sube a git)

## 📦 Comandos

\`\`\`bash
npm run dev          # Desarrollo (localhost:9000)
npm run build        # Construir para producción
npm run start        # Producción local
\`\`\`

## ⚠️ Reglas importantes

- **NUNCA modificar** componentes ni archivos de configuración
- **SOLO modificar** \`data/atalaya-data.ts\` cada semana
- **Dejar vacíos** los campos LSM (\`textLSM\`, \`sectionLSM\`) - se traducen en la app
- Las traducciones LSM se guardan en Vercel KV automáticamente
- El usuario hace commits manualmente

## 💡 Tips

- Los subtítulos de sección son opcionales
- Las preguntas de repaso van separadas al final
- Las referencias bíblicas entre paréntesis se resaltan automáticamente en azul
- Las flashcards y tarjetas bíblicas son opcionales - agrégalas según sea necesario

---

## 📚 FUNCIÓN ADICIONAL: Ayuda para estudiar

También puedes pedir ayuda para estudiar el artículo párrafo por párrafo.

### Qué decir:
- "Ayúdame a estudiar el artículo"
- "Vamos párrafo por párrafo"
- "Dame las respuestas"

### Qué recibirás:
1. La pregunta del estudio
2. Respuesta directa en lenguaje sencillo
3. Basada solo en los párrafos correspondientes
4. Concisa (2-4 oraciones máximo)

### Ejemplo:

\`\`\`
## 📖 Párrafos 1, 2

**Pregunta:** ¿Qué hace Jehová cuando nos arrepentimos?

**Respuesta:**
Cuando nos arrepentimos de verdad, Jehová nos perdona completamente.
Es como si borrara nuestros pecados. Esto nos hace sentir felices y
aliviados, igual que David.

---
¿Listo para continuar? 😊
\`\`\`

### Reglas para respuestas:
✅ Directas - solo lo que responde la pregunta
✅ Lenguaje sencillo - fácil de entender
✅ Basadas en los párrafos - no información extra
✅ Concisas - máximo 2-4 oraciones
✅ Claras - sin vocabulario complicado

**¿Necesitas ayuda?** Pregunta lo que necesites sobre la app.`;

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
