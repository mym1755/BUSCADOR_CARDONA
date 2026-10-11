/* ============================================================
   Buscador – Torneo de Karate Dragones Cardona
   Datos: data.js (EVENTO), categorias.js (CATEGORIAS con ring y hora)
   e inscritos.js (COMPETIDORES).
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

const $ = (id) => document.getElementById(id);
const ESC = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ESC[c]);
const sinEspacios = (t) => t.replace(/ /g, "");
const plural = (n, uno, varios) => `${n} ${n === 1 ? uno : varios}`;

/* ------------------- CATEGORÍAS + INSCRITOS ---------------- */
const POR_DEFINIR = "Por definir";
const LIMITE_TARJETAS = 30;

const PERSONAS = COMPETIDORES.map((p, i) => ({ ...p, id: i, categorias: p.categorias || [] }));

const porCodigo = new Map();
PERSONAS.forEach((p) => p.categorias.forEach((cod) => {
  if (!porCodigo.has(cod)) porCodigo.set(cod, []);
  porCodigo.get(cod).push(p);
}));

// "13:15" → "1:15 PM"
function formatoHora(h) {
  const m = /^(\d{1,2}):(\d{2})/.exec(String(h ?? ""));
  if (!m) return POR_DEFINIR;
  const hh = Number(m[1]);
  return `${hh % 12 || 12}:${m[2]} ${hh >= 12 ? "PM" : "AM"}`;
}

// Si un inscrito usa un código que no existe en categorias.js, se crea una categoría provisional.
const codigosConocidos = new Set(CATEGORIAS.map((c) => c.codigo));
const provisionales = [...porCodigo.keys()]
  .filter((cod) => !codigosConocidos.has(cod))
  .map((codigo, i) => ({ codigo, nombre: codigo, cintas: [], orden: 9000 + i }));

const CATS = [...CATEGORIAS, ...provisionales].map((c) => {
  const partes = String(c.nombre).split(" · ");
  return {
    ...c,
    tipo: partes[0],
    detalle: partes.slice(1).join(" · "),
    cintas: c.cintas || [],
    miembros: porCodigo.get(c.codigo) || [],
    ringTxt: c.ring ? `Ring ${c.ring}` : POR_DEFINIR,
    horaTxt: formatoHora(c.hora)
  };
}).sort((a, b) => (a.orden ?? 9999) - (b.orden ?? 9999));

/* ------------------- ÍNDICE DE BÚSQUEDA -------------------- */
const indiceCategorias = CATS.map((c) => {
  const texto = normalizar(`${c.codigo} ${c.nombre}`);
  return { cat: c, texto, compacto: sinEspacios(texto), codigoCompacto: sinEspacios(normalizar(c.codigo)) };
});
const indicePersonas = PERSONAS.map((p) => {
  const texto = normalizar(`${p.nombre} ${p.cinta}`);
  return { persona: p, texto, compacto: sinEspacios(texto) };
});

// Coincide si TODAS las palabras aparecen (en cualquier orden)
// o si la consulta sin espacios está contenida en el texto sin espacios ("cpl017" → "CPL-017").
// Los números solos ("14") solo cuentan al inicio de una palabra, para que "14" no
// encuentre el código "014"; el resto de las palabras puede coincidir en cualquier parte.
function coincide(entrada, consultaNorm, consultaCompacta) {
  const palabras = entrada.texto.split(" ");
  const tokensOk = consultaNorm.split(" ").every((w) =>
    /^\d+$/.test(w) ? palabras.some((p) => p.startsWith(w)) : entrada.texto.includes(w)
  );
  return tokensOk || (!/^\d+$/.test(consultaCompacta) && entrada.compacto.includes(consultaCompacta));
}

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
// Avisa en la consola del navegador (F12) si hay errores al editar los datos.
(function validarDatos() {
  const nombres = new Set();
  PERSONAS.forEach((p) => {
    const n = normalizar(p.nombre);
    if (nombres.has(n)) console.warn(`[inscritos.js] Nombre repetido: ${p.nombre}`);
    nombres.add(n);
    if (!p.categorias.length) console.warn(`[inscritos.js] ${p.nombre} no tiene categorías.`);
  });
  provisionales.forEach((c) => console.warn(`[categorias.js] Falta la categoría "${c.codigo}" (hay inscritos que la usan).`));
  const vistos = new Set();
  CATEGORIAS.forEach((c) => {
    if (vistos.has(c.codigo)) console.warn(`[categorias.js] Código de categoría repetido: ${c.codigo}`);
    vistos.add(c.codigo);
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

function tarjeta(cat, consultaNorm, coinciden) {
  const items = cat.miembros.map((p) => {
    const otras = p.categorias.filter((c) => c !== cat.codigo);
    const tambien = otras.length ? ` · <span class="also">También en ${otras.map(esc).join(", ")}</span>` : "";
    return `
    <li class="comp${coinciden.has(p.id) ? " match" : ""}">
      <span class="comp-name">${coinciden.has(p.id) ? resaltar(p.nombre, consultaNorm) : esc(p.nombre)}</span>
      <span class="comp-code" data-cinta="${esc(normalizar(p.cinta))}">${esc(p.cinta)}</span>
      <span class="comp-gym">${esc(p.edad)} años · ${esc(p.genero)}${tambien}</span>
    </li>`;
  }).join("");

  const nota = cat.miembros.length === 0
    ? '<li class="comp comp-empty">Aún no hay competidores inscritos en esta categoría.</li>'
    : cat.miembros.length === 1
      ? '<li class="comp comp-empty">Por ahora es la única persona inscrita en esta categoría.</li>' : "";

  return `
  <article class="card">
    <div class="card-head">
      <div>
        <span class="cat-code">${resaltar(cat.codigo, consultaNorm)}</span>
        <h2 class="cat-name">${resaltar(cat.tipo, consultaNorm)}</h2>
        ${cat.detalle ? `<p class="cat-desc">${resaltar(cat.detalle, consultaNorm)}</p>` : ""}
        ${cat.cintas.length && !cat.detalle.includes("Cinta") ? `<p class="cat-desc">Cintas: ${cat.cintas.map(esc).join(", ")}</p>` : ""}
      </div>
      <div class="meta">
        <div class="meta-item"><small>Ring asignado</small><span>🏟 ${esc(cat.ringTxt)}</span></div>
        <div class="meta-item"><small>Horario aprox.</small><span>⏰ ${esc(cat.horaTxt)}</span></div>
      </div>
    </div>
    <h3 class="list-title">Competidores de la categoría (${cat.miembros.length})</h3>
    <ul class="comp-list">${items}${nota}</ul>
  </article>`;
}

// Vista inicial: categorías agrupadas por modalidad; al tocar una se abre.
function pintarCategorias() {
  const grupos = new Map();
  CATS.forEach((c) => {
    if (!grupos.has(c.tipo)) grupos.set(c.tipo, []);
    grupos.get(c.tipo).push(c);
  });
  contCats.innerHTML = [...grupos.entries()].map(([tipo, lista]) => `
    <section class="tipo">
      <h2 class="tipo-title">${esc(tipo)} <small>${plural(lista.length, "categoría", "categorías")}</small></h2>
      <div class="cat-grid">
        ${lista.map((c) => `
        <button type="button" class="cat-btn" data-codigo="${esc(c.codigo)}">
          <span class="code">${esc(c.codigo)}</span>
          <span class="name">${esc(c.detalle || c.nombre)}</span>
          <span class="when">${esc(c.ringTxt)} · ${esc(c.horaTxt)}</span>
          <span class="count">${plural(c.miembros.length, "competidor", "competidores")}</span>
        </button>`).join("")}
      </div>
    </section>`).join("");
}

function buscar() {
  const consultaNorm = normalizar(input.value);
  const consultaCompacta = sinEspacios(consultaNorm);
  btnLimpiar.hidden = !input.value;

  // Sin texto: mostrar todas las categorías
  if (!consultaNorm) {
    resultados.innerHTML = "";
    vacio.hidden = true;
    contCats.hidden = false;
    estado.textContent = `${CATS.length} categorías · ${PERSONAS.length} competidores registrados`;
    return;
  }
  contCats.hidden = true;

  const catCoinciden = new Set();
  const compCoinciden = new Set();

  // Un código exacto (ej. "cpl017") abre solo esa categoría, sin la "CPL-017A".
  const exacta = modo !== "competidor" ? indiceCategorias.find((e) => e.codigoCompacto === consultaCompacta) : null;

  if (exacta) {
    catCoinciden.add(exacta.cat.codigo);
  } else {
    if (modo !== "competidor") {
      indiceCategorias.forEach((e) => { if (coincide(e, consultaNorm, consultaCompacta)) catCoinciden.add(e.cat.codigo); });
    }
    if (modo !== "categoria") {
      indicePersonas.forEach((e) => {
        if (coincide(e, consultaNorm, consultaCompacta)) {
          compCoinciden.add(e.persona.id);
          e.persona.categorias.forEach((c) => catCoinciden.add(c));
        }
      });
    }
  }

  const cats = CATS.filter((c) => catCoinciden.has(c.codigo));
  vacio.hidden = cats.length > 0;

  const partes = [];
  if (cats.length) partes.push(plural(cats.length, "categoría encontrada", "categorías encontradas"));
  if (compCoinciden.size) partes.push(plural(compCoinciden.size, "competidor encontrado", "competidores encontrados"));
  estado.textContent = partes.join(" · ");

  const visibles = cats.slice(0, LIMITE_TARJETAS);
  const mas = cats.length > visibles.length
    ? `<p class="more">Mostrando ${visibles.length} de ${cats.length}. Escribe más letras para afinar la búsqueda.</p>` : "";
  resultados.innerHTML = visibles.map((c) => tarjeta(c, consultaNorm, compCoinciden)).join("") + mas;
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
  input.value = btn.dataset.codigo;
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
