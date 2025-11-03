# 📚 Cómo Agregar Artículos Ilimitados

## ✅ NO HAY LÍMITES

**CONFIRMADO:** El código NO tiene ningún límite en la cantidad de artículos que puedes agregar.

- ✅ Puedes agregar **CUALQUIER cantidad de artículos** por mes
- ✅ Puedes agregar **CUALQUIER cantidad de meses**
- ✅ Puedes agregar **CUALQUIER cantidad de años**
- ✅ El dropdown automáticamente mostrará TODOS los artículos que agregues
- ✅ Cada artículo mantiene su propia data LSM, favoritos y tarjetas ocultas

## 📖 Estructura de la Base de Datos

```typescript
export const atalayaDatabase: AtalayaDatabase = {
  // Puedes agregar tantos meses como quieras
  "2025-08": {
    articles: [
      // Puedes agregar tantos artículos como quieras aquí
      { /* Artículo 34 */ },
      { /* Artículo 35 */ },
      { /* Artículo 36 */ },
      // ... artículos 37, 38, 39, 40, etc.
    ]
  },
  "2025-09": {
    articles: [
      // Artículos de septiembre
      { /* Artículo 39 */ },
      { /* Artículo 40 */ },
      // ... cuantos necesites
    ]
  },
  "2025-10": {
    articles: [
      // Artículos de octubre
    ]
  }
  // ... puedes seguir agregando meses infinitamente
};
```

## 🆕 Cómo Agregar un Nuevo Artículo

### Paso 1: Identifica el mes correcto

En `data/atalaya-data.ts`, busca el mes correcto (formato: "YYYY-MM"):
- "2025-08" = Agosto 2025
- "2025-09" = Septiembre 2025
- "2025-10" = Octubre 2025
- etc.

### Paso 2: Agrega el artículo al array

Simplemente agrega un nuevo objeto al array `articles`:

```typescript
"2025-08": {
  articles: [
    // Artículos existentes...

    // Nuevo artículo - agrega al final
    {
      metadata: {
        articleNumber: 39,  // El número que quieras
        week: "2-8 Dic",
        month: "Agosto",    // Nombre del mes en español
        year: 2025
      },
      song: "Canción 123",
      title: "Título del nuevo artículo",
      biblicalText: "\"Texto bíblico\" (Referencia)",
      theme: "Tema del artículo",
      questions: [
        {
          number: "1",
          textEs: "¿Primera pregunta?",
          textLSM: "",
          paragraphs: [1]
        }
        // ... más preguntas
      ],
      paragraphs: [
        {
          number: 1,
          content: "Contenido del párrafo..."
        }
        // ... más párrafos
      ],
      reviewQuestions: [
        {
          question: "¿Pregunta de repaso?"
        }
      ],
      finalSong: "Canción 45 y oración"
    }
  ]
}
```

### Paso 3: ¡Eso es todo!

El dropdown automáticamente mostrará el nuevo artículo. No necesitas cambiar NADA más.

## 📅 Cómo Agregar un Nuevo Mes

Si necesitas agregar artículos de un mes que aún no existe:

```typescript
export const atalayaDatabase: AtalayaDatabase = {
  "2025-08": {
    articles: [ /* artículos de agosto */ ]
  },

  // Agrega un nuevo mes - simplemente copia esta estructura
  "2025-11": {
    articles: [
      {
        metadata: {
          articleNumber: 43,
          week: "1-7 Ene",
          month: "Noviembre",
          year: 2025
        },
        song: "",
        title: "",
        biblicalText: "",
        theme: "",
        questions: [],
        paragraphs: [],
        reviewQuestions: [],
        finalSong: ""
      }
    ]
  }
};
```

**IMPORTANTE:** Después de agregar un nuevo mes, actualiza la línea en `app/page.tsx`:

```typescript
// Cambia esta línea para apuntar al nuevo mes
const [currentMonth] = useState<string>("2025-11"); // <- Actualiza aquí
```

## 🔢 Ejemplos Reales

### Ejemplo 1: 10 artículos en un solo mes

```typescript
"2025-08": {
  articles: [
    { metadata: { articleNumber: 34, ... } },
    { metadata: { articleNumber: 35, ... } },
    { metadata: { articleNumber: 36, ... } },
    { metadata: { articleNumber: 37, ... } },
    { metadata: { articleNumber: 38, ... } },
    { metadata: { articleNumber: 39, ... } },
    { metadata: { articleNumber: 40, ... } },
    { metadata: { articleNumber: 41, ... } },
    { metadata: { articleNumber: 42, ... } },
    { metadata: { articleNumber: 43, ... } }
  ]
}
```

### Ejemplo 2: Múltiples meses

```typescript
export const atalayaDatabase: AtalayaDatabase = {
  "2025-08": { articles: [ /* 5 artículos */ ] },
  "2025-09": { articles: [ /* 4 artículos */ ] },
  "2025-10": { articles: [ /* 6 artículos */ ] },
  "2025-11": { articles: [ /* 3 artículos */ ] },
  "2025-12": { articles: [ /* 8 artículos */ ] }
};
```

## 📝 Plantilla de Artículo Vacío

Usa esta plantilla para agregar rápidamente un nuevo artículo:

```typescript
{
  metadata: {
    articleNumber: XX,  // Número del artículo
    week: "XX-XX XXX",  // Ej: "4-10 Nov"
    month: "XXXXX",     // Ej: "Agosto"
    year: 2025
  },
  song: "",
  title: "",
  biblicalText: "",
  theme: "",
  questions: [],
  paragraphs: [],
  reviewQuestions: [],
  finalSong: ""
}
```

## ⚡ Ventajas del Sistema

1. **Sin límites**: Agrega 5, 10, 50, 100 artículos - funciona igual
2. **Organización por mes**: Fácil de encontrar artículos específicos
3. **Data separada**: Cada artículo tiene su propia data LSM/favoritos
4. **Dropdown dinámico**: Se actualiza automáticamente
5. **Escalable**: El rendimiento no se ve afectado por la cantidad de artículos

## 🎯 Resumen

- ✅ NO hay límites hardcodeados
- ✅ Agrega tantos artículos como necesites
- ✅ Solo modifica `data/atalaya-data.ts`
- ✅ El resto del código funciona automáticamente
