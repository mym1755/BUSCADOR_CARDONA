/* ============================================================
   DATOS DEL TORNEO  —  ESTE ES EL ÚNICO ARCHIVO QUE DEBES EDITAR
   para agregar categorías y competidores.
   ============================================================ */

/* ---------- Información del evento (según el flyer) ---------- */
const EVENTO = {
  nombre: "Torneo de Karate",
  organizador: "Dragones Cardona",
  fecha: "11 de Octubre",
  lugar: "Colegio Mixto Belén",
  horario: "8:00 AM",
  telefono: "58806740",              // se usa para el botón de llamada
  facebookNombre: "Dragones Cardona",
  facebookUrl: "",                   // pega aquí el enlace de la página de Facebook (opcional)
  lema: ["Disciplina", "Respeto", "Superación"]
};

/* ---------- Categorías ----------
   codigo  : único, sin espacios (ej. "PF-INF-M"). Lo usan los competidores.
   nombre  : como lo verá el público.
   ring    : "Ring 1", "Ring 2"… (o "Por definir")
   horario : "9:00 AM" (o "Por definir")
   Puedes agregar subcategorías (edad, cinta, género) como nuevas filas, por ejemplo:
   { codigo: "KT-INF", nombre: "Kata Tradicional Infantil", ring: "Ring 2", horario: "9:30 AM" }
*/
const CATEGORIAS = [
  { codigo: "PF-CUA", nombre: "Point Fighting Cuartetas", ring: "Por definir", horario: "Por definir" },
  { codigo: "KT",     nombre: "Kata Tradicional",         ring: "Por definir", horario: "Por definir" },
  { codigo: "KA",     nombre: "Kata con Arma",            ring: "Por definir", horario: "Por definir" },
  { codigo: "GC",     nombre: "Gran Campeón",             ring: "Por definir", horario: "Por definir" }
];

/* ---------- Competidores ----------
   codigo    : único por competidor (ej. "DC-001").
   nombre    : nombre completo.
   gym       : escuela / dojo / gimnasio.
   categoria : debe ser IGUAL al "codigo" de una categoría de arriba.
   Un competidor en varias categorías = una fila por cada categoría (con código distinto,
   por ejemplo "DC-001-KT" y "DC-001-KA").

   Cuando los tengas, agrégalos así (borra el // del inicio):
*/
const COMPETIDORES = [
  // { codigo: "DC-001", nombre: "Nombre Apellido", gym: "Dragones Cardona", categoria: "KT" },
  // { codigo: "DC-002", nombre: "Nombre Apellido", gym: "Otro Dojo",        categoria: "KA" },
];
