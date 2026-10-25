# Actividades con GitHub Copilot

**Pendientes de ejecutar por el estudiante.** Los siguientes textos son prompts propuestos, no conversaciones ya realizadas. Copilot puede proponer cambios distintos: evalúalos y documenta el resultado real. Se pueden usar chat y edición manual si tu licencia no dispone de modo agente.

## 1. Análisis y comprensión

Abre README.md, docs/js/core.js y docs/js/app.js. En Copilot Chat pega:

> Analiza este explorador turístico. Resume el problema, el usuario y el recorrido desde la búsqueda hasta la consulta. Explica la separación entre core.js y app.js. Señala una limitación real sin inventar funciones que no existan. No cambies archivos todavía.

Guarda una captura con el prompt y la respuesta. Verifica que no afirme que hay reservas, pagos o backend. Anota una corrección o confirmación concreta del análisis.

## 2. Desarrollo: mejora funcional real

La base no ordena por nombre. Pide una mejora acotada:

> Agrega un selector accesible “Ordenar por”, con opciones “Orden original” y “Nombre A–Z”. Mantén combinados los filtros existentes. Implementa la ordenación en una función pura de core.js sin mutar el catálogo original, y úsala desde app.js. Conserva todas las funciones actuales, las rutas relativas y la adaptación móvil. Explícame los cambios antes de aplicarlos.

Revisa el diff. Comprueba que ordenar no cambie el arreglo original y que “Limpiar filtros” también restablezca el orden si corresponde. Si Copilot no puede editar, copia solo los cambios que comprendas y prueba manualmente. Guarda captura antes/después y un commit real.

## 3. Pruebas y corrección

> Revisa tests/catalog.test.cjs y añade pruebas útiles para el orden por nombre: no mutación del catálogo, orden original y nombres con acentos. Ejecuta las pruebas si tu entorno lo permite. Si una prueba falla, explica la causa y propón la corrección sin borrar pruebas para ocultar el fallo.

Si tu licencia no ejecuta terminal, ejecútalo tú:

```bash
node --test tests/catalog.test.cjs
```

Guarda el resultado real. Si no tienes Node, registra esa limitación y realiza pruebas manuales; no marques las automatizadas como ejecutadas por ti.

## 4. Refactorización y documentación

> Revisa la accesibilidad del selector nuevo, el mensaje sin resultados y el cierre del diálogo. Propón una mejora concreta y explica por qué. Actualiza el README solo con las funciones existentes y documenta el orden por nombre si ya fue implementado. No inventes resultados de pruebas ni atribuyas a Copilot el trabajo previo.

## Evidencia mínima sugerida

- Análisis: pregunta, respuesta y revisión propia.
- Mejora: diff y prueba funcional real.
- Calidad: salida de pruebas y decisión sobre una sugerencia.
- Documentación: descripción final de lo que sí hizo Copilot.

Usar el workshop como proceso —crear/refinar/probar/documentar/publicar—; no copiar el Space Quiz como si fuera el caso turístico. Omite las funciones que tu licencia no ofrezca, según la evaluación.
