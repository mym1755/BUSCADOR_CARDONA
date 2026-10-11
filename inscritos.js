// Lista de competidores inscritos - Torneo Dragones Cardona 2026
const COMPETIDORES = [
  {
    "nombre": "Luis Mazariegos",
    "genero": "Masculino",
    "edad": 12,
    "cinta": "Negra",
    "categorias": [
      "CPL-036",
      "KA-020"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Sofía Mazariegos",
    "genero": "Femenino",
    "edad": 14,
    "cinta": "Negra",
    "categorias": [
      "CPL-048",
      "KT-024"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Fiorella Muñoz",
    "genero": "Femenino",
    "edad": 7,
    "cinta": "Amarilla",
    "categorias": [
      "CPL-013"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Ider Molina",
    "genero": "Masculino",
    "edad": 8,
    "cinta": "Blanca",
    "categorias": [
      "CPL-017"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Geralt Ortiz",
    "genero": "Masculino",
    "edad": 6,
    "cinta": "Amarilla",
    "categorias": [
      "CPL-009"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Irvin de Paz",
    "genero": "Masculino",
    "edad": 16,
    "cinta": "Morada",
    "categorias": [
      "CPL-050"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Mía Herrera",
    "genero": "Femenino",
    "edad": 12,
    "cinta": "Naranja",
    "categorias": [
      "CPL-037"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Emilio Ochoa",
    "genero": "Masculino",
    "edad": 9,
    "cinta": "Naranja",
    "categorias": [
      "CPL-017"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Keylin Juarez",
    "genero": "Femenino",
    "edad": 9,
    "cinta": "Naranja",
    "categorias": [
      "CPL-021"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Valery Betancourt",
    "genero": "Femenino",
    "edad": 14,
    "cinta": "Morada",
    "categorias": [
      "CPL-046"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "José Ignacio",
    "genero": "Masculino",
    "edad": 12,
    "cinta": "Amarilla",
    "categorias": [
      "CPL-033"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Sara Solares",
    "genero": "Femenino",
    "edad": 8,
    "cinta": "Naranja",
    "categorias": [
      "CPL-021"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Valeri Mejía",
    "genero": "Femenino",
    "edad": 6,
    "cinta": "Blanca",
    "categorias": [
      "KT-005"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Olmar Acoj",
    "genero": "Masculino",
    "edad": 18,
    "cinta": "Azul",
    "categorias": [
      "CPL-058"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Ezequiel Hernández",
    "genero": "Masculino",
    "edad": 14,
    "cinta": "Blanca",
    "categorias": [
      "CPL-041"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Javier Patzan",
    "genero": "Masculino",
    "edad": 11,
    "cinta": "Amarilla",
    "categorias": [
      "KT-013",
      "CPL-025"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Jeffrey Cos",
    "genero": "Masculino",
    "edad": 19,
    "cinta": "Verde",
    "categorias": [
      "CPL-059"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "César Méndez",
    "genero": "Masculino",
    "edad": 43,
    "cinta": "Café",
    "categorias": [
      "KA-031"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Nehemías de León",
    "genero": "Masculino",
    "edad": 17,
    "cinta": "Morada",
    "categorias": [
      "CPL-050"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Jonathan Patzan",
    "genero": "Masculino",
    "edad": 12,
    "cinta": "Amarilla",
    "categorias": [
      "CPL-033"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Abraham del Cid",
    "genero": "Masculino",
    "edad": 10,
    "cinta": "Azul",
    "categorias": [
      "CPL-026"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "William Pérez",
    "genero": "Masculino",
    "edad": 11,
    "cinta": "Morada",
    "categorias": [
      "CPL-026"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Mayreni Méndez",
    "genero": "Femenino",
    "edad": 19,
    "cinta": "Verde",
    "categorias": [
      "CPL-063"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Darwin Méndez",
    "genero": "Masculino",
    "edad": 17,
    "cinta": "Verde",
    "categorias": [
      "CPL-051"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Maximiliano López",
    "genero": "Masculino",
    "edad": 9,
    "cinta": "Morada",
    "categorias": [
      "CPL-018"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Dustin García",
    "genero": "Masculino",
    "edad": 13,
    "cinta": "Azul",
    "categorias": [
      "CPL-034"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Bryan Alejandro García",
    "genero": "Masculino",
    "edad": 16,
    "cinta": "Negra",
    "categorias": [
      "CPL-052"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Kehira Sagui",
    "genero": "Femenino",
    "edad": 12,
    "cinta": "Azul",
    "categorias": [
      "CPL-038"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Luis Iván Cano",
    "genero": "Masculino",
    "edad": 37,
    "cinta": "Blanca",
    "categorias": [
      "KT-029"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Sharon Alexa Cayax",
    "genero": "Femenino",
    "edad": 13,
    "cinta": "Azul",
    "categorias": [
      "CPL-038"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Maria Camila Cayax",
    "genero": "Femenino",
    "edad": 5,
    "cinta": "Amarilla",
    "categorias": [
      "CPL-005"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Madeline Cayax",
    "genero": "Femenino",
    "edad": 7,
    "cinta": "Azul",
    "categorias": [
      "CPL-014"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Natalia Gómez",
    "genero": "Femenino",
    "edad": 10,
    "cinta": "Blanca",
    "categorias": [
      "KT-013"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Felipe Gómez",
    "genero": "Masculino",
    "edad": 7,
    "cinta": "Amarilla",
    "categorias": [
      "CPL-009"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Samuel Mateo",
    "genero": "Masculino",
    "edad": 7,
    "cinta": "Blanca",
    "categorias": [
      "CPL-009"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Génesis Gómez",
    "genero": "Femenino",
    "edad": 10,
    "cinta": "Amarilla",
    "categorias": [
      "KT-013"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Jimena Mateo",
    "genero": "Femenino",
    "edad": 9,
    "cinta": "Blanca",
    "categorias": [
      "CPL-021"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Alisson Bautista",
    "genero": "Femenino",
    "edad": 8,
    "cinta": "Amarilla",
    "categorias": [
      "CPL-021"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Yasmín Bautista",
    "genero": "Femenino",
    "edad": 12,
    "cinta": "Amarilla",
    "categorias": [
      "CPL-037"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Dylan Iboy",
    "genero": "Masculino",
    "edad": 8,
    "cinta": "Naranja",
    "categorias": [
      "CPL-017"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Adán Santiago Barrera",
    "genero": "Masculino",
    "edad": 8,
    "cinta": "Blanca",
    "categorias": [
      "CPL-017"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Arely Muñoz",
    "genero": "Femenino",
    "edad": 6,
    "cinta": "Amarilla",
    "categorias": [
      "KT-005"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Alejandra López",
    "genero": "Femenino",
    "edad": 18,
    "cinta": "Blanca",
    "categorias": [
      "KT-029"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Dilan Lorenzo",
    "genero": "Masculino",
    "edad": 10,
    "cinta": "Azul",
    "categorias": [
      "KT-014"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Norma Yanet Chávez",
    "genero": "Femenino",
    "edad": 32,
    "cinta": "Morada",
    "categorias": [
      "CPL-062"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Claudia Lucia Reyes",
    "genero": "Femenino",
    "edad": 5,
    "cinta": "Naranja",
    "categorias": [
      "CPL-005"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Aylin Sophia Chajil",
    "genero": "Femenino",
    "edad": 14,
    "cinta": "Verde",
    "categorias": [
      "KT-023"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Anderson Steve Chajil",
    "genero": "Masculino",
    "edad": 16,
    "cinta": "Azul",
    "categorias": [
      "CPL-050"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Paola Benito",
    "genero": "Femenino",
    "edad": 21,
    "cinta": "Azul",
    "categorias": [
      "CPL-062"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Juan Pablo Chamalé",
    "genero": "Masculino",
    "edad": 18,
    "cinta": "Amarilla",
    "categorias": [
      "CPL-057"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Alejandra Rodriguez",
    "genero": "Femenino",
    "edad": 11,
    "cinta": "Naranja",
    "categorias": [
      "CPL-029"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Samantha Pacheco",
    "genero": "Femenino",
    "edad": 17,
    "cinta": "Morada",
    "categorias": [
      "CPL-054"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Leonardo Gonzalez",
    "genero": "Masculino",
    "edad": 17,
    "cinta": "Verde",
    "categorias": [
      "CPL-051"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Natali Ochoa",
    "genero": "Femenino",
    "edad": 17,
    "cinta": "Azul",
    "categorias": [
      "CPL-054"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Angel Quiroa",
    "genero": "Masculino",
    "edad": 26,
    "cinta": "Negra",
    "categorias": [
      "CPL-060"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Angie Vasquez",
    "genero": "Femenino",
    "edad": 8,
    "cinta": "Morada",
    "categorias": [
      "CPL-022"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Randy Galvez",
    "genero": "Masculino",
    "edad": 18,
    "cinta": "Verde",
    "categorias": [
      "CPL-059"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Romeo Alonzo",
    "genero": "Masculino",
    "edad": 22,
    "cinta": "Negra",
    "categorias": [
      "KEX-007"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Anabelle Alonzo",
    "genero": "Femenino",
    "edad": 17,
    "cinta": "Negra",
    "categorias": [
      "CPL-056"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Evan Alvarez",
    "genero": "Masculino",
    "edad": 7,
    "cinta": "Amarilla",
    "categorias": [
      "CPL-009"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Angel Pacheco",
    "genero": "Masculino",
    "edad": 14,
    "cinta": "Morada",
    "categorias": [
      "CPL-042"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Nikolas Merida",
    "genero": "Masculino",
    "edad": 15,
    "cinta": "Verde",
    "categorias": [
      "CPL-043"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Matias Maldonado",
    "genero": "Masculino",
    "edad": 7,
    "cinta": "Naranja",
    "categorias": [
      "CPL-009"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Santiago Maldonado",
    "genero": "Masculino",
    "edad": 9,
    "cinta": "Naranja",
    "categorias": [
      "CPL-017A"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Jazmín Ochoa",
    "genero": "Femenino",
    "edad": 18,
    "cinta": "Azul",
    "categorias": [
      "CPL-062"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Bradley Yoc",
    "genero": "Masculino",
    "edad": 12,
    "cinta": "Azul",
    "categorias": [
      "CPL-034"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Asher Soriano",
    "genero": "Masculino",
    "edad": 9,
    "cinta": "Amarilla",
    "categorias": [
      "CPL-017A"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Libi Soriano",
    "genero": "Femenino",
    "edad": 14,
    "cinta": "Amarilla",
    "categorias": [
      "CPL-045"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Camila Norales",
    "genero": "Femenino",
    "edad": 10,
    "cinta": "Amarilla",
    "categorias": [
      "CPL-029"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Roger Mateo",
    "genero": "Masculino",
    "edad": 11,
    "cinta": "Verde",
    "categorias": [
      "CPL-027"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Bruss Fernandez",
    "genero": "Masculino",
    "edad": 25,
    "cinta": "Naranja",
    "categorias": [
      "CPL-057"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Carlos Pop",
    "genero": "Masculino",
    "edad": 26,
    "cinta": "Café",
    "categorias": [
      "CPL-059"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Anderson Mateo",
    "genero": "Masculino",
    "edad": 23,
    "cinta": "Café",
    "categorias": [
      "CPL-059"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Neythan Mateo",
    "genero": "Masculino",
    "edad": 23,
    "cinta": "Azul",
    "categorias": [
      "CPL-058"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Daniel Muracao",
    "genero": "Masculino",
    "edad": 15,
    "cinta": "Blanca",
    "categorias": [
      "CPL-041"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Nestor Garcia",
    "genero": "Masculino",
    "edad": 15,
    "cinta": "Azul",
    "categorias": [
      "CPL-042"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Dulce Lopez",
    "genero": "Femenino",
    "edad": 12,
    "cinta": "Morada",
    "categorias": [
      "KT-018"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Josue Bolaños",
    "genero": "Masculino",
    "edad": 8,
    "cinta": "Azul",
    "categorias": [
      "KEX-007",
      "CPL-018"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Enma Bolaños",
    "genero": "Femenino",
    "edad": 6,
    "cinta": "Azul",
    "categorias": [
      "KEX-007"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Jose Lopez",
    "genero": "Masculino",
    "edad": 6,
    "cinta": "Morada",
    "categorias": [
      "CPL-010",
      "KEX-007"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Nacho Villatoro",
    "genero": "Masculino",
    "edad": 22,
    "cinta": "Negra",
    "categorias": [
      "KT-032"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Alain Kotto",
    "genero": "Masculino",
    "edad": 42,
    "cinta": "Café",
    "categorias": [
      "KT-031",
      "CPL-059"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Demetrio López",
    "genero": "Masculino",
    "edad": 34,
    "cinta": "Café",
    "categorias": [
      "CPL-059"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Adriana Cuéllar",
    "genero": "Femenino",
    "edad": 10,
    "cinta": "Morada",
    "categorias": [
      "KA-014"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Carlos Cuéllar",
    "genero": "Masculino",
    "edad": 6,
    "cinta": "Morada",
    "categorias": [
      "KA-006"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Luis Ángel Werner",
    "genero": "Masculino",
    "edad": 12,
    "cinta": "Verde",
    "categorias": [
      "KT-019"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Lili Ramírez",
    "genero": "Femenino",
    "edad": 11,
    "cinta": "Verde",
    "categorias": [
      "KA-015"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Arturo Mejía",
    "genero": "Masculino",
    "edad": 35,
    "cinta": "Negra",
    "categorias": [
      "KT-032"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Ángel Gabriel Vásquez",
    "genero": "Masculino",
    "edad": 8,
    "cinta": "Amarilla",
    "categorias": [
      "CPL-017A"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Ángel Sebastián Vásquez",
    "genero": "Masculino",
    "edad": 8,
    "cinta": "Amarilla",
    "categorias": [
      "CPL-017A"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  }
];
