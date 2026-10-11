# BuscadorDokan – Torneo de Karate Dragones Cardona

Buscador web (HTML + CSS + JavaScript puro) para que los participantes encuentren su categoría,
ring, horario y contra quién les puede tocar. Se publica gratis en GitHub Pages.

## Archivos

| Archivo         | Para qué sirve                                                      |
|-----------------|---------------------------------------------------------------------|
| `index.html`    | Estructura de la página                                             |
| `styles.css`    | Diseño (colores en las variables al inicio)                         |
| `script.js`     | Lógica de búsqueda (no hace falta tocarlo)                          |
| `data.js`       | Información general del evento (fecha, lugar, teléfono, Facebook)   |
| `categorias.js` | Categorías con su **ring y hora de inicio** (una línea por categoría)|
| `inscritos.js`  | Competidores (una línea por persona)                                |

## Cambiar ring u horario

En `categorias.js` edita `ring` y `hora` (formato 24 h) de la categoría:

```js
{ codigo: "CPL-017", nombre: "Cuartetas / Puntos Libre · 8 a 9 años · Principiante · Masculino", ..., ring: 1, hora: "09:15", ... },
```

## Agregar o corregir competidores

En `inscritos.js`, copia una línea y cambia los datos:

```js
{ nombre: "Nombre Apellido", genero: "Masculino", edad: 12, cinta: "Azul", categorias: ["CPL-036", "KA-020"] },
```

Si compite en dos categorías, pon los dos códigos. El código debe existir en `categorias.js`.
Si falla algo, abre la consola del navegador (F12): ahí salen avisos de qué línea revisar.

## Publicar cambios

En GitHub abre el archivo, pulsa el lápiz ✏️, edita y pulsa **Commit changes**.
La página se actualiza sola en uno o dos minutos.

## Cómo busca

Ignora mayúsculas, acentos, guiones y espacios extra. `sofia mazariegos`, `SOFÍA MAZARIEGOS`,
`cpl017` y `CPL-017` funcionan igual. Un código exacto (`cpl017`) abre solo esa categoría. También se
puede buscar por modalidad (`kata con arma`), género y edad (`femenino 14`) o cinta (`negra`).
