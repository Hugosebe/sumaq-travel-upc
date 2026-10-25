/* La interfaz consume un catálogo local: no requiere servidor ni credenciales. */
(() => {
  'use strict';
  const catalog = window.SUMAQ_CATALOG;
  const {filterPackages, escapeHTML: esc, whatsappURL} = window.SumaqCore;
  const search = document.getElementById('search');
  const category = document.getElementById('category');
  const cards = document.getElementById('cards');
  const dialog = document.getElementById('package-dialog');
  let opener = null;

  function renderCatalog() {
    const matches = filterPackages(catalog, search.value, category.value);
    cards.innerHTML = matches.map(item => `<article class="card"><img src="${esc(item.imagen)}" alt="${esc(item.nombre)}" loading="lazy" width="640" height="420"><div class="card-copy"><span class="card-country">${esc(item.pais)}</span><h3>${esc(item.nombre)}</h3><p class="duration"><span aria-hidden="true">◷</span> ${esc(item.duracion)}</p><p>${esc(item.descripcion)}</p><button class="button detail-button" type="button" data-id="${esc(item.id)}" aria-label="Ver programa de ${esc(item.nombre)}">Ver programa <span aria-hidden="true">↗</span></button></div></article>`).join('');
    document.getElementById('result-count').textContent = `${matches.length} ${matches.length === 1 ? 'viaje para explorar' : 'viajes para explorar'}`;
    document.getElementById('empty').hidden = matches.length !== 0;
  }
  function resetFilters() {
    search.value = ''; category.value = ''; renderCatalog(); search.focus();
  }
  function openPackage(id, button) {
    const item = catalog.find(entry => entry.id === id);
    if (!item) return;
    opener = button;
    const list = values => values.map(value => `<li>${esc(value)}</li>`).join('');
    document.getElementById('detail').innerHTML = `<img class="detail-photo" src="${esc(item.imagen)}" alt="${esc(item.nombre)}"><div class="detail-copy"><span class="eyebrow">${esc(item.pais)}</span><h2 id="detail-title">${esc(item.nombre)}</h2><p class="duration">${esc(item.duracion)}</p><p>${esc(item.descripcion)}</p><h3>Tu viaje, paso a paso</h3><ol class="itinerary">${item.itinerario.map(day => `<li><span class="day">${esc(day.dia)}</span><div><h4>${esc(day.titulo)}</h4><p>${esc(day.detalle)}</p></div></li>`).join('')}</ol><div class="inclusions"><section><h3>Incluye</h3><ul>${list(item.incluye)}</ul></section>${item.noIncluye.length ? `<section><h3>No incluye</h3><ul>${list(item.noIncluye)}</ul></section>` : ''}</div><p class="notice">${esc(item.nota)}</p><a class="button whatsapp" href="${esc(whatsappURL(item))}" rel="noopener noreferrer" target="_blank">Consultar por WhatsApp <span aria-hidden="true">↗</span></a><p class="small">Abrirá una conversación con la agencia. Tú decides si envías el mensaje.</p></div>`;
    dialog.showModal(); document.body.classList.add('modal-open');
  }
  cards.addEventListener('click', event => {
    const button = event.target.closest('button[data-id]');
    if (button) openPackage(button.dataset.id, button);
  });
  document.getElementById('filters').addEventListener('submit', event => event.preventDefault());
  search.addEventListener('input', renderCatalog);
  category.addEventListener('change', renderCatalog);
  document.getElementById('reset').addEventListener('click', resetFilters);
  document.getElementById('empty-reset').addEventListener('click', resetFilters);
  document.getElementById('close-dialog').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => {
    document.body.classList.remove('modal-open'); if (opener) opener.focus();
  });
  renderCatalog();
})();
