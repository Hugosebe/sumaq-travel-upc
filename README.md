# Sumaq Way Travel — Explorador de paquetes turísticos

Proyecto final UPC · **Hugo Serrano**  
**Curso:** Inteligencia Artificial  
**Docente:** Lennin Percy Cenas Vasquez  
**Modalidad:** Individual  
**Fecha de entrega:** 24 de octubre de 2026  

> Versión académica independiente basada en el catálogo de Sumaq Way Travel V45. No modifica ni sustituye el sitio comercial. El código está publicado en GitHub y la aplicación está disponible en GitHub Pages. La mejora de ordenamiento se realizó con GitHub Copilot en VS Code. El video demostrativo está pendiente.

## Problemática

En una agencia de viajes, la información de los programas suele encontrarse distribuida entre flyers, documentos y conversaciones. Esto dificulta que una persona encuentre un destino y conozca el itinerario y los servicios antes de consultar. También obliga a repetir preguntas básicas por distintos canales.

## Contexto y usuario objetivo

La solución se aplica al proceso de consulta digital de Sumaq Way Travel. Está dirigida a viajeros que exploran alternativas nacionales e internacionales desde computadora o celular y desean solicitar información con un destino identificado.

## Objetivo

Facilitar la búsqueda y consulta de paquetes mediante un catálogo web que reúna los destinos, itinerarios e inclusiones en una interfaz clara y adaptable al dispositivo.

## Solución y funcionalidades

1. Explorar una selección de **12 programas** del catálogo existente.
2. Buscar por nombre, país o palabras de la descripción, sin distinguir mayúsculas ni tildes.
3. Combinar la búsqueda con filtros de viajes nacionales o internacionales.
4. Limpiar filtros y recuperar el catálogo completo.
5. Consultar una ficha con duración, itinerario, inclusiones, exclusiones y notas.
6. Abrir WhatsApp con un mensaje que identifica el programa. La aplicación no envía mensajes automáticamente.
7. Recibir indicación clara cuando no existen resultados.
8. Usar el catálogo con teclado y desde pantallas pequeñas.
9. Ordenar por nombre A–Z o recuperar el orden original, junto con la búsqueda y la categoría.

Las fotografías ilustran el destino. No se asignan fotos arbitrarias a traslados o días numerados. El catálogo no confirma cupos, hoteles ni disponibilidad real.

## Tecnologías y arquitectura

HTML semántico, CSS responsive y JavaScript sin dependencias de ejecución. El catálogo se guarda en `docs/js/catalog.js`; no existe base de datos ni backend.

- `docs/index.html`: estructura de la aplicación.
- `docs/css/styles.css`: diseño y adaptación a pantallas.
- `docs/js/catalog.js`: datos de los programas.
- `docs/js/core.js`: funciones puras de búsqueda, filtrado, codificación y URL de consulta.
- `docs/js/app.js`: eventos, tarjetas y ficha de detalle.
- `docs/assets/`: logo y fotografías locales.
- `docs/creditos.html`: registro de fuentes fotográficas heredado de la web de origen.
- `tests/catalog.test.cjs`: pruebas de reglas y consistencia.
- `guia/`: documentación del trabajo, publicación, Copilot y video.
- `evidencias/`: ubicación para las capturas reales que obtenga el estudiante.
- `.github/copilot-instructions.md`: instrucciones de contexto para Copilot.

Flujo: catálogo local → filtros → lista de resultados → detalle → apertura voluntaria de WhatsApp.

## Ejecución local

**Opción directa:** abre `docs/index.html` con un navegador moderno. No se descargan paquetes ni se requieren claves.

**Con servidor local:** desde la raíz del proyecto, si tienes Python instalado:

```bash
python -m http.server 8000 --directory docs
```

En Windows también puedes usar `py` en lugar de `python`. Abre `http://localhost:8000`. Como alternativa, sirve `docs/` con una extensión de servidor local de VS Code.

## Pruebas automatizadas

Con Node.js 18 o posterior, desde la raíz:

```bash
node --test tests/catalog.test.cjs
```

Verifica búsquedas con tildes, filtros combinados, casos vacíos, inyección de HTML, codificación del mensaje, unicidad e integridad del catálogo. La lista de pruebas de interfaz está en `guia/PRUEBAS_MANUALES.md`. Las pruebas automatizadas se ejecutaron localmente; adicionalmente se verificó la aplicación publicada en GitHub Pages.

## GitHub Pages

La aplicación usa rutas relativas y archivos estáticos. Publicar la rama `main`, carpeta **`/docs`**, siguiendo `guia/PUBLICACION.md`. No agregues `CNAME` ni uses el dominio comercial: esta es una entrega académica independiente.

## Uso de GitHub Copilot

La base se preparó con ChatGPT/Codex. Posteriormente Hugo utilizó **GitHub Copilot en VS Code** para analizar la búsqueda y los filtros e implementar el selector “Ordenar por”.

Copilot modificó cinco archivos: HTML, estilos, lógica de interfaz, funciones puras y pruebas. Su función `sortPackages` copia el arreglo antes de ordenar y usa comparación en español sobre nombres normalizados. La interfaz aplica primero los filtros y después el orden seleccionado.

La solicitud del estudiante estableció conservar el catálogo original, combinar búsqueda y categoría, mantener el diseño responsive y evitar dependencias. La revisión posterior conservó esta solución. “Limpiar filtros” borra búsqueda y categoría y conserva la preferencia de orden; “Orden original” permite recuperarlo explícitamente.

Copilot informó que revisó el navegador a 390, 768 y 1280 px; no pudo ejecutar las pruebas en Windows porque Node no estaba disponible. **La revisión posterior con Codex ejecutó las 15 pruebas con resultado satisfactorio**, incluidas tres nuevas de ordenamiento. No se atribuye esa ejecución a Copilot.

Véase [la evidencia y el prompt](guia/EVIDENCIA_COPILOT.md) y [la captura real](evidencias/copilot-vscode.png).

## Alcance y limitaciones

No procesa pagos, reservas ni formularios de correo. No incluye autenticación, clientes reales ni información de viajeros. No consulta disponibilidad ni calcula precios. Algunas rutas son sugeridas y personalizables según las notas de cada programa. Consultar WhatsApp requiere conexión y abrir un servicio externo.

## Entregables y enlaces

| Entregable | Enlace | Estado |
| --- | --- | --- |
| Repositorio público | https://github.com/Hugosebe/sumaq-travel-upc | Público |
| Aplicación en GitHub Pages | https://hugosebe.github.io/sumaq-travel-upc/ | Publicada y comprobada |
| Video de máximo 1 minuto | Pendiente | Debe grabarlo el estudiante |

No presentar estos campos como terminados hasta comprobar cada enlace en una ventana sin sesión.

## Referencias

- Workshop indicado en la evaluación: https://github-samples.github.io/copilot-workshops/first-steps/copilot-app/
- Referencia del workshop localizada durante la preparación: https://awesome-copilot.github.com/learning-hub/copilot-workshops/first-steps/copilot-app/
- Publicar desde una rama: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- Copilot en VS Code: https://code.visualstudio.com/docs/setup/copilot
- Código y contenido de partida: Sumaq Way Travel V45.

## Marca, contenido y fotografías

Sumaq Way Travel conserva su identidad de marca y contenido comercial. Las fotografías conservan las condiciones de sus fuentes; véase `docs/creditos.html`. No se aplica una licencia de software única a fotografías y logos. Revisa las reglas de reutilización antes de emplear estos recursos fuera de esta entrega.
