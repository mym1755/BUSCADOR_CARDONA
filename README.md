# BuscadorDokan – Torneo de Karate Dragones Cardona

Buscador web (HTML + CSS + JavaScript puro, sin instalaciones) para que los participantes
encuentren su categoría, ring, horario y competidores. Se despliega gratis en GitHub Pages.

## Archivos

| Archivo      | Para qué sirve                                                  |
|--------------|-----------------------------------------------------------------|
| `index.html` | Estructura de la página                                         |
| `styles.css` | Diseño (colores en las variables al inicio del archivo)         |
| `script.js`  | Lógica de búsqueda (no necesitas tocarlo)                       |
| `data.js`    | **Datos del evento, categorías y competidores (edita este)**    |

## Publicarlo en GitHub Pages (sin usar la terminal)

1. Entra a <https://github.com/new>, nombre del repositorio: `BuscadorDokan`, visibilidad **Public** y crea el repo.
2. Pulsa **uploading an existing file** y arrastra los 4 archivos (`index.html`, `styles.css`, `script.js`, `data.js`) más este `README.md`. Pulsa **Commit changes**.
3. Ve a **Settings → Pages**. En *Build and deployment* elige **Deploy from a branch**, rama `main`, carpeta `/ (root)` y guarda.
4. En 1–2 minutos tu sitio estará en `https://TU-USUARIO.github.io/BuscadorDokan/`.

## Agregar categorías y competidores después

1. En GitHub abre `data.js` y pulsa el lápiz ✏️ (Edit).
2. Agrega filas en `CATEGORIAS` o `COMPETIDORES`, respetando las comas:

```js
{ codigo: "KT-INF", nombre: "Kata Tradicional Infantil", ring: "Ring 2", horario: "9:30 AM" },
{ codigo: "DC-001", nombre: "Nombre Apellido", gym: "Dragones Cardona", categoria: "KT-INF" },
```

3. Pulsa **Commit changes**. La página se actualiza sola en un minuto.

Reglas: el campo `categoria` del competidor debe ser igual al `codigo` de una categoría, y los
códigos no se pueden repetir. Si hay un error, abre la consola del navegador (F12) y verás un aviso.

## Cómo busca

Ignora mayúsculas, acentos, guiones y espacios extra. `kata tradicional`, `KATA-TRADICIONAL`,
`dc001` y `DC-001` funcionan por igual. También puede buscar por nombre del gimnasio.
