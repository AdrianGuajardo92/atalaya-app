# 🚀 Cómo subir la aplicación a Vercel

## Paso 1: Crear cuenta en Vercel (si no tienes una)

1. Ve a https://vercel.com/signup
2. Regístrate con GitHub, GitLab, Bitbucket o email
3. Es 100% GRATIS

## Paso 2: Desplegar desde la terminal

1. Abre una terminal en la carpeta del proyecto `atalaya-app`

2. Ejecuta el siguiente comando:
   ```bash
   vercel
   ```

3. La primera vez te pedirá que inicies sesión:
   - Te abrirá el navegador automáticamente
   - Confirma la autenticación
   - Regresa a la terminal

4. Te hará algunas preguntas, responde así:
   - **Set up and deploy?** → Presiona ENTER (Yes)
   - **Which scope?** → Presiona ENTER (tu cuenta)
   - **Link to existing project?** → N (No)
   - **What's your project's name?** → Presiona ENTER (atalaya-app)
   - **In which directory is your code located?** → Presiona ENTER (./)
   - **Want to override the settings?** → N (No)

5. ¡Listo! Vercel desplegará tu aplicación y te dará una URL como:
   ```
   https://atalaya-app-xxxx.vercel.app
   ```

## Paso 3: Configurar Vercel KV (Base de datos)

Para que los datos LSM se guarden y sincronicen entre dispositivos:

1. Ve a https://vercel.com/dashboard
2. Haz click en tu proyecto `atalaya-app`
3. Ve a la pestaña "Storage"
4. Click en "Create Database"
5. Selecciona "KV" (Redis)
6. Dale un nombre: `atalaya-lsm-db`
7. Click en "Create"
8. Click en "Connect to Project" → Selecciona `atalaya-app`
9. ¡Listo! La base de datos está conectada

10. Regresa a la terminal y ejecuta:
    ```bash
    vercel --prod
    ```

## Paso 4: Usar la aplicación

1. Abre la URL que te dio Vercel en cualquier dispositivo: `https://atalaya-app-xxxx.vercel.app`
2. Ahora puedes:
   - Ver las preguntas en español
   - Agregar/editar preguntas en LSM haciendo click en "➕ Agregar pregunta en LSM"
   - Todo se guarda automáticamente
   - Cualquier dispositivo que entre a la URL verá los mismos datos

## Actualizar el contenido cada semana

Cada vez que yo te actualice el contenido de la Atalaya:

1. Ejecuta en la terminal:
   ```bash
   vercel --prod
   ```

2. Esto subirá los cambios nuevos a Vercel
3. Los datos LSM que agregaste se mantienen guardados

## Comandos útiles

- **Desplegar cambios:** `vercel --prod`
- **Ver logs:** `vercel logs`
- **Ver detalles del proyecto:** `vercel ls`

## ¿Necesitas ayuda?

Si algo no funciona, avísame y te ayudo.
