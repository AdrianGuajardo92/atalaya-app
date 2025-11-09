# 📚 Cómo Gestionar Artículos de Estudio

## 🎯 Guía Super Simple

### Para Agregar o Quitar Artículos

**Solo necesitas editar UN archivo:** `data/articles-config.ts`

#### ✅ Ejemplo: Mostrar solo el artículo 36
```typescript
activeArticles: [
  36,
],
```

#### ✅ Ejemplo: Mostrar artículos 36 y 37
```typescript
activeArticles: [
  36,  // "Que llame a los ancianos"
  37,  // "Nuevo artículo"
],
```

#### ✅ Ejemplo: Ocultar el artículo 36 (solo mostrar 37 y 38)
```typescript
activeArticles: [
  37,
  38,
],
```

### Cambiar el Artículo por Defecto

```typescript
defaultArticleNumber: 37,  // Este será el primero que veas al abrir la app
```

### Cambiar el Mes Actual

```typescript
defaultMonth: "2025-10",  // Octubre 2025
```

---

## 🔧 Pasos Detallados

### 1. Abrir el archivo de configuración
Abre: `data/articles-config.ts`

### 2. Editar la lista de artículos activos
```typescript
export const articlesConfig = {
  defaultMonth: "2025-09",

  activeArticles: [
    36,  // ← Agrega o quita números aquí
    // 37,  // ← Puedes comentar con // para ocultar
  ],

  defaultArticleNumber: 36,
};
```

### 3. Guardar y recargar
- Guarda el archivo (Ctrl+S)
- La app se recargará automáticamente
- ¡Listo! 🎉

---

## 📝 Notas Importantes

1. **Los números deben coincidir**: Los artículos que pongas en `activeArticles` deben existir en `data/atalaya-data.ts`

2. **Artículos vacíos no se muestran**: Los artículos sin contenido (placeholders) se filtran automáticamente

3. **No necesitas tocar otros archivos**: Todo se maneja desde `articles-config.ts`

---

## 🚀 Ejemplos Comunes

### Solo mostrar el artículo actual
```typescript
activeArticles: [36],
defaultArticleNumber: 36,
```

### Mostrar la semana completa
```typescript
activeArticles: [36, 37, 38, 39],
defaultArticleNumber: 36,
```

### Preparar para el próximo mes
```typescript
defaultMonth: "2025-10",  // Cambiar al nuevo mes
activeArticles: [40, 41, 42],  // Nuevos artículos
defaultArticleNumber: 40,
```

---

## ❓ Preguntas Frecuentes

**P: ¿Puedo tener varios meses activos?**
R: No, solo un mes a la vez. Cambia `defaultMonth` para cambiar de mes.

**P: ¿Qué pasa si pongo un artículo que no existe?**
R: Se filtrará automáticamente y no causará errores.

**P: ¿Necesito reiniciar el servidor?**
R: No, los cambios se aplican automáticamente con hot reload.

---

## 🎓 Para Desarrolladores

Si necesitas agregar contenido de un artículo nuevo:
1. Edita `data/atalaya-data.ts` (agrega el contenido del artículo)
2. Luego agrega el número a `activeArticles` en `articles-config.ts`

¡Eso es todo! 🎉
