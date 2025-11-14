'use client';

import { useState } from 'react';

export default function InstructionsButton() {
  const [showCopied, setShowCopied] = useState(false);
  const [showCopiedStudy, setShowCopiedStudy] = useState(false);

  const promptInstructions = `# Instrucciones - Aplicación Atalaya

## ¿Qué es esta aplicación?

Una app Next.js para dirigir el estudio de La Atalaya. Tiene soporte bilingüe: **Español y LSM** (Lengua de Señas Mexicana).

## 🗂️ Archivos importantes

**ARCHIVO QUE CAMBIAS MENSUALMENTE:**
- \`data/atalaya-data.ts\` - Contiene la base de datos con múltiples artículos organizados por mes

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

## 📝 Organización de artículos

⚡ **IMPORTANTE: NO HAY LÍMITES** ⚡

La app puede manejar **CUALQUIER cantidad de artículos** que agregues:
- ✅ Puedes agregar 5, 10, 50, 100+ artículos por mes
- ✅ Puedes agregar todos los meses que necesites (2025, 2026, 2027...)
- ✅ El dropdown automáticamente mostrará TODOS los artículos
- ✅ Cada artículo tiene su propia data LSM, favoritos y tarjetas ocultas

### Estructura de la base de datos:

\`\`\`typescript
export const atalayaDatabase: AtalayaDatabase = {
  "2025-08": {  // Año-Mes
    articles: [
      // Artículo 34
      {
        metadata: {
          articleNumber: 34,
          week: "27 Oct - 2 Nov",
          month: "Agosto",
          year: 2025
        },
        song: "...",
        title: "...",
        // ... contenido del artículo
      },
      // Artículo 35, 36, 37, 38...
    ]
  }
};
\`\`\`

### Cómo agregar un nuevo artículo:

Agrega un nuevo objeto al array \`articles\` del mes correspondiente:

\`\`\`typescript
{
  metadata: {
    articleNumber: 35,
    week: "4-10 Nov",
    month: "Agosto",
    year: 2025
  },
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
}
\`\`\`

### Selector de artículos:

En la interfaz verás un **dropdown en el header** para seleccionar entre los artículos del mes. Muestra:
- Número de artículo
- Título del artículo
- Semana correspondiente

Al cambiar de artículo, se cargan automáticamente:
- Las traducciones LSM específicas de ese artículo
- Los favoritos de ese artículo
- Las tarjetas ocultas de ese artículo

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

**🚨 REGLA MÁS IMPORTANTE: ANALIZAR PROFUNDAMENTE**

Antes de crear flashcards:
1. **Leer cuidadosamente** el contenido completo de los párrafos
2. **Analizar los textos bíblicos** citados y su contenido específico
3. **Identificar detalles específicos**: listas, cualidades, números, nombres
4. **Buscar información adicional** que NO esté en la pregunta ni en la respuesta directa

**Ejemplo de análisis profundo:**
Párrafos 7, 8 → Éxodo 34:6, 7 (misericordioso, compasivo) + Salmo 31:5 (Dios de la verdad) = 3 cualidades
Flashcard: "En estos párrafos se mencionan 3 cualidades de Jehová, ¿cuáles son?"

**Después del análisis:**
❌ **NUNCA parafrasear o reformular la pregunta principal del párrafo**
❌ **NUNCA repetir lo que ya está en la respuesta directa**
✅ **SIEMPRE enfocarse en detalles ADICIONALES específicos que NO están en la pregunta ni en la respuesta directa**

**Qué incluir:**
✅ Detalles ADICIONALES específicos del párrafo (números, datos, listas)
✅ **Cualidades, características o atributos mencionados** (muy importante)
✅ Conceptos técnicos o vocabulario importante
✅ Relaciones causa-efecto mencionadas en el párrafo
✅ Nombres específicos, lugares, o eventos del párrafo
✅ Información que NO esté mencionada en la respuesta directa

**Qué NO incluir:**
❌ Reformulaciones de la pregunta principal del párrafo
❌ Información que ya está en la respuesta directa
❌ Preguntas sobre "¿en qué texto viene...?" o referencias bíblicas
❌ Nombres de ejemplos personales de la actualidad
❌ Información obvia o poco importante

**Ejemplo 1:**

**Pregunta:** "¿Qué quiere Satanás que creamos?"
**Respuesta directa:** "Satanás quiere que creamos que hemos cometido un pecado tan grave que Jehová nunca nos perdonará..."

**❌ MALO - Parafrasea la pregunta:**
- "¿Qué trampa usa Satanás?" ← Esto es lo mismo que la pregunta

**❌ MALO - Repite la respuesta directa:**
- "¿Qué quiere Satanás que creamos sobre nuestros pecados?" ← Ya está en la respuesta

**✅ BUENO - Detalles adicionales específicos:**
- "¿Qué le pasó al hombre de Corinto mencionado en 1 Corintios 5?"
- "¿Qué significa estar 'abrumado por estar demasiado triste' según 2 Corintios 2?"
- "¿Qué frase usa Pablo sobre las tácticas de Satanás en 2 Corintios 2:11?"

**Ejemplo 2:**

**Pregunta:** "¿Qué nos ayudará a liberarnos del peso de la culpa?"
**Respuesta directa:** "Convencernos de que Jehová nos ha perdonado... dejar la culpa atrás y pasar la página..."

**❌ MALO - Repite la respuesta directa:**
- "¿Qué logramos cuando nos convencemos de que Jehová nos perdonó?" ← Ya está en la respuesta

**✅ BUENO - Detalles adicionales:**
- "¿Qué texto muestra que es natural sentirse mal cuando pecamos?"
- "¿Por qué es bueno sentirse mal cuando pecamos?"
- "¿Qué puede pasar si nos sentimos demasiado culpables después de arrepentirnos?"

**Ejemplo 3 - Análisis profundo:**

**Pregunta:** "¿Cómo se describió Jehová en Éxodo 34:6, 7?"
**Análisis profundo de párrafos 7, 8:**
- Éxodo 34:6, 7 → Jehová es "misericordioso y compasivo"
- Salmo 31:5 → Jehová es el "Dios de la verdad"
- Total: 3 cualidades de Jehová mencionadas

**✅ BUENO - Basado en análisis profundo:**
- "En estos párrafos se mencionan 3 cualidades de Jehová, ¿cuáles son?"
- "Según Salmo 31:5, ¿cómo te ayuda saber que Jehová es el Dios de la verdad?"
- "Si Jehová eligió presentarse como misericordioso, ¿qué te dice eso sobre su personalidad?"

**Ejemplo completo:**
\`\`\`typescript
flashcards: [
  {
    question: "¿Cuáles son las 3 condiciones específicas para que Jehová nos perdone?",
    answer: "Arrepentirnos de verdad, confesar nuestros pecados, y no volverlos a cometer"
  },
  {
    question: "Según Ezequiel 33:16, ¿qué pasa con los pecados confesados?",
    answer: "No se recordará ninguno de ellos, como si nunca hubieran existido"
  }
]
\`\`\`

**Reglas de lenguaje:**
- 🚨 **LENGUAJE SENCILLO Y FÁCIL DE ENTENDER** - Las preguntas deben ser claras
- Preguntas claras y directas sobre DETALLES
- Respuestas breves (1-2 oraciones máximo)
- Evitar términos complicados o construcciones confusas
- Incluir referencias cuando sea relevante

**Ejemplos de lenguaje:**
- ❌ Complicado: "¿Para qué sirve que la conciencia nos haga sentir mal?"
- ✅ Sencillo: "¿Por qué es bueno sentirse mal cuando pecamos?"

**🚨 REGLA CRÍTICA: PREGUNTAS QUE INVITEN A LA REFLEXIÓN**

Las flashcards NO deben ser preguntas de trivia bíblica. Deben invitar a la **reflexión personal y aplicación práctica** para que el auditorio pueda participar mejor.

**❌ EVITAR preguntas tipo trivia:**
- "¿Qué texto muestra que Jehová siempre dice la verdad?" → Solo memorización
- "¿En qué salmo dice que Jehová es misericordioso?" → Solo buscar referencias
- "¿Cuántas veces se menciona el perdón en el párrafo?" → Sin valor espiritual

**✅ USAR preguntas de reflexión y aplicación:**
- "Según Salmo 31:5, ¿cómo te ayuda saber que Jehová es el Dios de la verdad?"
- "¿Qué aprendemos de Jehová en Éxodo 34:6?"
- "Si Jehová eligió presentarse como misericordioso, ¿qué te dice eso sobre su personalidad?"
- "¿Cómo te ayuda personalmente saber que Jehová perdona completamente?"

**Tipos de preguntas efectivas:**
1. **"¿Cómo te ayuda [texto] a...?"** → Aplicación personal
2. **"Según [texto], ¿qué aprendemos sobre...?"** → Reflexión
3. **"¿Qué te dice esto sobre...?"** → Análisis
4. **"¿Por qué podemos estar seguros de que...?"** → Razonamiento

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

### 🚨 PASO INICIAL - CUANDO RECIBES UN NUEVO ARTÍCULO

**IMPORTANTE:** Ya no se borra contenido anterior. Los artículos se mantienen organizados por mes.

**Agregar un nuevo artículo**

Cuando el usuario proporciona un nuevo artículo de La Atalaya:

1. Identifica el mes correcto en \`atalayaDatabase\` (ej: "2025-08")
2. Agrega el nuevo artículo al array \`articles\` de ese mes
3. Si el mes no existe, créalo primero

SOLO debes agregar:

✅ **Estructura básica de preguntas normales:**
- number
- textEs
- paragraphs
- section (si existe)
- image (si existe)
- textLSM: "" (siempre vacío)

✅ **Estructura básica de párrafos:**
- number
- content

✅ **Estructura básica de preguntas de repaso:**
- question (solo este campo)

❌ **NO agregar en este paso inicial:**
- answer
- answerBullets
- flashcards
- biblicalCards
- reflectionQuestions (nuevo campo opcional para reflexión personal)
- practicalApplications (nuevo campo opcional para aplicaciones prácticas)
- questionLSM en reviewQuestions
- sectionLSM (siempre vacío)

**Razón:** Estos campos se agregarán después, durante la fase de estudio párrafo por párrafo.

### Flujo semanal normal:

1. Obtén el nuevo estudio de jw.org
2. Abre \`data/atalaya-data.ts\`
3. **PRIMERA VEZ:** Agrega el artículo al array del mes con metadata (número, semana, mes, año)
4. Agrega solo preguntas y párrafos (estructura básica)
5. Deja vacíos los campos LSM (\`textLSM\`, \`sectionLSM\`)
6. Prueba en localhost: \`npm run dev\`
7. Selecciona el artículo en el dropdown del header
8. **FASE DE ESTUDIO:** Agrega answer, flashcards y biblicalCards párrafo por párrafo
9. Traduce a LSM usando la interfaz (click en áreas azules)
10. Las traducciones se guardan automáticamente en Vercel KV con clave por artículo

**NOTA:** El usuario maneja git manualmente cuando esté listo (add, commit, push).

## 🗄️ Base de datos

- **Vercel KV** (Redis)
- **Nombre**: biblioteca-db
- **Claves por artículo**:
  - LSM: \`atalaya-lsm-data:{articleId}\` (ej: \`atalaya-lsm-data:2025-08-article-35\`)
  - Favoritos: \`atalaya-favorites-data:{articleId}\`
  - Ocultos: \`atalaya-hidden-cards:{articleId}\`
- **Sincronización**: localhost y producción usan la misma base de datos
- **Credenciales**: en \`.env.local\` (no se sube a git)
- **Separación**: Cada artículo tiene sus propios datos LSM, favoritos y tarjetas ocultas

## 📦 Comandos

\`\`\`bash
npm run dev          # Desarrollo (localhost:9000)
npm run build        # Construir para producción
npm run start        # Producción local
\`\`\`

## ⚠️ Reglas importantes

- **NUNCA modificar** componentes ni archivos de configuración
- **SOLO modificar** \`data/atalaya-data.ts\` para agregar/actualizar artículos
- **Dejar vacíos** los campos LSM (\`textLSM\`, \`sectionLSM\`) - se traducen en la app
- Las traducciones LSM se guardan en Vercel KV automáticamente por artículo
- Cada artículo tiene datos separados (LSM, favoritos, ocultos)
- El usuario hace commits manualmente

## 💡 Tips

- Los subtítulos de sección son opcionales
- Las preguntas de repaso van separadas al final
- Las referencias bíblicas entre paréntesis se resaltan automáticamente en azul
- Las flashcards y tarjetas bíblicas son opcionales - agrégalas según sea necesario

---

---

# 📚 PROTOCOLO COMPLETO DE ESTUDIO PÁRRAFO POR PÁRRAFO

## 🎯 Objetivo
Estudiar cada párrafo del artículo de La Atalaya de forma sistemática, generando automáticamente respuestas, flashcards y textos bíblicos para cada pregunta.

## 🚀 Inicio de sesión de estudio

### Paso 1: Activar modo estudio
Di cualquiera de estas frases:
- "Ayúdame a estudiar"
- "Ayúdame a estudiar el artículo"
- "Vamos a estudiar"
- "Comenzamos el estudio"

### Paso 2: Indicar el párrafo
Simplemente di el número del párrafo:
- "párrafo 5"
- "párrafos 3 y 4"
- "siguiente" (para avanzar)

## 📋 Lo que recibirás AUTOMÁTICAMENTE

Para cada párrafo, recibirás:

### 1. ❓ LA PREGUNTA
La pregunta exacta del estudio tal como aparece en La Atalaya.

### 2. ✅ RESPUESTA DIRECTA
- Lenguaje sencillo y directo
- 2-4 oraciones máximo
- Basada SOLO en los párrafos correspondientes
- Sin información extra

### 3. 🔑 PUNTOS CLAVE
- Formato con bullets organizados en tarjetas pequeñas
- Estructura: primeros 2-3 puntos = respuesta directa, resto = información entrelazada
- Títulos opcionales con **negrita**
- **Sistema de marcado manual:**
  - El usuario puede marcar cada punto como "Respuesta Directa" (badge verde ✓) o "Entrelazado" (badge naranja 🔗)
  - Botón que cicla: sin marca → Respuesta Directa → Entrelazado → sin marca
  - Las marcas se guardan automáticamente en Vercel KV
- Se pueden editar, agregar y eliminar puntos individuales
- Click en el punto para marcarlo como completado durante el estudio

### 4. 🎴 FLASHCARDS SUGERIDAS (2-4 tarjetas)
**CRITERIOS ESTRICTOS:**

🚨 **REGLA CRÍTICA #1: ANALIZAR PROFUNDAMENTE EL CONTENIDO**
Antes de crear flashcards, debes:
1. **Leer cuidadosamente** el contenido completo de los párrafos
2. **Analizar los textos bíblicos** citados y su contenido específico
3. **Identificar detalles específicos**: listas, cualidades, números, nombres, ejemplos
4. **Buscar información adicional** que NO esté en la pregunta ni en la respuesta directa

**Ejemplo de análisis profundo:**
Párrafos 7, 8 mencionan:
- Éxodo 34:6, 7: Jehová es "misericordioso y compasivo"
- Salmo 31:5: Jehová es el "Dios de la verdad"
- Resultado: 3 cualidades de Jehová
- Flashcard: "En estos párrafos se mencionan 3 cualidades de Jehová, ¿cuáles son?"

🚨 **REGLA CRÍTICA #2:**
❌ Las flashcards NO deben parafrasear la pregunta principal
❌ Las flashcards NO deben repetir lo que ya está en la respuesta directa

✅ **SÍ crear flashcards sobre:**
- Detalles ADICIONALES específicos del párrafo (números, listas, datos)
- **Cualidades, características o atributos mencionados** (muy importante)
- Eventos bíblicos mencionados con nombres específicos
- Conceptos o vocabulario técnico del párrafo
- Relaciones causa-efecto explicadas en el párrafo
- Citas textuales importantes del párrafo o de textos bíblicos
- Información que NO esté en la pregunta ni en la respuesta directa

❌ **NO crear flashcards sobre:**
- Reformulaciones de la pregunta principal
- Información que ya está en la respuesta directa
- Preguntas genéricas que parafrasean el título
- Referencias bíblicas (esas van en tarjetas bíblicas)
- Nombres de ejemplos modernos
- Información obvia
- **Detalles triviales sin valor espiritual** (ubicaciones geográficas, datos irrelevantes)
- Preguntas que no aportan nada al entendimiento espiritual

**Ejemplo 1 - Párrafo 5:**

**Pregunta del párrafo:** "¿Qué quiere Satanás que creamos? Pon un ejemplo."
**Respuesta directa:** "Satanás quiere que creamos que hemos cometido un pecado tan grave que Jehová nunca nos va a perdonar..."

**❌ FLASHCARD MALA (parafrasea la pregunta):**
- "¿Qué trampa usa Satanás para que dejemos de servir?" ← Esto es lo mismo que la pregunta

**❌ FLASHCARD MALA (repite la respuesta directa):**
- "¿Qué quiere Satanás que creamos sobre nuestros pecados?" ← Ya está en la respuesta directa

**✅ FLASHCARDS BUENAS (detalles adicionales específicos):**
- "¿Qué pecado cometió el hombre de Corinto según 1 Corintios 5:1?"
- "Según 2 Corintios 2:7, ¿qué podría pasar si el hermano no es perdonado?"
- "¿Qué frase usa Pablo en 2 Corintios 2:11 sobre las tácticas de Satanás?"

**Ejemplo 2 - Párrafo 6:**

**Pregunta del párrafo:** "¿Qué nos ayudará a liberarnos del peso de la culpa?"
**Respuesta directa:** "Convencernos de que Jehová nos ha perdonado... dejar la culpa atrás y pasar la página..."

**❌ FLASHCARD MALA (repite la respuesta directa):**
- "¿Qué logramos hacer cuando nos convencemos de que Jehová nos ha perdonado?" ← Ya está en la respuesta

**✅ FLASHCARDS BUENAS (detalles adicionales):**
- "¿Qué texto muestra que es natural sentirse mal cuando pecamos?" (Salmo 51:17)
- "¿Por qué es bueno sentirse mal cuando pecamos?" (2 Corintios 7:10, 11)
- "¿Qué puede pasar si nos sentimos demasiado culpables después de arrepentirnos?"

**🚨 REGLA DE LENGUAJE SENCILLO:**
Las flashcards DEBEN ser **fáciles de entender**:
- ✅ Preguntas claras y directas
- ✅ Sin construcciones complicadas
- ❌ Evitar términos confusos

**Ejemplos:**
- ❌ Complicado: "¿Para qué sirve que la conciencia nos haga sentir mal?"
- ✅ Sencillo: "¿Por qué es bueno sentirse mal cuando pecamos?"

**🚨 REGLA CRÍTICA: PREGUNTAS DE REFLEXIÓN, NO DE TRIVIA**

Las flashcards deben invitar a la **reflexión personal y aplicación práctica**, NO ser preguntas de trivia bíblica.

**❌ EVITAR preguntas tipo trivia:**
- "¿Qué texto muestra que Jehová siempre dice la verdad?" → Solo memorización
- "¿Dónde estaba Moisés cuando Jehová se describió?" → Detalle irrelevante

**✅ USAR preguntas de reflexión:**
- "Según Salmo 31:5, ¿cómo te ayuda saber que Jehová es el Dios de la verdad?"
- "Si Jehová eligió presentarse como misericordioso, ¿qué te dice eso sobre su personalidad?"
- "¿Cómo te ayuda personalmente saber que Jehová perdona completamente?"

**Tipos de preguntas efectivas:**
1. **"¿Cómo te ayuda [texto] a...?"** → Aplicación personal
2. **"Según [texto], ¿qué aprendemos sobre...?"** → Reflexión
3. **"¿Qué te dice esto sobre...?"** → Análisis
4. **"¿Por qué podemos estar seguros de que...?"** → Razonamiento

Estas preguntas permiten que el auditorio participe mejor con comentarios más profundos.

### 5. 📖 TEXTOS BÍBLICOS SUGERIDOS

**CRITERIOS:**
✅ Incluir TODOS los textos citados en el párrafo
✅ Incluir textos mencionados aunque no estén entre paréntesis
✅ Texto completo de la Traducción del Nuevo Mundo (TNM)

**Estructura de cada tarjeta:**
\`\`\`typescript
{
  reference: "2 Corintios 2:5-11",
  purpose: "Perdonar evita que Satanás nos venza",  // ← Máx 10-12 palabras, directo
  text: "[Texto completo TNM]"
}
\`\`\`

**Formato del "purpose":**
- ✅ Directo: "Perdonar evita que Satanás nos venza"
- ✅ Específico: "David fue perdonado completamente"
- ❌ Evitar: "Muestra que...", "Enseña que...", "Explica que..."

### 6. 💭 PREGUNTAS DE REFLEXIÓN PERSONAL (3 preguntas)

**NUEVO CAMPO OPCIONAL** - Se agrega para profundizar el estudio personal

**Características:**
- 3 preguntas que invitan a la reflexión personal profunda
- No son preguntas de la publicación, son adicionales
- Badge púrpura que indica "Preguntas de Reflexión Personal"
- Se pueden agregar, editar y eliminar desde la interfaz
- Se guardan automáticamente en Vercel KV

**Estructura:**
\`\`\`typescript
reflectionQuestions: [
  "¿Cómo me hace sentir saber que Jehová tiene especial interés por los que sufren?",
  "Si estoy pasando por dificultades espirituales, ¿he pensado en acudir a los ancianos o solo en orar?",
  "¿Qué me impide buscar ayuda de los ancianos cuando la necesito?"
]
\`\`\`

**Objetivo:**
- Ayudar al usuario a aplicar personalmente el contenido
- Promover la introspección y el análisis personal
- Conectar emocionalmente con las enseñanzas

### 7. 💡 APLICACIONES PRÁCTICAS (3 acciones)

**NUEVO CAMPO OPCIONAL** - Se agrega para traducir el estudio en acciones concretas

**Características:**
- 3 aplicaciones prácticas específicas y accionables
- Cada una es algo concreto que se puede hacer esta semana
- Badge azul que indica "Aplicaciones Prácticas"
- Se pueden agregar, editar y eliminar desde la interfaz
- Se guardan automáticamente en Vercel KV

**Estructura:**
\`\`\`typescript
practicalApplications: [
  "Esta semana voy a orar a Jehová por cualquier lucha espiritual que esté enfrentando",
  "Si estoy sufriendo espiritualmente, voy a acercarme a un anciano de confianza esta semana",
  "Voy a recordar que los ancianos no son solo para disciplina, sino para ayudarme cuando sufro"
]
\`\`\`

**Objetivo:**
- Traducir el conocimiento en acción
- Crear compromisos concretos y medibles
- Fortalecer la aplicación práctica del estudio

## 🔄 Flujo de trabajo completo

### Inicio
\`\`\`
Tú: "Ayúdame a estudiar"
Claude: "✅ Modo estudio activado. ¿Qué párrafo quieres revisar?"
\`\`\`

### Por cada párrafo
\`\`\`
Tú: "párrafo 5"

Claude:
## 📖 Párrafo 5

### ❓ PREGUNTA
[La pregunta]

### ✅ RESPUESTA DIRECTA
[Respuesta en lenguaje sencillo]

### 🔑 PUNTOS CLAVE
[Bullets organizados - sin marcar tipos, el usuario los marca después]

### 🎴 FLASHCARDS SUGERIDAS (3 tarjetas)
[Lista de flashcards sobre DETALLES específicos]

### 📖 TEXTOS BÍBLICOS SUGERIDOS (2 textos)
[Lista de textos bíblicos del párrafo]

### 💭 PREGUNTAS DE REFLEXIÓN PERSONAL (3 preguntas)
[3 preguntas que invitan a la reflexión personal profunda]

### 💡 APLICACIONES PRÁCTICAS (3 acciones)
[3 acciones concretas que se pueden realizar esta semana]

---
✅ Todo agregado automáticamente al archivo
---

¿Qué párrafo revisamos ahora?
\`\`\`

## ⚡ Automatización - MUY IMPORTANTE

**🚨 REGLA CRÍTICA DE AUTOMATIZACIÓN:**

Cuando el usuario dice **"sigamos con el párrafo X"** o **"párrafo X"**, Claude DEBE:

1. ✅ Proporcionar la respuesta directa, flashcards y textos bíblicos
2. ✅ **AGREGAR TODO AUTOMÁTICAMENTE** al archivo \`data/atalaya-data.ts\`
3. ✅ **NO esperar aprobación del usuario**
4. ✅ **NO preguntar** "¿quieres que los agregue?"

**TODO se agrega automáticamente:**
- ✅ Respuesta directa
- ✅ Puntos clave (sin marcar tipos - el usuario los marca después)
- ✅ Flashcards (2-4 tarjetas)
- ✅ Textos bíblicos (todos los del párrafo)
- ✅ Preguntas de Reflexión Personal (3 preguntas)
- ✅ Aplicaciones Prácticas (3 acciones concretas)
- ✅ Sin necesidad de aprobar
- ✅ Inmediatamente después de presentar la información

**Tú solo necesitas:**
1. Decir "ayúdame a estudiar"
2. Indicar el párrafo → Claude responde Y agrega automáticamente
3. Avanzar al siguiente → Claude responde Y agrega automáticamente

## 🎯 Comandos rápidos

| Comando | Acción |
|---------|--------|
| \`ayúdame a estudiar\` | Inicia modo estudio |
| \`párrafo 5\` | Estudia el párrafo 5 |
| \`párrafos 3 y 4\` | Estudia párrafos 3 y 4 |
| \`siguiente\` | Avanza al siguiente párrafo |
| \`terminamos el estudio\` | Sale del modo estudio |

## 📊 Ejemplo completo de sesión

\`\`\`
Tú: Ayúdame a estudiar

Claude: ✅ Modo estudio activado. ¿Qué párrafo quieres revisar?

Tú: párrafo 1

Claude: [Presenta pregunta, respuesta, puntos clave, flashcards y textos]
✅ Flashcards y textos agregados automáticamente
¿Qué párrafo revisamos ahora?

Tú: siguiente

Claude: [Presenta párrafo 2...]

... [continúa hasta terminar todos los párrafos]

Tú: terminamos el estudio

Claude: ✅ Estudio completado
\`\`\`

## 💡 Recordatorios importantes

1. **Flashcards NO deben parafrasear la pregunta** - deben enfocarse en detalles
2. **Textos bíblicos** - incluir TODOS los mencionados en el párrafo
3. **Preguntas de Reflexión** - 3 preguntas que inviten a la introspección personal
4. **Aplicaciones Prácticas** - 3 acciones concretas y específicas para esta semana
5. **Puntos Clave** - NO marcar tipos al agregar, el usuario los marca después en la interfaz
6. **Todo es automático** - no necesitas aprobar, solo revisar
7. **Recarga localhost:9000** para ver los cambios en la app

---

**¿Necesitas ayuda?** Pregunta lo que necesites sobre la app.`;

  const studyProtocol = `# 📚 PROTOCOLO COMPLETO DE ESTUDIO PÁRRAFO POR PÁRRAFO

## 🚨 PASO INICIAL - CUANDO RECIBES UN NUEVO ARTÍCULO

**IMPORTANTE:** Ya no se borra contenido anterior. Los artículos se mantienen organizados por mes en \`atalayaDatabase\`.

**Agregar un nuevo artículo**

Cuando el usuario proporciona un nuevo artículo de La Atalaya:

1. Identifica el mes correcto en \`atalayaDatabase\` (ej: "2025-08" para Agosto 2025)
2. Agrega el nuevo artículo al array \`articles\` de ese mes
3. Si el mes no existe, créalo primero con su estructura

Cada artículo debe incluir \`metadata\` con:
- articleNumber (número del artículo)
- week (semana correspondiente)
- month (nombre del mes)
- year (año)

SOLO debes agregar:

✅ **Estructura básica de preguntas normales:**
- number
- textEs
- paragraphs
- section (si existe)
- image (si existe)
- textLSM: "" (siempre vacío)

✅ **Estructura básica de párrafos:**
- number
- content

✅ **Estructura básica de preguntas de repaso:**
- question (solo este campo)

❌ **NO agregar en este paso inicial:**
- answer
- answerBullets
- flashcards
- biblicalCards
- questionLSM en reviewQuestions
- sectionLSM (siempre vacío)

**Razón:** Estos campos se agregarán después, durante la fase de estudio párrafo por párrafo que se describe a continuación.

---

## 🎯 Objetivo
Estudiar cada párrafo del artículo de La Atalaya de forma sistemática, generando automáticamente respuestas, flashcards y textos bíblicos para cada pregunta.

## 🚀 Inicio de sesión de estudio

### Paso 1: Activar modo estudio
Di cualquiera de estas frases:
- "Ayúdame a estudiar"
- "Ayúdame a estudiar el artículo"
- "Vamos a estudiar"
- "Comenzamos el estudio"

### Paso 2: Indicar el párrafo
Simplemente di el número del párrafo:
- "párrafo 5"
- "párrafos 3 y 4"
- "siguiente" (para avanzar)

## 📋 Lo que recibirás AUTOMÁTICAMENTE

Para cada párrafo, recibirás:

### 1. ❓ LA PREGUNTA
La pregunta exacta del estudio tal como aparece en La Atalaya.

### 2. ✅ RESPUESTA DIRECTA
- Lenguaje sencillo y directo
- 2-4 oraciones máximo
- Basada SOLO en los párrafos correspondientes
- Sin información extra

### 3. 🔑 PUNTOS CLAVE
- Formato con bullets organizados en tarjetas pequeñas
- Estructura: primeros 2-3 puntos = respuesta directa, resto = información entrelazada
- Títulos opcionales con **negrita**
- **Sistema de marcado manual:**
  - El usuario puede marcar cada punto como "Respuesta Directa" (badge verde ✓) o "Entrelazado" (badge naranja 🔗)
  - Botón que cicla: sin marca → Respuesta Directa → Entrelazado → sin marca
  - Las marcas se guardan automáticamente en Vercel KV
- Se pueden editar, agregar y eliminar puntos individuales
- Click en el punto para marcarlo como completado durante el estudio

### 4. 🎴 FLASHCARDS SUGERIDAS (2-4 tarjetas)
**CRITERIOS ESTRICTOS:**

🚨 **REGLA CRÍTICA #1: ANALIZAR PROFUNDAMENTE EL CONTENIDO**
Antes de crear flashcards, debes:
1. **Leer cuidadosamente** el contenido completo de los párrafos
2. **Analizar los textos bíblicos** citados y su contenido específico
3. **Identificar detalles específicos**: listas, cualidades, números, nombres, ejemplos
4. **Buscar información adicional** que NO esté en la pregunta ni en la respuesta directa

**Ejemplo de análisis profundo:**
Párrafos 7, 8 mencionan:
- Éxodo 34:6, 7: Jehová es "misericordioso y compasivo"
- Salmo 31:5: Jehová es el "Dios de la verdad"
- Resultado: 3 cualidades de Jehová
- Flashcard: "En estos párrafos se mencionan 3 cualidades de Jehová, ¿cuáles son?"

🚨 **REGLA CRÍTICA #2:**
❌ Las flashcards NO deben parafrasear la pregunta principal
❌ Las flashcards NO deben repetir lo que ya está en la respuesta directa

✅ **SÍ crear flashcards sobre:**
- Detalles ADICIONALES específicos del párrafo (números, listas, datos)
- **Cualidades, características o atributos mencionados** (muy importante)
- Eventos bíblicos mencionados con nombres específicos
- Conceptos o vocabulario técnico del párrafo
- Relaciones causa-efecto explicadas en el párrafo
- Citas textuales importantes del párrafo o de textos bíblicos
- Información que NO esté en la pregunta ni en la respuesta directa

❌ **NO crear flashcards sobre:**
- Reformulaciones de la pregunta principal
- Información que ya está en la respuesta directa
- Preguntas genéricas que parafrasean el título
- Referencias bíblicas (esas van en tarjetas bíblicas)
- Nombres de ejemplos modernos
- Información obvia
- **Detalles triviales sin valor espiritual** (ubicaciones geográficas, datos irrelevantes)
- Preguntas que no aportan nada al entendimiento espiritual

**Ejemplo 1 - Párrafo 5:**

**Pregunta del párrafo:** "¿Qué quiere Satanás que creamos? Pon un ejemplo."
**Respuesta directa:** "Satanás quiere que creamos que hemos cometido un pecado tan grave que Jehová nunca nos va a perdonar..."

**❌ FLASHCARD MALA (parafrasea la pregunta):**
- "¿Qué trampa usa Satanás para que dejemos de servir?" ← Esto es lo mismo que la pregunta

**❌ FLASHCARD MALA (repite la respuesta directa):**
- "¿Qué quiere Satanás que creamos sobre nuestros pecados?" ← Ya está en la respuesta directa

**✅ FLASHCARDS BUENAS (detalles adicionales específicos):**
- "¿Qué pecado cometió el hombre de Corinto según 1 Corintios 5:1?"
- "Según 2 Corintios 2:7, ¿qué podría pasar si el hermano no es perdonado?"
- "¿Qué frase usa Pablo en 2 Corintios 2:11 sobre las tácticas de Satanás?"

**Ejemplo 2 - Párrafo 6:**

**Pregunta del párrafo:** "¿Qué nos ayudará a liberarnos del peso de la culpa?"
**Respuesta directa:** "Convencernos de que Jehová nos ha perdonado... dejar la culpa atrás y pasar la página..."

**❌ FLASHCARD MALA (repite la respuesta directa):**
- "¿Qué logramos hacer cuando nos convencemos de que Jehová nos ha perdonado?" ← Ya está en la respuesta

**✅ FLASHCARDS BUENAS (detalles adicionales):**
- "¿Qué texto muestra que es natural sentirse mal cuando pecamos?" (Salmo 51:17)
- "¿Por qué es bueno sentirse mal cuando pecamos?" (2 Corintios 7:10, 11)
- "¿Qué puede pasar si nos sentimos demasiado culpables después de arrepentirnos?"

**🚨 REGLA DE LENGUAJE SENCILLO:**
Las flashcards DEBEN ser **fáciles de entender**:
- ✅ Preguntas claras y directas
- ✅ Sin construcciones complicadas
- ❌ Evitar términos confusos

**Ejemplos:**
- ❌ Complicado: "¿Para qué sirve que la conciencia nos haga sentir mal?"
- ✅ Sencillo: "¿Por qué es bueno sentirse mal cuando pecamos?"

**🚨 REGLA CRÍTICA: PREGUNTAS DE REFLEXIÓN, NO DE TRIVIA**

Las flashcards deben invitar a la **reflexión personal y aplicación práctica**, NO ser preguntas de trivia bíblica.

**❌ EVITAR preguntas tipo trivia:**
- "¿Qué texto muestra que Jehová siempre dice la verdad?" → Solo memorización
- "¿Dónde estaba Moisés cuando Jehová se describió?" → Detalle irrelevante

**✅ USAR preguntas de reflexión:**
- "Según Salmo 31:5, ¿cómo te ayuda saber que Jehová es el Dios de la verdad?"
- "Si Jehová eligió presentarse como misericordioso, ¿qué te dice eso sobre su personalidad?"
- "¿Cómo te ayuda personalmente saber que Jehová perdona completamente?"

**Tipos de preguntas efectivas:**
1. **"¿Cómo te ayuda [texto] a...?"** → Aplicación personal
2. **"Según [texto], ¿qué aprendemos sobre...?"** → Reflexión
3. **"¿Qué te dice esto sobre...?"** → Análisis
4. **"¿Por qué podemos estar seguros de que...?"** → Razonamiento

Estas preguntas permiten que el auditorio participe mejor con comentarios más profundos.

### 5. 📖 TEXTOS BÍBLICOS SUGERIDOS

**CRITERIOS:**
✅ Incluir TODOS los textos citados en el párrafo
✅ Incluir textos mencionados aunque no estén entre paréntesis
✅ Texto completo de la Traducción del Nuevo Mundo (TNM)

**Estructura de cada tarjeta:**
\`\`\`typescript
{
  reference: "2 Corintios 2:5-11",
  purpose: "Perdonar evita que Satanás nos venza",  // ← Máx 10-12 palabras, directo
  text: "[Texto completo TNM]"
}
\`\`\`

**Formato del "purpose":**
- ✅ Directo: "Perdonar evita que Satanás nos venza"
- ✅ Específico: "David fue perdonado completamente"
- ❌ Evitar: "Muestra que...", "Enseña que...", "Explica que..."

### 6. 💭 PREGUNTAS DE REFLEXIÓN PERSONAL (3 preguntas)

**NUEVO CAMPO OPCIONAL** - Se agrega para profundizar el estudio personal

**Características:**
- 3 preguntas que invitan a la reflexión personal profunda
- No son preguntas de la publicación, son adicionales
- Badge púrpura que indica "Preguntas de Reflexión Personal"
- Se pueden agregar, editar y eliminar desde la interfaz
- Se guardan automáticamente en Vercel KV

**Estructura:**
\`\`\`typescript
reflectionQuestions: [
  "¿Cómo me hace sentir saber que Jehová tiene especial interés por los que sufren?",
  "Si estoy pasando por dificultades espirituales, ¿he pensado en acudir a los ancianos o solo en orar?",
  "¿Qué me impide buscar ayuda de los ancianos cuando la necesito?"
]
\`\`\`

**Objetivo:**
- Ayudar al usuario a aplicar personalmente el contenido
- Promover la introspección y el análisis personal
- Conectar emocionalmente con las enseñanzas

### 7. 💡 APLICACIONES PRÁCTICAS (3 acciones)

**NUEVO CAMPO OPCIONAL** - Se agrega para traducir el estudio en acciones concretas

**Características:**
- 3 aplicaciones prácticas específicas y accionables
- Cada una es algo concreto que se puede hacer esta semana
- Badge azul que indica "Aplicaciones Prácticas"
- Se pueden agregar, editar y eliminar desde la interfaz
- Se guardan automáticamente en Vercel KV

**Estructura:**
\`\`\`typescript
practicalApplications: [
  "Esta semana voy a orar a Jehová por cualquier lucha espiritual que esté enfrentando",
  "Si estoy sufriendo espiritualmente, voy a acercarme a un anciano de confianza esta semana",
  "Voy a recordar que los ancianos no son solo para disciplina, sino para ayudarme cuando sufro"
]
\`\`\`

**Objetivo:**
- Traducir el conocimiento en acción
- Crear compromisos concretos y medibles
- Fortalecer la aplicación práctica del estudio

## 🔄 Flujo de trabajo completo

### Inicio
\`\`\`
Tú: "Ayúdame a estudiar"
Claude: "✅ Modo estudio activado. ¿Qué párrafo quieres revisar?"
\`\`\`

### Por cada párrafo
\`\`\`
Tú: "párrafo 5"

Claude:
## 📖 Párrafo 5

### ❓ PREGUNTA
[La pregunta]

### ✅ RESPUESTA DIRECTA
[Respuesta en lenguaje sencillo]

### 🔑 PUNTOS CLAVE
[Bullets organizados - sin marcar tipos, el usuario los marca después]

### 🎴 FLASHCARDS SUGERIDAS (3 tarjetas)
[Lista de flashcards sobre DETALLES específicos]

### 📖 TEXTOS BÍBLICOS SUGERIDOS (2 textos)
[Lista de textos bíblicos del párrafo]

### 💭 PREGUNTAS DE REFLEXIÓN PERSONAL (3 preguntas)
[3 preguntas que invitan a la reflexión personal profunda]

### 💡 APLICACIONES PRÁCTICAS (3 acciones)
[3 acciones concretas que se pueden realizar esta semana]

---
✅ Todo agregado automáticamente al archivo
---

¿Qué párrafo revisamos ahora?
\`\`\`

## ⚡ Automatización - MUY IMPORTANTE

**🚨 REGLA CRÍTICA DE AUTOMATIZACIÓN:**

Cuando el usuario dice **"sigamos con el párrafo X"** o **"párrafo X"**, Claude DEBE:

1. ✅ Proporcionar la respuesta directa, flashcards y textos bíblicos
2. ✅ **AGREGAR TODO AUTOMÁTICAMENTE** al archivo \`data/atalaya-data.ts\`
3. ✅ **NO esperar aprobación del usuario**
4. ✅ **NO preguntar** "¿quieres que los agregue?"

**TODO se agrega automáticamente:**
- ✅ Respuesta directa
- ✅ Puntos clave (sin marcar tipos - el usuario los marca después)
- ✅ Flashcards (2-4 tarjetas)
- ✅ Textos bíblicos (todos los del párrafo)
- ✅ Preguntas de Reflexión Personal (3 preguntas)
- ✅ Aplicaciones Prácticas (3 acciones concretas)
- ✅ Sin necesidad de aprobar
- ✅ Inmediatamente después de presentar la información

**Tú solo necesitas:**
1. Decir "ayúdame a estudiar"
2. Indicar el párrafo → Claude responde Y agrega automáticamente
3. Avanzar al siguiente → Claude responde Y agrega automáticamente

## 🎯 Comandos rápidos

| Comando | Acción |
|---------|--------|
| \`ayúdame a estudiar\` | Inicia modo estudio |
| \`párrafo 5\` | Estudia el párrafo 5 |
| \`párrafos 3 y 4\` | Estudia párrafos 3 y 4 |
| \`siguiente\` | Avanza al siguiente párrafo |
| \`terminamos el estudio\` | Sale del modo estudio |

## 📊 Ejemplo completo de sesión

\`\`\`
Tú: Ayúdame a estudiar

Claude: ✅ Modo estudio activado. ¿Qué párrafo quieres revisar?

Tú: párrafo 1

Claude: [Presenta pregunta, respuesta, puntos clave, flashcards y textos]
✅ Flashcards y textos agregados automáticamente
¿Qué párrafo revisamos ahora?

Tú: siguiente

Claude: [Presenta párrafo 2...]

... [continúa hasta terminar todos los párrafos]

Tú: terminamos el estudio

Claude: ✅ Estudio completado
\`\`\`

## 💡 Recordatorios importantes

1. **Flashcards NO deben parafrasear la pregunta** - deben enfocarse en detalles
2. **Textos bíblicos** - incluir TODOS los mencionados en el párrafo
3. **Preguntas de Reflexión** - 3 preguntas que inviten a la introspección personal
4. **Aplicaciones Prácticas** - 3 acciones concretas y específicas para esta semana
5. **Puntos Clave** - NO marcar tipos al agregar, el usuario los marca después en la interfaz
6. **Todo es automático** - no necesitas aprobar, solo revisar
7. **Recarga localhost:9000** para ver los cambios en la app`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(promptInstructions);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    } catch (err) {
      alert('Error al copiar. Intenta de nuevo.');
    }
  };

  const handleCopyStudy = async () => {
    try {
      await navigator.clipboard.writeText(studyProtocol);
      setShowCopiedStudy(true);
      setTimeout(() => setShowCopiedStudy(false), 2000);
    } catch (err) {
      alert('Error al copiar. Intenta de nuevo.');
    }
  };

  return (
    <div className="fixed bottom-4 left-4 z-10 hidden lg:flex lg:flex-col lg:gap-2">
      {/* Botón Copiar Instrucciones */}
      <div className="relative">
        <button
          onClick={handleCopy}
          className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-4 py-2 rounded-lg shadow-lg hover:from-emerald-700 hover:to-emerald-800 transition-all font-medium text-sm flex items-center gap-2 w-full"
          title="Copiar instrucciones completas para nueva conversación"
        >
          📋 Copiar Instrucciones
        </button>

        {showCopied && (
          <div className="absolute bottom-full left-0 mb-2 bg-emerald-600 text-white px-3 py-1 rounded shadow-lg text-sm whitespace-nowrap">
            ✅ ¡Copiado al portapapeles!
          </div>
        )}
      </div>

      {/* Botón Copiar Protocolo de Estudio */}
      <div className="relative">
        <button
          onClick={handleCopyStudy}
          className="bg-gradient-to-r from-slate-600 to-slate-700 text-white px-4 py-2 rounded-lg shadow-lg hover:from-slate-700 hover:to-slate-800 transition-all font-medium text-sm flex items-center gap-2 w-full"
          title="Copiar solo el protocolo de estudio"
        >
          📚 Copiar Protocolo
        </button>

        {showCopiedStudy && (
          <div className="absolute bottom-full left-0 mb-2 bg-slate-600 text-white px-3 py-1 rounded shadow-lg text-sm whitespace-nowrap">
            ✅ ¡Protocolo copiado!
          </div>
        )}
      </div>
    </div>
  );
}
