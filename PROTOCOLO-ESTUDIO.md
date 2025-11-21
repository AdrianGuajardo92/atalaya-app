# 📚 PROTOCOLO COMPLETO DE ESTUDIO PÁRRAFO POR PÁRRAFO

## 🚨 PASO INICIAL - CUANDO RECIBES UN NUEVO ARTÍCULO

**IMPORTANTE:** Ya no se borra contenido anterior. Los artículos se mantienen organizados por mes en `atalayaDatabase`.

**Agregar un nuevo artículo**

Cuando el usuario proporciona un nuevo artículo de La Atalaya:

1. Identifica el mes correcto en `atalayaDatabase` (ej: "2025-08" para Agosto 2025)
2. Agrega el nuevo artículo al array `articles` de ese mes
3. Si el mes no existe, créalo primero con su estructura

Cada artículo debe incluir `metadata` con:
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
- Si el párrafo tiene un texto para leer, aparecerá: **📖 LEE [referencia bíblica]** en azul

### 2. ✅ RESPUESTA DIRECTA
- Lenguaje sencillo y directo
- 2-4 oraciones máximo
- Basada SOLO en los párrafos correspondientes
- Sin información extra

### 3. 🔑 PUNTOS CLAVE
- Formato visual con tarjetas individuales en grid responsivo
- Estructura: primeros 2-3 puntos = respuesta directa, resto = información entrelazada
- Títulos opcionales con **negrita**
- **Sistema de marcado con botones independientes:**
  - Botón ✓ verde: Marca/desmarca como "Respuesta Directa"
  - Botón 🔗 naranja: Marca/desmarca como "Entrelazado"
  - Un punto puede tener ambas marcas, una, o ninguna
  - Las marcas se guardan automáticamente en Vercel KV
- Se pueden editar, agregar y eliminar puntos individuales
- Click en el punto para marcarlo como completado durante el estudio

### 4. 📖 TEXTOS BÍBLICOS SUGERIDOS

**CRITERIOS:**
✅ Incluir TODOS los textos citados en el párrafo
✅ Incluir textos mencionados aunque no estén entre paréntesis
✅ Texto completo de la Traducción del Nuevo Mundo (TNM)

**Estructura de cada tarjeta:**
```typescript
{
  reference: "2 Corintios 2:5-11",
  purpose: "Perdonar evita que Satanás nos venza",  // ← Máx 10-12 palabras, directo
  text: "[Texto completo TNM]"
}
```

**Formato del "purpose":**
- ✅ Directo: "Perdonar evita que Satanás nos venza"
- ✅ Específico: "David fue perdonado completamente"
- ❌ Evitar: "Muestra que...", "Enseña que...", "Explica que..."

---

## 🎴 4. FLASHCARDS - PROPORCIONADAS POR EL USUARIO

**🚨 CAMBIO IMPORTANTE:** Las flashcards ya NO se generan automáticamente.

**Nuevo flujo de trabajo:**

1. **Claude proporciona:**
   - ❓ Pregunta del párrafo
   - ✅ Respuesta directa
   - 🔑 Puntos clave
   - 📖 Textos bíblicos

2. **El usuario proporciona:**
   - 🎴 Flashcards (lista completa con preguntas y respuestas)

3. **Claude agrega:**
   - Todo al archivo `data/atalaya-data.ts` automáticamente

**Características de las flashcards proporcionadas por el usuario:**
- Cantidad variable (generalmente 10-17 flashcards por párrafo)
- Preguntas muy específicas y detalladas
- Algunas con espacios en blanco (_____)
- Preguntas sobre qué escrituras se citan
- Cobertura exhaustiva de cada detalle del párrafo

**Ejemplo de flashcards del usuario:**
```
¿Por qué motivo principal Jesús no participó en los asuntos políticos de su tiempo?
→ Porque sabía que los seres humanos no tienen ni el derecho ni la capacidad de gobernarse

El texto identifica a _____ como la primera causa de las injusticias.
→ Satanás

¿Qué escritura describe la principal actividad de Jesús como la predicación del Reino de Dios?
→ Lucas 8:1
```

---

## 🎴 REFERENCIA: METODOLOGÍA DE FLASHCARDS (ARCHIVO HISTÓRICO)

**NOTA:** Esta sección se mantiene como referencia histórica de la metodología que se usaba anteriormente.
Las flashcards ahora son proporcionadas directamente por el usuario.

### 🎯 FILOSOFÍA FUNDAMENTAL

Las flashcards deben ayudar al estudiante a **dominar TODO el contenido del párrafo de manera sistemática**. No son solo para detalles adicionales o curiosidades, sino para garantizar la comprensión completa del párrafo.

**Modelo de referencia: NotebookLM**

Las flashcards deben seguir el estilo de NotebookLM:
- ✅ Cubren **TODO** el contenido importante del párrafo
- ✅ Son **directas y literales** sobre la información principal
- ✅ Ayudan a **comprender TODO** el párrafo, no solo detalles
- ✅ No evitan lo "obvio" - preguntan **todo lo necesario**
- ✅ Son **prácticas y útiles** para el estudio real

---

### 📊 CANTIDAD DE FLASHCARDS

**Regla general:** 4-6 flashcards por párrafo

- Párrafos cortos (1-3 oraciones): 3-4 flashcards
- Párrafos medianos (4-6 oraciones): 4-5 flashcards
- Párrafos largos (7+ oraciones): 5-6 flashcards

**NO te limites** si el párrafo tiene mucha información importante.

---

### ✅ CRITERIOS PARA CREAR FLASHCARDS

#### 1. **COBERTURA COMPLETA DEL PÁRRAFO**

Cada flashcard debe abordar un punto diferente del párrafo. En conjunto, las flashcards deben cubrir:

- ✅ La información principal del párrafo
- ✅ Los detalles específicos mencionados
- ✅ Las causas y efectos explicados
- ✅ Los ejemplos y nombres mencionados
- ✅ Las cualidades, características o listas
- ✅ Las referencias bíblicas y su contenido
- ✅ Las conclusiones o aplicaciones

#### 2. **PREGUNTAS DIRECTAS Y SISTEMÁTICAS**

Las preguntas deben ser:
- **Directas:** "¿Qué...?", "¿Cómo...?", "¿Por qué...?", "¿Cuál...?", "¿Quién...?"
- **Literales:** Basadas en el texto exacto del párrafo
- **Específicas:** Apuntan a información concreta
- **Claras:** Fáciles de entender

#### 3. **NO EVITAR LO "OBVIO"**

❌ **ERROR COMÚN:** Pensar "esto ya está en la respuesta directa, no lo pregunto"

✅ **CORRECTO:** Preguntar por toda la información importante, esté o no en la respuesta directa

**Ejemplo del párrafo 6:**

✅ "Según Mateo 23:2-4, ¿cómo le hacían la vida imposible los líderes religiosos a la gente?"
✅ "Además de los líderes religiosos, ¿qué otro grupo maltrataba al pueblo judío en tiempos de Jesús?"
✅ "¿Cómo se llamaba el grupo de judíos que estaba dispuesto a combatir por la independencia de Roma?"
✅ "¿Cuál fue la postura de Jesús frente a los movimientos sociales que buscaban un cambio político o la independencia?"
✅ "Según Juan 6:15, ¿qué hizo Jesús cuando se enteró de que la gente quería hacerlo rey?"

Todas estas preguntas cubren sistemáticamente el párrafo completo.

---

### 📝 TIPOS DE PREGUNTAS EFECTIVAS

#### **Tipo 1: Preguntas de información directa**
Cubren los datos principales del párrafo.

**Ejemplos:**
- "¿Qué injusticias vio Jesús cuando estuvo en la Tierra?"
- "¿Qué grupo maltrataba al pueblo judío además de los líderes religiosos?"
- "¿Cuál fue la postura de Jesús frente a los movimientos sociales?"

#### **Tipo 2: Preguntas sobre textos bíblicos**
Relacionan el párrafo con las referencias bíblicas mencionadas.

**Ejemplos:**
- "Según Mateo 23:2-4, ¿cómo le hacían la vida imposible los líderes religiosos?"
- "Según Juan 6:15, ¿qué hizo Jesús cuando querían hacerlo rey?"
- "Según Salmo 37:1, 8, ¿qué puede pasar si sentimos ira durante mucho tiempo?"

#### **Tipo 3: Preguntas sobre detalles específicos**
Cubren listas, números, nombres, cualidades.

**Ejemplos:**
- "¿Cómo se llamaba el grupo dispuesto a combatir por la independencia?"
- "¿Cuántas cualidades de Jehová se mencionan en estos párrafos?"
- "¿Qué dos tipos de personas toman decisiones egoístas según el párrafo 1?"

#### **Tipo 4: Preguntas sobre causas y efectos**
Relacionan acciones con consecuencias.

**Ejemplos:**
- "¿Qué debemos recordar sobre nuestro enfado aunque esté justificado?"
- "¿Qué puede pasar si sentimos ira durante mucho tiempo o no la controlamos?"
- "¿Por qué no intentó Jesús acabar con las injusticias de su tiempo?"

#### **Tipo 5: Preguntas sobre ejemplos y aplicaciones**
Cubren ejemplos modernos o aplicaciones prácticas.

**Ejemplos:**
- "¿A quién debemos imitar para saber cómo reaccionar ante las injusticias?"
- "¿Qué hizo Jesús que demuestra cómo debemos reaccionar?"

---

### ❌ ERRORES A EVITAR

#### **ERROR #1: Parafrasear la pregunta principal**
❌ "¿Qué trampa usa Satanás para que dejemos de servir?" (si la pregunta del párrafo es similar)
✅ En su lugar, pregunta por detalles específicos del párrafo

#### **ERROR #2: Preguntas tipo trivia sin valor espiritual**
❌ "¿En qué monte estaba Moisés cuando Jehová se describió?"
✅ "¿Cómo te ayuda saber que Jehová es el Dios de la verdad según Salmo 31:5?"

#### **ERROR #3: Evitar información "obvia"**
❌ Pensar: "Esto ya está en la respuesta directa, no lo pregunto"
✅ Pregunta por toda la información importante del párrafo

#### **ERROR #4: Preguntas demasiado complicadas**
❌ "¿Para qué sirve que la conciencia nos haga sentir mal?"
✅ "¿Por qué es bueno sentirse mal cuando pecamos?"

#### **ERROR #5: Cubrir solo detalles adicionales**
❌ Solo preguntar por información secundaria o curiosidades
✅ Cubrir sistemáticamente todo el contenido importante del párrafo

---

### 🎯 PROCESO PASO A PASO PARA CREAR FLASHCARDS

**Paso 1: Leer el párrafo completo cuidadosamente**
- Lee TODO el contenido del párrafo
- Identifica todos los puntos importantes
- No te enfoques solo en "detalles adicionales"

**Paso 2: Identificar los elementos clave**
Pregúntate:
- ¿Qué información principal transmite este párrafo?
- ¿Qué textos bíblicos menciona y qué dicen?
- ¿Hay listas, números, nombres, cualidades?
- ¿Hay causas y efectos?
- ¿Hay ejemplos bíblicos o modernos?
- ¿Qué aplicación práctica tiene?

**Paso 3: Crear preguntas sistemáticas**
Para cada elemento identificado, crea una pregunta:
- Directa y literal
- Específica sobre ese elemento
- Fácil de entender
- Con referencia bíblica si aplica

**Paso 4: Verificar cobertura completa**
Revisa que las flashcards en conjunto cubran:
- ✅ La información principal
- ✅ Los textos bíblicos
- ✅ Los detalles específicos
- ✅ Las aplicaciones prácticas

**Paso 5: Asegurar lenguaje sencillo**
- Preguntas claras y directas
- Sin construcciones complicadas
- Lenguaje accesible

---

### 📌 EJEMPLO COMPLETO: PÁRRAFO 6

**Contenido del párrafo 6:**
"Jesús vio muchas injusticias cuando estuvo en la Tierra. Por ejemplo, sabía que los líderes religiosos le hacían la vida imposible a la gente con un sinfín de reglas (Mat. 23:2-4). También era consciente de lo mal que trataban las autoridades romanas al pueblo. Había muchos judíos que querían la independencia de Roma, y algunos —como los zelotes— estaban dispuestos a combatir por ella. Ahora bien, Jesús no lideró ni apoyó ningún movimiento social a favor del cambio. Cuando se enteró de que la gente quería hacerlo rey, se fue enseguida (Juan 6:15)."

**Análisis para flashcards:**
1. Líderes religiosos → ¿Cómo hacían la vida imposible?
2. Autoridades romanas → ¿Qué otro grupo maltrataba?
3. Los zelotes → ¿Cómo se llamaba el grupo combativo?
4. Postura de Jesús → ¿Cuál fue su postura ante movimientos?
5. Juan 6:15 → ¿Qué hizo cuando querían hacerlo rey?

**Flashcards resultantes (5 tarjetas):**

1. "Según Mateo 23:2-4, ¿cómo le hacían la vida imposible los líderes religiosos a la gente?"
   → Con un sinfín de reglas y cargas pesadas

2. "Además de los líderes religiosos, ¿qué otro grupo maltrataba al pueblo judío en tiempos de Jesús?"
   → Las autoridades romanas

3. "¿Cómo se llamaba el grupo de judíos que estaba dispuesto a combatir por la independencia de Roma?"
   → Los zelotes

4. "¿Cuál fue la postura de Jesús frente a los movimientos sociales que buscaban un cambio político o la independencia?"
   → No lideró ni apoyó ningún movimiento social a favor del cambio

5. "Según Juan 6:15, ¿qué hizo Jesús cuando se enteró de que la gente quería hacerlo rey?"
   → Se fue enseguida y se retiró a la montaña él solo

✅ **Estas flashcards cubren TODO el párrafo de manera sistemática.**

---

### 🔍 AUTO-VERIFICACIÓN

Antes de finalizar las flashcards, pregúntate:

1. ✅ ¿Cubren TODO el contenido importante del párrafo?
2. ✅ ¿Son directas y literales?
3. ✅ ¿Están basadas en el texto del párrafo?
4. ✅ ¿Incluyen las referencias bíblicas mencionadas?
5. ✅ ¿Ayudarían a alguien a dominar el contenido del párrafo?
6. ✅ ¿Evité parafrasear la pregunta principal?
7. ✅ ¿Evité preguntas tipo trivia sin valor espiritual?
8. ✅ ¿Usé lenguaje sencillo y claro?

Si todas las respuestas son SÍ, las flashcards están correctas.

---

## 🔄 Flujo de trabajo completo

### Inicio
```
Tú: "Ayúdame a estudiar"
Claude: "✅ Modo estudio activado. ¿Qué párrafo quieres revisar?"
```

### Por cada párrafo (NUEVO FLUJO)

**Paso 1: Usuario indica el párrafo**
```
Tú: "párrafo 5"
```

**Paso 2: Claude proporciona respuesta, puntos clave y textos bíblicos**
```
Claude:
## 📖 Párrafo 5

### ❓ PREGUNTA
[La pregunta]

### ✅ RESPUESTA DIRECTA
[Respuesta en lenguaje sencillo]

### 🔑 PUNTOS CLAVE (En tarjetas visuales)
[Puntos organizados en tarjetas - con botones ✓ y 🔗 para marcar]

### 📖 TEXTOS BÍBLICOS SUGERIDOS (2-3 textos)
[Lista de textos bíblicos del párrafo]

---
✅ Esperando flashcards del usuario...
```

**Paso 3: Usuario proporciona las flashcards**
```
Tú: [Lista de flashcards con preguntas y respuestas]
```

**Paso 4: Claude agrega todo automáticamente**
```
Claude:
✅ Todo agregado automáticamente al archivo (respuesta, puntos clave, flashcards y textos bíblicos)
---

¿Qué párrafo revisamos ahora?
```

## ⚡ Automatización - MUY IMPORTANTE

**🚨 NUEVO FLUJO DE AUTOMATIZACIÓN:**

### Paso 1: Usuario solicita párrafo
Cuando el usuario dice **"párrafo X"**, Claude DEBE:

1. ✅ Proporcionar la **respuesta directa**
2. ✅ Proporcionar los **puntos clave**
3. ✅ Proporcionar los **textos bíblicos**
4. ✅ **ESPERAR** a que el usuario proporcione las flashcards
5. ✅ **NO generar flashcards automáticamente**

### Paso 2: Usuario proporciona flashcards
El usuario proporcionará una lista de flashcards con formato:
```
Pregunta 1 → Respuesta 1
Pregunta 2 → Respuesta 2
...
```

### Paso 3: Agregar TODO automáticamente
Una vez que el usuario proporciona las flashcards, Claude DEBE:

1. ✅ **AGREGAR TODO AUTOMÁTICAMENTE** al archivo `data/atalaya-data.ts`
2. ✅ **NO esperar aprobación del usuario**
3. ✅ **NO preguntar** "¿quieres que los agregue?"
4. ✅ Confirmar que todo fue agregado

**TODO se agrega automáticamente:**
- ✅ Respuesta directa
- ✅ Puntos clave (en tarjetas visuales, con botones ✓ y 🔗 para marcar)
- ✅ Flashcards (proporcionadas por el usuario)
- ✅ Textos bíblicos (todos los del párrafo)
- ✅ Textos con "LEE" cuando aplique
- ✅ Sin necesidad de aprobar
- ✅ Inmediatamente después de recibir las flashcards

**Tú solo necesitas:**
1. Decir "ayúdame a estudiar"
2. Indicar el párrafo → Claude proporciona respuesta, puntos clave y textos bíblicos
3. Proporcionar las flashcards → Claude agrega TODO automáticamente
4. Avanzar al siguiente párrafo

## 🎯 Comandos rápidos

| Comando | Acción |
|---------|--------|
| `ayúdame a estudiar` | Inicia modo estudio |
| `párrafo 5` | Estudia el párrafo 5 |
| `párrafos 3 y 4` | Estudia párrafos 3 y 4 |
| `siguiente` | Avanza al siguiente párrafo |
| `terminamos el estudio` | Sale del modo estudio |

## 📊 Ejemplo completo de sesión (NUEVO FLUJO)

```
Tú: Ayúdame a estudiar

Claude: ✅ Modo estudio activado. ¿Qué párrafo quieres revisar?

Tú: párrafo 1

Claude: [Presenta pregunta, respuesta, puntos clave y textos bíblicos]
✅ Esperando flashcards del usuario...

Tú: [Proporciona lista de flashcards]

Claude: ✅ Todo agregado automáticamente al archivo
¿Qué párrafo revisamos ahora?

Tú: siguiente

Claude: [Presenta párrafo 2: pregunta, respuesta, puntos clave y textos]
✅ Esperando flashcards del usuario...

Tú: [Proporciona flashcards del párrafo 2]

Claude: ✅ Todo agregado automáticamente al archivo
¿Qué párrafo revisamos ahora?

... [continúa hasta terminar todos los párrafos]

Tú: terminamos el estudio

Claude: ✅ Estudio completado
```

## 📝 PREGUNTAS DE REPASO

Al final del estudio, hay **3 preguntas de repaso** que resumen los puntos principales:
- Cada pregunta tiene su **respuesta directa** y **puntos clave en tarjetas visuales**
- Las respuestas se muestran **expandidas por defecto** (no necesitas hacer clic)
- Los puntos clave aparecen como **tarjetas individuales** con formato visual
- Puedes agregar y editar la versión en LSM de las preguntas

## 💡 Recordatorios importantes

1. **Flashcards proporcionadas por el usuario** - El usuario las proporciona después de recibir la respuesta, puntos clave y textos bíblicos
2. **Claude NO genera flashcards** - Solo proporciona respuesta, puntos clave y textos bíblicos
3. **Textos bíblicos** - Claude incluye TODOS los textos mencionados en el párrafo
4. **Puntos Clave** - Se muestran como tarjetas visuales en grid
5. **Marcado independiente** - Botones separados para "Respuesta Directa" y "Entrelazado"
6. **Textos con LEE** - Se muestran automáticamente en azul bajo la pregunta
7. **Preguntas de repaso** - Al final, con respuestas y puntos clave expandidos
8. **Automatización en dos pasos:**
   - Paso 1: Claude proporciona respuesta, puntos clave y textos
   - Paso 2: Usuario proporciona flashcards → Claude agrega TODO automáticamente
9. **No necesitas aprobar** - Una vez proporcionadas las flashcards, todo se agrega automáticamente
10. **Recarga localhost:9000** para ver los cambios en la app
