# Patrones Detallados - Clases Tailwind Exactas

Referencia completa con las clases Tailwind exactas de cada componente.

## Contenedor principal (tarjeta de pregunta)

**Componente:** `QuestionCard.tsx` ~línea 1062 | `ReviewQuestionCard.tsx` ~línea 96

```
bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden relative group hover:shadow-xl transition-shadow duration-300
```

Barra lateral decorativa:
```
absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-slate-300 to-slate-400
```

## Labels y cabeceras

**Label de pregunta:** `QuestionCard.tsx` ~línea 1070
```
text-xs font-bold text-slate-400 tracking-[0.2em] uppercase
```

**Título de pregunta:** `QuestionCard.tsx` ~línea 1101
```
text-2xl md:text-3xl font-serif text-slate-800 leading-tight mb-2
```

**Label ámbar (resúmenes):** `QuestionCard.tsx` ~línea 876
```
text-xs font-bold text-amber-700 uppercase tracking-[0.15em] mb-3
```

## Sección intermedia (LSM y herramientas)

**Contenedor:** `QuestionCard.tsx` ~línea 1121
```
px-8 py-4 bg-slate-50 border-y border-slate-100 flex flex-wrap items-center gap-4
```

**LSM editando:**
```
bg-white p-2 rounded-lg border border-blue-200 shadow-sm animate-fadeIn
```

**LSM inactivo:**
```
group/lsm cursor-pointer p-3 rounded-lg border border-transparent hover:bg-white hover:border-slate-200 hover:shadow-sm transition-all
```

**Label LSM:**
```
text-xs font-bold text-slate-500 uppercase tracking-wider group-hover/lsm:text-blue-600
```

**Texto LSM:**
```
text-slate-700 font-medium text-lg leading-snug min-h-[1.5rem] uppercase
```

## Botones de acción

**Ver/Ocultar respuesta (expandido):**
```
px-4 py-2 rounded-lg font-medium text-sm transition-all shadow-sm border bg-white border-slate-300 text-slate-700
```

**Ver/Ocultar respuesta (colapsado):**
```
px-4 py-2 rounded-lg font-medium text-sm transition-all shadow-sm border bg-slate-800 border-slate-800 text-white hover:bg-slate-900
```

**Botón infografía:**
```
flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700 transition-colors text-xs font-bold uppercase tracking-wide border border-blue-200
```

**Botón párrafos:**
```
flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-800 transition-colors text-xs font-bold uppercase tracking-wide border border-slate-200
```

**Botón lectura bíblica:**
```
inline-flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-transform active:scale-95 shadow-md
```

**Botón copiar:**
```
px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-medium flex items-center gap-2 shadow-sm
```

## Subtítulo de sección

**Componente:** `QuestionCard.tsx` ~línea 998

```
bg-slate-800 px-8 py-4 rounded-lg shadow-lg
```

Texto:
```
text-xl md:text-2xl font-bold text-white text-center uppercase tracking-[0.15em]
```

## Imagen ilustrativa

**Contenedor:** `QuestionCard.tsx` ~línea 1174
```
px-8 py-6 bg-white
```

**Wrapper:**
```
rounded-xl overflow-hidden shadow-lg border border-slate-200
```

**Imagen:**
```
w-full h-auto object-cover
```

**Caption:**
```
text-sm text-slate-600 italic p-4 bg-slate-50 text-center border-t border-slate-100
```

## Sección de respuesta

**Contenedor:** `QuestionCard.tsx` ~línea 1195
```
p-8 bg-white
```

**Ícono respuesta (círculo):**
```
w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-lg shadow-sm border border-amber-200
```

**Párrafo numerado:**
```
text-lg text-slate-700 leading-relaxed mb-4
```

**Numeración:**
```
text-slate-400 font-medium → [{n}]
```

## Contexto adicional

**Contenedor:**
```
mt-6 border-l-2 border-slate-200 bg-slate-50 rounded-r-lg p-5
```

**Texto:**
```
text-base text-slate-600 leading-relaxed
```

## Puntos clave (bullets)

**Item:**
```
flex gap-3 group/bullet
```

**Punto:**
```
w-1.5 h-1.5 rounded-full bg-slate-300 mt-2.5 group-hover/bullet:bg-blue-500 transition-colors
```

**Texto:**
```
text-slate-600 group-hover/bullet:text-slate-800 transition-colors
```

## Línea divisoria

```
flex items-center justify-center gap-4
```

Líneas:
```
flex-1 h-px bg-gradient-to-r from-transparent to-amber-300/50
flex-1 h-px bg-gradient-to-l from-transparent to-amber-300/50
```

Símbolo: `text-amber-400 text-sm` → ✦

## Tarjetas flashcard (slide-down)

**Grid contenedor:**
```
bg-slate-50 p-8
```

**Tarjeta individual:**
```
bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow
```

**Botón pregunta:**
```
w-full text-left px-5 py-4 flex items-start gap-3
```

**Flecha expandible:**
```
text-slate-400 mt-0.5 text-sm transition-transform duration-300
```

**Texto pregunta:**
```
text-slate-700 font-sans font-semibold text-base leading-relaxed flex-1
```

**Badge ver/ocultar:**
```
text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full
+ abierto: bg-slate-800 text-white
+ cerrado: bg-slate-100 text-slate-400
```

**Respuesta slide-down:**
```
overflow-hidden transition-all duration-400 ease-out
+ abierto: max-h-[500px] opacity-100
+ cerrado: max-h-0 opacity-0
```

**Borde respuesta:**
```
ml-6 pl-4 border-l-2 border-amber-300
```

## Modal de párrafos

**Overlay:**
```
fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn
```

**Contenedor:**
```
bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[80vh] flex flex-col overflow-hidden border border-slate-200
```

**Header:**
```
p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50
```

**Título:**
```
text-lg font-bold text-slate-800 flex items-center gap-2
```

**Botón cerrar:**
```
text-slate-400 hover:text-slate-600 transition-colors
```

**Contenido scrolleable:**
```
p-6 overflow-y-auto custom-scrollbar bg-white
```

**Footer:**
```
p-4 border-t border-slate-100 bg-slate-50 flex justify-end gap-3
```

## Modal infografía (fullscreen)

**Overlay:**
```
fixed inset-0 z-50 bg-black/95 flex flex-col
```

**Header:**
```
flex-shrink-0 h-12 bg-slate-800 px-4 flex items-center justify-between
```

**Botón cerrar móvil:**
```
w-full py-4 bg-red-600 hover:bg-red-500 active:bg-red-700 text-white font-semibold text-lg rounded-xl flex items-center justify-center gap-3 shadow-lg min-h-[56px]
```

## Badges (StudyHeader)

**Badge artículo:**
```
px-4 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-700 font-bold text-sm shadow-sm
```

**Badge semana:**
```
px-4 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-600 font-medium text-sm shadow-sm
```

## Select artículos

```
appearance-none pl-4 pr-10 py-2.5 bg-white border border-slate-200 rounded-lg text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-slate-200 focus:border-slate-300 cursor-pointer hover:border-slate-300 hover:shadow-md transition-all text-sm shadow-sm min-w-[320px]
```

## Texto bíblico (StudyHeader)

**Contenedor:**
```
bg-slate-50 border-l-4 border-slate-300 rounded-r-lg p-6 mb-8
```

**Texto:**
```
text-lg lg:text-xl leading-relaxed italic text-slate-600 font-serif
```
