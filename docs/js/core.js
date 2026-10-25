/* Funciones puras: compartidas por la interfaz y las pruebas. */
(function (root) {
  'use strict';
  function normalize(value) {
    return String(value ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
  }
  function filterPackages(packages, query = '', category = '') {
    const words = normalize(query).split(/\s+/).filter(Boolean);
    return packages.filter(item => (!category || item.categoria === category) &&
      words.every(word => normalize([item.nombre, item.pais, item.descripcion].join(' ')).includes(word)));
  }
  function sortPackages(packages, order = 'original') {
    const result = [...packages];
    if (order === 'name-az') result.sort((a, b) => normalize(a.nombre).localeCompare(normalize(b.nombre), 'es'));
    return result;
  }
  function escapeHTML(value) {
    return String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  }
  function whatsappURL(item) {
    const text = `Hola Sumaq Way Travel, quisiera información sobre ${item.nombre}. Fechas aproximadas: ____. Pasajeros: ____.`;
    return 'https://wa.me/51924834628?text=' + encodeURIComponent(text);
  }
  const api = {normalize, filterPackages, sortPackages, escapeHTML, whatsappURL};
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  root.SumaqCore = api;
})(typeof window !== 'undefined' ? window : globalThis);
