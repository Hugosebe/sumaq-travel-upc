const {test} = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const {normalize, filterPackages, escapeHTML, whatsappURL} = require('../docs/js/core.js');
const context = {window:{}};
vm.runInNewContext(fs.readFileSync(path.join(__dirname,'../docs/js/catalog.js'),'utf8'),context);
const catalog = JSON.parse(JSON.stringify(context.window.SUMAQ_CATALOG));

test('normaliza tildes, mayúsculas y espacios',()=>assert.equal(normalize('  PERÚ  '),'peru'));
test('búsqueda sin tilde encuentra el país Perú',()=>assert.equal(filterPackages(catalog,'PERU').length,4));
test('filtro por categoría distingue nacionales e internacionales',()=>{
 assert.equal(filterPackages(catalog,'','Nacionales').length,4);
 assert.equal(filterPackages(catalog,'','Internacionales').length,8);
});
test('combina búsqueda con categoría sin falsos positivos',()=>{
 assert.equal(filterPackages(catalog,'Madrid','Nacionales').length,0);
 assert.equal(filterPackages(catalog,'Madrid','Internacionales').length,2);
});
test('consulta desconocida no devuelve resultados',()=>assert.equal(filterPackages(catalog,'zzzzdestinoinexistente').length,0));
test('consulta vacía y espacios conservan catálogo completo',()=>assert.equal(filterPackages(catalog,'   ').length,12));
test('los filtros no modifican el catálogo de origen',()=>{
 const original=JSON.stringify(catalog);filterPackages(catalog,'Peru','Nacionales');assert.equal(JSON.stringify(catalog),original);
});
test('escapa contenido antes de insertarlo como HTML',()=>assert.equal(escapeHTML('<script>"&\'</script>'),'&lt;script&gt;&quot;&amp;&#39;&lt;/script&gt;'));
test('WhatsApp codifica el nombre y mantiene destinatario correcto',()=>{
 const item={nombre:'Perú & Brasil + Caribe'};const url=new URL(whatsappURL(item));
 assert.equal(url.origin,'https://wa.me');assert.equal(url.pathname,'/51924834628');assert(url.searchParams.get('text').includes(item.nombre));
});
test('IDs únicos y estructura suficiente para cada ficha',()=>{
 assert.equal(new Set(catalog.map(p=>p.id)).size,catalog.length);
 for(const p of catalog){assert(p.nombre&&p.pais&&p.descripcion&&p.duracion);assert(p.itinerario.length);assert(Array.isArray(p.incluye));assert(Array.isArray(p.noIncluye));}
});
test('todas las fotografías locales están disponibles',()=>{
 for(const p of catalog){assert(!p.imagen.startsWith('/'));assert(fs.existsSync(path.join(__dirname,'../docs',p.imagen)));}
});
test('RED Madrid conserva 17 pasos y su portada es una fotografía',()=>{
 const p=catalog.find(p=>p.id==='red-madrid-madrid');assert.equal(p.itinerario.length,17);assert(!/logo/i.test(p.imagen));
});
