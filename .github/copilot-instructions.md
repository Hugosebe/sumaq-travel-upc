# Contexto del proyecto

Esta es una adaptación académica de Sumaq Way Travel para UPC, no la web de producción.
Usa HTML, CSS y JavaScript sin dependencias de ejecución. GitHub Pages sirve `docs/`.

- Conserva rutas relativas. No añadas secretos, API keys, pagos, clientes reales ni formularios de correo.
- No inventes precios, disponibilidad, servicios incluidos ni cambios de itinerario.
- Las fotos son del destino; no las asocies automáticamente a un día o traslado.
- Mantén la paleta azul/turquesa, el CTA WhatsApp verde y el responsive.
- Usa funciones puras en core.js para reglas; conecta eventos desde app.js.
- Preserva accesibilidad: labels, foco, teclado, Escape y mensajes de estado.
- Antes de editar, explica los cambios. Revisa el diff y ejecuta `node --test tests/catalog.test.cjs` después de cambios de lógica.
- No afirmes haber realizado pruebas que no ejecutaste. No atribuyas la base previa a Copilot.
- Documenta solo funcionalidades reales y limitaciones existentes.
