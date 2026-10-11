// Lista de competidores inscritos - Torneo Dragones Cardona 2026
const COMPETIDORES = [
  {
    "nombre": "Luis Mazariegos",
    "academia": "TMG KARATE",
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
    "academia": "TMG KARATE",
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
    "academia": "TMG KARATE",
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
    "academia": "TMG KARATE",
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
    "academia": "TMG KARATE",
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
    "academia": "TMG KARATE",
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
    "academia": "TMG KARATE",
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
    "academia": "TMG KARATE",
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
    "academia": "TMG KARATE",
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
    "academia": "TMG KARATE",
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
    "academia": "TMG KARATE",
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
    "academia": "TMG KARATE",
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
    "academia": "DRAGONES CARDONA",
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
    "academia": "DRAGONES CARDONA",
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
    "academia": "DRAGONES CARDONA",
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
    "academia": "DRAGONES CARDONA",
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
    "academia": "DRAGONES CARDONA",
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
    "academia": "DRAGONES CARDONA",
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
    "academia": "DRAGONES CARDONA",
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
    "academia": "DRAGONES CARDONA",
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
    "academia": "DRAGONES CARDONA",
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
    "academia": "DRAGONES CARDONA",
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
    "academia": "DRAGONES CARDONA",
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
    "academia": "DRAGONES CARDONA",
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
    "academia": "DRAGONES CARDONA",
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
    "academia": "DRAGONES CARDONA",
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
    "academia": "DRAGONES CARDONA",
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
    "academia": "DRAGONES CARDONA",
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
    "academia": "DRAGONES CARDONA",
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
    "academia": "DRAGONES CARDONA",
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
    "academia": "DRAGONES CARDONA",
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
    "academia": "DRAGONES CARDONA",
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
    "academia": "DRAGONES CARDONA",
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
    "academia": "DRAGONES CARDONA",
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
    "academia": "DRAGONES CARDONA",
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
    "academia": "DRAGONES CARDONA",
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
    "academia": "DRAGONES CARDONA",
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
    "academia": "DRAGONES CARDONA",
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
    "academia": "DRAGONES CARDONA",
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
    "academia": "DRAGONES CARDONA",
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
    "academia": "DRAGONES CARDONA",
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
    "academia": "DRAGONES CARDONA",
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
    "academia": "DRAGONES CARDONA",
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
    "academia": "DRAGONES CARDONA",
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
    "academia": "DRAGONES CARDONA",
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
    "academia": "DRAGONES CARDONA",
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
    "academia": "DRAGONES CARDONA",
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
    "academia": "DRAGONES CARDONA",
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
    "academia": "Pro karate",
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
    "academia": "Pro karate",
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
    "academia": "DRAGONES NEGROS",
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
    "academia": "DRAGONES NEGROS",
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
    "academia": "DRAGONES NEGROS",
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
    "academia": "DRAGONES NEGROS",
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
    "academia": "DRAGONES NEGROS",
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
    "academia": "DRAGONES NEGROS",
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
    "academia": "DRAGONES NEGROS",
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
    "academia": "DRAGONES NEGROS",
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
    "academia": "DRAGONES NEGROS",
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
    "academia": "DRAGONES NEGROS",
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
    "academia": "DRAGONES NEGROS",
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
    "academia": "DRAGONES NEGROS",
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
    "academia": "DRAGONES NEGROS",
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
    "academia": "DRAGONES NEGROS",
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
    "academia": "DRAGONES NEGROS",
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
    "academia": "DRAGONES NEGROS",
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
    "academia": "MATTHEW TEAM",
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
    "academia": "MATTHEW TEAM",
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
    "nombre": "Camila Morales",
    "academia": "MATTHEW TEAM",
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
    "academia": "MATTHEW TEAM",
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
    "academia": "MATTHEW TEAM",
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
    "academia": "MATTHEW TEAM",
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
    "academia": "MATTHEW TEAM",
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
    "academia": "MATTHEW TEAM",
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
    "nombre": "Daniel Muracao",
    "academia": "MATTHEW TEAM",
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
    "academia": "TEAM BOLAÑOS",
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
    "academia": "TEAM BOLAÑOS",
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
    "academia": "TEAM BOLAÑOS",
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
    "academia": "TEAM BOLAÑOS",
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
    "academia": "TEAM BOLAÑOS",
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
    "academia": "Villatoro Team",
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
    "academia": "Villatoro Team",
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
    "academia": "Villatoro Team",
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
    "academia": "Villatoro Team",
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
    "academia": "Villatoro Team",
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
    "academia": "Villatoro Team",
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
    "academia": "Villatoro Team",
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
    "academia": "Villatoro Team",
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
    "academia": "Zúñiga Marshall",
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
    "academia": "Zúñiga Marshall",
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
    "nombre": "Jarol Aldair Alvarado",
    "academia": "DRAGONES CARDONA",
    "genero": "Masculino",
    "edad": 12,
    "cinta": "Naranja",
    "categorias": [
      "CPL-033"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Edison Uciel Alvarado",
    "academia": "DRAGONES CARDONA",
    "genero": "Masculino",
    "edad": 12,
    "cinta": "Naranja",
    "categorias": [
      "CPL-033"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Jose Sic",
    "academia": "DRAGONES CARDONA",
    "genero": "Masculino",
    "edad": 21,
    "cinta": "Café",
    "categorias": [
      "CPL-059"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  },
  {
    "nombre": "Jonathan Beltrán",
    "academia": "DRAGONES CARDONA",
    "genero": "Masculino",
    "edad": 15,
    "cinta": "Naranja",
    "categorias": [
      "CPL-041"
    ],
    "pesoMin": 40,
    "pesoMax": 300
  }
];
