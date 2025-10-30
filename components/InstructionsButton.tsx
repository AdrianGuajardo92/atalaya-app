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
      sectionLSM: "",               // Dejar vacío, se llena en la app
      answer: "Respuesta en lenguaje sencillo basada en los párrafos",
      answerBullets: "• Punto clave 1\\n• Punto clave 2\\n• Punto clave 3",
      flashcards: [                 // Tarjetas didácticas (OPCIONAL - agregar conforme se estudia)
        {
          question: "¿Pregunta sobre dato específico del párrafo?",
          answer: "Respuesta breve y directa"
        }
      ]
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

### Paso 4: Respuestas y puntos clave

**Respuesta simple:**
\`\`\`typescript
answer: "Explicación directa en lenguaje sencillo de lo que responde la pregunta"
\`\`\`

**Puntos clave (bullets):**
\`\`\`typescript
answerBullets: "**Subtítulo opcional**\\n• Punto 1\\n• Punto 2\\n• Punto 3"
\`\`\`

### Paso 5: Tarjetas didácticas (Flashcards)

Las flashcards son **OPCIONALES** y se agregan **conforme se estudia**, no todas de golpe:

**Características:**
- Aparecen **debajo de las respuestas**
- Ocultas por defecto en modo scroll (botón para mostrar/ocultar)
- Siempre visibles en modo navegación
- Estilo flip card (click para voltear)

**Cuándo agregar:**
- Solo cuando el usuario lo pida
- Conforme se estudian los párrafos
- No generar todas automáticamente

**Qué incluir:**
✅ Referencias bíblicas importantes
✅ Datos específicos relevantes
✅ Conceptos clave del párrafo
✅ Información que ayude a recordar puntos principales

**Qué NO incluir:**
❌ Nombres de ejemplos personales (ej: "Jennifer")
❌ Detalles sin importancia
❌ Información obvia

**Ejemplo:**
\`\`\`typescript
flashcards: [
  {
    question: "¿Qué significa la palabra hebrea 'perdonar' en Salmo 32:5?",
    answer: "También significa 'levantar' o 'llevar'"
  },
  {
    question: "¿Cuáles son las 3 condiciones para que Jehová nos perdone?",
    answer: "Arrepentirnos, confesar y no volver a cometer el pecado"
  }
]
\`\`\`

**Lenguaje:**
- Preguntas claras y directas
- Respuestas breves (1-2 oraciones máximo)
- Lenguaje sencillo y fácil de entender

### Paso 6: Párrafos con referencias bíblicas
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
- ✅ **Respuestas con dos niveles**: explicación simple + puntos clave
- ✅ **Tarjetas didácticas (flashcards)**: flip cards para repasar datos importantes
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

## 📚 FUNCIÓN ADICIONAL: Ayuda para estudiar el artículo

Además de mantener la aplicación, también puedes pedirme que te ayude a **estudiar el artículo párrafo por párrafo**.

### Cómo funciona:

Cuando el usuario diga algo como:
- "Ayúdame a estudiar el artículo"
- "Vamos a estudiar párrafo por párrafo"
- "Dame las respuestas a las preguntas"

**Debes hacer lo siguiente:**

1. **Ir párrafo por párrafo** (o grupo de párrafos según las preguntas)
2. **Mostrar la pregunta** del estudio
3. **Dar la respuesta directa** basándote en el contenido de los párrafos
4. **Usar lenguaje sencillo y fácil de entender**
5. **Ser conciso** - solo la respuesta directa a lo que se pregunta
6. **Esperar confirmación** del usuario antes de continuar al siguiente grupo de párrafos

### Ejemplo de formato:

\`\`\`
## 📖 Párrafos 1, 2

**Pregunta:** ¿Qué hace Jehová cuando nos arrepentimos, y cómo nos hace sentir eso?

**Respuesta:**
Cuando nos arrepentimos de verdad, Jehová nos perdona completamente. Es como si borrara nuestros pecados y nunca los hubiéramos cometido. Esto nos hace sentir felices y aliviados, igual que se sintió el rey David cuando fue perdonado.

---

¿Listo para continuar con los párrafos 3, 4? 😊
\`\`\`

### Reglas importantes para las respuestas:

✅ **Respuesta directa** - No des información extra que no responda la pregunta
✅ **Lenguaje sencillo** - Como si le hablaras a alguien que está aprendiendo
✅ **Basada en los párrafos** - Usa solo la información de los párrafos correspondientes
✅ **Concisa** - 2-4 oraciones máximo por respuesta
✅ **Clara** - Evita vocabulario complicado o teológico innecesario

### Ejemplo de cómo NO responder:

❌ "Bueno, si analizamos el contexto histórico de David y consideramos las implicaciones teológicas del perdón divino en el marco del pacto mosaico..."

### Ejemplo de cómo SÍ responder:

✅ "Jehová nos perdona completamente cuando nos arrepentimos. Esto nos hace sentir felices y aliviados."

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
