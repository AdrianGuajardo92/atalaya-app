---
name: design-system
description: Sistema de diseño ejecutivo del proyecto. Úsalo cuando crees o modifiques componentes visuales, modales, tarjetas, botones, o cualquier elemento de UI. Referencia obligatoria para mantener consistencia visual.
user-invocable: false
---

# Sistema de Diseño Ejecutivo - Atalaya App

Referencia de patrones visuales extraídos de los componentes reales. SIEMPRE seguir estos patrones al crear o modificar UI.

Para patrones detallados con clases Tailwind exactas, consulta [patterns.md](patterns.md).

## Reglas fundamentales

1. **SIEMPRE** revisar componentes existentes antes de crear algo nuevo
2. **NUNCA** inventar colores o estilos fuera de esta paleta
3. Los artículos 43+ usan diseño ejecutivo automáticamente
4. Cualquier funcionalidad nueva debe implementarse en AMBOS bloques de `QuestionCard.tsx` (premium y original)

## Paleta de colores

| Uso | Clase Tailwind |
|-----|---------------|
| Fondo principal | `bg-white` |
| Fondo secundario | `bg-slate-50` |
| Fondo hover | `bg-slate-100` |
| Texto principal | `text-slate-800` |
| Texto secundario | `text-slate-700` / `text-slate-600` |
| Texto terciario | `text-slate-400` |
| Bordes | `border-slate-200` |
| Bordes hover | `border-slate-300` |
| Acento dorado | `amber-100` a `amber-400` |
| Acento azul | `blue-50` a `blue-600` |
| Fondo oscuro | `bg-slate-800` / `bg-slate-900` |

## Tipografía

| Uso | Clases |
|-----|--------|
| Títulos | `font-serif font-bold text-slate-800` |
| Labels | `text-xs font-bold text-slate-400 uppercase tracking-[0.2em]` |
| Cuerpo | `text-slate-700 leading-relaxed` |
| LSM | `text-slate-700 font-medium text-lg uppercase` |
| Texto bíblico | `text-lg italic text-slate-600 font-serif` |

## Componentes clave

### Contenedor tarjeta
```
bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden relative
+ barra lateral: absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-slate-300 to-slate-400
```

### Modal overlay
```
fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn
```

### Modal contenedor
```
bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[80vh] flex flex-col overflow-hidden border border-slate-200
```

### Modal header
```
p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50
```

### Modal footer
```
p-4 border-t border-slate-100 bg-slate-50 flex justify-end gap-3
```

### Línea divisoria decorativa
```
flex items-center justify-center gap-4
+ líneas: flex-1 h-px bg-gradient-to-r from-transparent to-amber-300/50
+ símbolo central: text-amber-400 text-sm → ✦
```

### Subtítulo de sección
```
bg-slate-800 px-8 py-4 rounded-lg shadow-lg
+ texto: text-xl md:text-2xl font-bold text-white text-center uppercase tracking-[0.15em]
```

### Botón primario (oscuro)
```
bg-slate-800 border-slate-800 text-white hover:bg-slate-900 rounded-lg px-4 py-2 font-medium text-sm shadow-sm
```

### Botón secundario (claro)
```
bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 rounded-lg px-4 py-2 font-medium shadow-sm
```

### Botón pill (pequeño)
```
px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide border
+ variante slate: bg-slate-50 text-slate-600 border-slate-200
+ variante blue: bg-blue-50 text-blue-600 border-blue-200
```

### Badge información
```
px-4 py-1.5 bg-white border border-slate-200 rounded-lg text-sm shadow-sm
+ separador: text-slate-300 → •
```

### Ícono respuesta
```
w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shadow-sm border border-amber-200 → 💡
```

### Tarjeta flashcard
```
bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow
+ respuesta: ml-6 pl-4 border-l-2 border-amber-300
```

## Animaciones

- Entrada: `animate-fadeIn` (opacity 0→1, translateY -10px→0, 0.2s)
- Expansión: `transition-all duration-400 ease-out` con max-height
- Hover: `transition-shadow duration-300` / `transition-all`
- Click: `active:scale-95`
