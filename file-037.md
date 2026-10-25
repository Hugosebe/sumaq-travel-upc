# Publicar el repositorio y GitHub Pages

No se ha creado todavía un repositorio ni una publicación en la cuenta del estudiante. No se cambia el dominio comercial de Sumaq.

## Acceso

En GitHub y VS Code utiliza la cuenta institucional solicitada por UPC. Completa el inicio de sesión directamente en sus pantallas; no compartas contraseñas, tokens ni códigos por chat.

## Opción A: desde VS Code

1. Abre la carpeta completa `sumaq-upc`, no solo `docs`.
2. En Control de código fuente, inicializa el repositorio si todavía no existe.
3. Guarda la base con un commit como `Base académica del explorador turístico`. No atribuyas esta base a Copilot.
4. Realiza y documenta las actividades reales con Copilot; crea commits descriptivos de los cambios.
5. Usa “Publish to GitHub” / “Publicar en GitHub”, confirma que la cuenta es la institucional y elige repositorio **público** llamado `sumaq-travel-upc`.
6. Confirma que README.md, docs/, tests/, guia/, evidencias/ y .github/ estén en el repositorio. No subas el ZIP en lugar del código.

Si aparece un repositorio del mismo nombre, revisa su contenido antes de continuar; no lo sobrescribas sin comprobar que sea el tuyo para esta entrega.

## Opción B: terminal, con repositorio vacío ya creado

Ejecuta desde la carpeta raíz, sustituyendo USUARIO_UPC por tu nombre real de GitHub. No pegues el comando con el marcador sin cambiarlo.

```bash
git init
git add .
git commit -m "Base académica del explorador turístico"
git branch -M main
git remote add origin https://github.com/USUARIO_UPC/sumaq-travel-upc.git
git push -u origin main
```

Si el proyecto ya tiene Git inicializado, usa su estado existente en vez de repetir `git init` o agregar un remoto duplicado. Configura tu identidad en Git si te la solicita. Autentícate en el navegador o administrador de credenciales; no incluyas tokens en comandos.

## Activar Pages

1. Dentro del repositorio abre Settings → Pages.
2. En Build and deployment, selecciona **Deploy from a branch**.
3. Selecciona rama **main** y carpeta **/docs**. Guarda.
4. Espera el resultado del despliegue. Usa el enlace real que devuelve GitHub; pégalo en README.md y ENTREGA.md.
5. Si falla, revisa Actions y el mensaje del despliegue antes de volver a publicar.

`docs/index.html` es la portada. `.nojekyll` está incluido. Las rutas de CSS, JavaScript e imágenes son relativas para funcionar dentro de la ruta del repositorio.

## Revisión pública

Abre repositorio y Pages sin sesión. Prueba búsqueda “Peru”, filtro Internacionales, ausencia de resultados, ficha de RED Madrid y cierre con Escape. Verifica que imágenes, CSS y JavaScript carguen. No hace falta enviar un WhatsApp real: revisa el enlace y cierra la pestaña.

Guía oficial consultada: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
