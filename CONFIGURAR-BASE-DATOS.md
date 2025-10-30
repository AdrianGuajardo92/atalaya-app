# 🗄️ Configurar Base de Datos Vercel KV

## IMPORTANTE: Necesitas hacer esto para que los datos LSM se guarden

Tu aplicación ya está en línea en:
**https://atalaya-o2y4louwi-adrian-guajardos-projects.vercel.app**

Pero para que puedas guardar y editar las preguntas en LSM desde cualquier dispositivo, necesitas configurar la base de datos. Es GRATIS y toma 2 minutos.

## Pasos para configurar Vercel KV:

### 1. Ir al dashboard de Vercel
Abre en tu navegador: https://vercel.com/dashboard

### 2. Seleccionar tu proyecto
- Busca y haz click en `atalaya-app`

### 3. Ir a la pestaña Storage
- En el menú superior, busca la pestaña **"Storage"**
- Haz click en ella

### 4. Crear base de datos KV
- Click en el botón **"Create Database"**
- Selecciona **"KV"** (es Redis, perfecto para este caso)
- Dale un nombre: `atalaya-lsm-db`
- Selecciona la región más cercana a México (por ejemplo: `Washington, D.C., USA (iad1)`)
- Click en **"Create"**

### 5. Conectar a tu proyecto
- Una vez creada la base de datos, verás un botón **"Connect to Project"**
- Click en ese botón
- Selecciona tu proyecto `atalaya-app`
- Selecciona el environment: **"Production"**
- Click en **"Connect"**

### 6. Redesplegar la aplicación

Ahora que la base de datos está conectada, necesitas redesplegar para que funcione:

Abre la terminal en la carpeta `atalaya-app` y ejecuta:

```bash
vercel --prod
```

Presiona ENTER cuando te pregunte si quieres sobrescribir.

### 7. ¡Listo!

Ahora puedes:

1. Abrir la aplicación desde tu tableta o cualquier dispositivo:
   **https://atalaya-o2y4louwi-adrian-guajardos-projects.vercel.app**

2. Click en **"➕ Agregar pregunta en LSM"** en cualquier pregunta

3. Escribe la pregunta en LSM

4. Click en **"💾 Guardar"**

5. ¡Los datos se guardan en Vercel KV y cualquier dispositivo los verá!

## Verificar que funciona

1. Abre la aplicación en tu computadora
2. Agrega una pregunta en LSM
3. Abre la aplicación en tu tableta
4. Deberías ver la misma pregunta en LSM

## ¿Qué pasa si no configuras la base de datos?

- La aplicación funcionará perfectamente
- PERO los datos LSM NO se guardarán permanentemente
- Cada vez que recargues la página, perderás lo que escribiste

## Si necesitas ayuda

Avísame y te ayudo paso a paso con capturas de pantalla.
