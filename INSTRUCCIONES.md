# Aplicación Atalaya - Instrucciones de Uso

## 🚀 Cómo ejecutar la aplicación

1. Abre una terminal en la carpeta del proyecto
2. Ejecuta: `npm run dev`
3. Abre tu tableta y ve a: `http://localhost:9000`

## 📱 Características

- **Formato optimizado para tableta**
- **Dos modos de navegación:**
  - **Scroll:** Ver todas las preguntas de corrido
  - **Navegación:** Ver pregunta por pregunta con botones Anterior/Siguiente
- **Botón discreto** para ver los párrafos de cada pregunta
- **Textos bíblicos en azul**
- **Preguntas en español y LSM** (lado a lado)

## 📝 Cómo actualizar el contenido cada semana

### Paso 1: Dame el contenido completo de la Atalaya

Simplemente pégame todo el contenido de la Atalaya de la semana. Por ejemplo:

```
Canción 45
Título: Confiemos en Jehová
Texto bíblico: "Confía en Jehová con todo tu corazón" (Prov. 3:5)
Tema: ¿Cómo podemos demostrar confianza en Jehová?

1, 2. ¿Por qué debemos confiar en Jehová?

Respuesta
[Párrafo 1 completo]

[Párrafo 2 completo]

3. ¿Qué nos ayuda a confiar?

Respuesta
[Párrafo 3 completo]

... etc
```

### Paso 2: Yo estructuro automáticamente

Yo tomaré ese contenido y lo estructuraré en el archivo `data/atalaya-data.ts` con el formato correcto:
- Número de canción
- Título
- Texto bíblico
- Tema
- Preguntas (con sus números)
- Párrafos relacionados

### Paso 3: Después me das las preguntas en LSM

Una vez estructurado todo, me das las preguntas traducidas a LSM en formato texto, por ejemplo:

```
Pregunta 1, 2 (LSM): ¿QUÉ HACER JEHOVÁ CUANDO NOSOTROS ARREPENTIR, CÓMO SENTIR?
Pregunta 3 (LSM): ¿QUÉ AYUDAR NOSOTROS CONFIAR?
```

Y yo las agregaré al campo `textLSM` de cada pregunta.

## 📂 Estructura de archivos importantes

- `data/atalaya-data.ts` - Aquí está TODO el contenido de la semana
- `types/atalaya.ts` - Define la estructura de datos (no tocar)
- `components/QuestionCard.tsx` - Cómo se muestra cada pregunta
- `components/StudyHeader.tsx` - Encabezado con canción, título, texto bíblico, tema
- `app/page.tsx` - Página principal con navegación

## ✏️ Ejemplo de flujo semanal

**Tú:**
"Aquí está la Atalaya de esta semana..."
[Pegas todo el contenido]

**Yo:**
"Perfecto, ya estructuré todo el contenido en el archivo de datos."

**Tú:**
"Aquí están las preguntas en LSM..."
[Me das las traducciones]

**Yo:**
"Listo, agregué todas las preguntas en LSM. La aplicación está actualizada."

**Tú:**
Ejecutas `npm run dev` y usas la aplicación en tu tableta.

## 🎨 Personalización

Si quieres cambiar colores, tamaños de texto, o el diseño, avísame y lo ajustamos.

## ⚠️ Importante

- La estructura base SIEMPRE es la misma
- Solo cambia el contenido semanal
- Respeto exacto de números de preguntas
- Las preguntas SIEMPRE son tal cual (sin añadir nada)
- Los párrafos se ocultan por defecto (solo se ven al hacer click)
