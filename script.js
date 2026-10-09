/* ============================================================
   Buscador – Torneo de Karate Dragones Cardona
   Los datos viven en data.js (EVENTO, CATEGORIAS, COMPETIDORES).
   La búsqueda ignora acentos, mayúsculas, guiones y espacios extra.
   ============================================================ */

/* ------------------- NORMALIZACIÓN ------------------------- */
// Minúsculas, sin acentos, guiones/símbolos → espacio, espacios colapsados.
function normalizar(texto) {
  return String(texto ?? "")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")   // quita acentos
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")      // guiones y símbolos → espacio
    .replace(/\s+/g, " ")
    .trim();
}

// Normaliza carácter a carácter para mapear posiciones al texto original (resaltado).
function normalizarConMapa(texto) {
  let norm = "";
  const map = [];
  for (let i = 0; i < texto.length; i++) {
    const ch = texto[i].normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9\s]/g, " ");
    for (const c of ch) { norm += c; map.push(i); }
  }
  return { norm, map };
}

/* ------------------- ÍNDICE DE BÚSQUEDA -------------------- */
function crearIndice(items, camposFn) {
  return items.map((it) => {
    const texto = normalizar(camposFn(it));
    return { ...it, texto, compacto: texto.replace(/ /g, "") };
  });
}
const indiceCategorias  = crearIndice(CATEGORIAS,   (c) => `${c.codigo} ${c.nombre}`);
const indiceCompetidores = crearIndice(COMPETIDORES, (p) => `${p.codigo} ${p.nombre} ${p.gym}`);

// Coincide si TODAS las palabras aparecen (en cualquier orden)
// o si la consulta sin espacios está contenida en el texto sin espacios ("dc001" → "DC-001").
function coincide(entrada, consultaNorm, consultaCompacta) {
  if (!consultaNorm) return true;
  return (
    consultaNorm.split(" ").every((w) => entrada.texto.includes(w)) ||
    entrada.compacto.includes(consultaCompacta)
  );
}

/* ----------------------- Utilidades ------------------------ */
const $ = (id) => document.getElementById(id);
const ESC = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ESC[c]);

// Resalta coincidencias respetando los acentos del texto original.
function resaltar(texto, consultaNorm) {
  texto = String(texto ?? "");
  if (!consultaNorm) return esc(texto);
  const palabras = [...new Set(consultaNorm.split(" "))].filter(Boolean);
  const base = normalizarConMapa(texto);
  const marcas = new Array(texto.length).fill(false);
  palabras.forEach((w) => {
    let i = base.norm.indexOf(w);
    while (i !== -1) {
      for (let k = i; k < i + w.length; k++) marcas[base.map[k]] = true;
      i = base.norm.indexOf(w, i + 1);
    }
  });
  let out = "", abierto = false;
  for (let i = 0; i < texto.length; i++) {
    if (marcas[i] && !abierto) { out += "<mark>"; abierto = true; }
    if (!marcas[i] && abierto) { out += "</mark>"; abierto = false; }
    out += esc(texto[i]);
  }
  return abierto ? out + "</mark>" : out;
}

/* ------------------ Validación de datos -------------------- */
// Avisa en la consola del navegador (F12) si hay errores al editar data.js.
(function validarDatos() {
  const codsCat = new Set(CATEGORIAS.map((c) => c.codigo));
  if (codsCat.size !== CATEGORIAS.length) console.warn("[data.js] Hay códigos de categoría repetidos.");
  const vistos = new Set();
  COMPETIDORES.forEach((p) => {
    if (!codsCat.has(p.categoria)) console.warn(`[data.js] "${p.nombre}" (${p.codigo}) tiene una categoría que no existe: "${p.categoria}".`);
    if (vistos.has(p.codigo)) console.warn(`[data.js] Código de competidor repetido: ${p.codigo}`);
    vistos.add(p.codigo);
  });
})();

/* ------------------------ UI ------------------------------- */
const input = $("q");
const resultados = $("resultados");
const contCats = $("categorias");
const estado = $("estado");
const vacio = $("vacio");
const btnLimpiar = $("limpiar");
let modo = "todo";

function tarjeta(cat, consultaNorm, compCoinciden) {
  const miembros = COMPETIDORES.filter((p) => p.categoria === cat.codigo);
  const items = miembros.map((p) => `
    <li class="comp${compCoinciden.has(p.codigo) ? " match" : ""}">
      <span class="comp-name">${resaltar(p.nombre, consultaNorm)}</span>
      <span class="comp-code">${resaltar(p.codigo, consultaNorm)}</span>
      <span class="comp-gym">${resaltar(p.gym, consultaNorm)}</span>
    </li>`).join("");

  return `
  <article class="card">
    <div class="card-head">
      <div>
        <span class="cat-code">${resaltar(cat.codigo, consultaNorm)}</span>
        <h2 class="cat-name">${resaltar(cat.nombre, consultaNorm)}</h2>
      </div>
      <div class="meta">
        <div class="meta-item"><small>Ring asignado</small><span>🏟 ${esc(cat.ring || "Por definir")}</span></div>
        <div class="meta-item"><small>Horario aprox.</small><span>⏰ ${esc(cat.horario || "Por definir")}</span></div>
      </div>
    </div>
    <h3 class="list-title">Competidores de la categoría (${miembros.length})</h3>
    <ul class="comp-list">${items || '<li class="comp comp-empty">Aún no hay competidores publicados en esta categoría.</li>'}</ul>
  </article>`;
}

// Vista inicial: todas las categorías como botones que rellenan el buscador.
function pintarCategorias() {
  contCats.innerHTML = CATEGORIAS.map((c) => {
    const n = COMPETIDORES.filter((p) => p.categoria === c.codigo).length;
    return `<button type="button" class="cat-btn" data-nombre="${esc(c.nombre)}">
      <span class="code">${esc(c.codigo)}</span>
      <span class="name">${esc(c.nombre)}</span>
      <span class="count">${n} competidor${n === 1 ? "" : "es"}</span>
    </button>`;
  }).join("");
}

function buscar() {
  const consultaNorm = normalizar(input.value);
  const consultaCompacta = consultaNorm.replace(/ /g, "");
  btnLimpiar.hidden = !input.value;

  // Sin texto: mostrar categorías
  if (!consultaNorm) {
    resultados.innerHTML = "";
    vacio.hidden = true;
    contCats.hidden = false;
    estado.textContent = `${CATEGORIAS.length} categorías · ${COMPETIDORES.length} competidores registrados`;
    return;
  }
  contCats.hidden = true;

  const catCoinciden = new Set();
  const compCoinciden = new Set();

  if (modo !== "competidor") {
    indiceCategorias.forEach((c) => {
      if (coincide(c, consultaNorm, consultaCompacta)) catCoinciden.add(c.codigo);
    });
  }
  if (modo !== "categoria") {
    indiceCompetidores.forEach((p) => {
      if (coincide(p, consultaNorm, consultaCompacta)) {
        compCoinciden.add(p.codigo);
        catCoinciden.add(p.categoria);
      }
    });
  }

  const cats = CATEGORIAS.filter((c) => catCoinciden.has(c.codigo));
  vacio.hidden = cats.length > 0;
  estado.textContent = cats.length
    ? `${cats.length} categoría(s) y ${compCoinciden.size} competidor(es) encontrados`
    : "";
  resultados.innerHTML = cats.map((c) => tarjeta(c, consultaNorm, compCoinciden)).join("");
}

/* --------------------- Eventos ----------------------------- */
input.addEventListener("input", buscar);
$("formBusqueda").addEventListener("submit", (e) => e.preventDefault());
btnLimpiar.addEventListener("click", () => { input.value = ""; buscar(); input.focus(); });

$("filtros").addEventListener("click", (e) => {
  const btn = e.target.closest(".chip");
  if (!btn) return;
  modo = btn.dataset.modo;
  document.querySelectorAll(".chip").forEach((c) => c.classList.toggle("active", c === btn));
  buscar();
});

contCats.addEventListener("click", (e) => {
  const btn = e.target.closest(".cat-btn");
  if (!btn) return;
  input.value = btn.dataset.nombre;
  buscar();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ------------- Info del evento, pie y reloj ----------------- */
function pintarEvento() {
  $("evFecha").textContent = EVENTO.fecha;
  $("evLugar").textContent = EVENTO.lugar;
  $("evHorario").textContent = EVENTO.horario;

  const enlaces = [];
  if (EVENTO.telefono) {
    enlaces.push(`<a href="tel:+502${esc(EVENTO.telefono)}">📞 ${esc(EVENTO.telefono)}</a>`);
  }
  if (EVENTO.facebookNombre) {
    enlaces.push(EVENTO.facebookUrl
      ? `<a href="${esc(EVENTO.facebookUrl)}" target="_blank" rel="noopener">📘 ${esc(EVENTO.facebookNombre)}</a>`
      : `<a href="#" aria-disabled="true" onclick="return false">📘 ${esc(EVENTO.facebookNombre)}</a>`);
  }
  $("contacto").innerHTML = enlaces.join("");
  $("lema").textContent = (EVENTO.lema || []).join("  ·  ");
  $("anio").textContent = new Date().getFullYear();
}

function reloj() {
  const ahora = new Date();
  const el = $("reloj");
  el.textContent = ahora.toLocaleTimeString("es-GT", { hour12: false });
  el.dateTime = ahora.toISOString();
}

pintarEvento();
pintarCategorias();
reloj();
setInterval(reloj, 1000);
buscar();
