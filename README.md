# Capacitaciones Club — Sitio interno

Sitio web privado para las capacitaciones del club. Acceso con mail y contraseña común del club.

## Estructura

```
src/
  data.js          ← ACÁ se editan usuarios y clases
  App.jsx          ← Navegación principal
  pages/
    Login.jsx      ← Pantalla de ingreso
    Home.jsx       ← Listado de clases
    Class.jsx      ← Clase individual (video + resumen)
  styles/          ← CSS de cada página
```

---

## Cómo agregar una nueva clase

Abrí `src/data.js` y agregá un objeto al array `CLASSES`:

```js
{
  id: 4,                          // número único, siempre mayor al anterior
  number: 4,                      // número de clase que se muestra
  date: "2024-04-12",             // formato YYYY-MM-DD
  title: "Título de la clase",
  description: "Descripción breve que aparece en el listado.",
  videoUrl: "https://www.youtube.com/embed/TU_ID_DE_VIDEO",
  summary: `## Resumen de la clase

### Temas tratados
- Tema uno
- Tema dos

### Puntos clave
Texto del resumen...

**Concepto en negrita:** así se escribe en negrita.`,
},
```

### Cómo obtener el link de embed de YouTube
1. Abrí el video en YouTube
2. Hacé clic en "Compartir" → "Insertar"
3. Copiá la URL que aparece en el atributo `src` del iframe
   - Ejemplo: `https://www.youtube.com/embed/dQw4w9WgXcQ`

### Cómo escribir el resumen
El resumen usa formato Markdown simplificado:
- `## Título` → título grande
- `### Subtítulo` → subtítulo con acento dorado
- `- ítem` → lista con viñetas
- `**texto**` → negrita

---

## Cómo agregar o cambiar usuarios

En `src/data.js`, editá el array `USERS`:

```js
{ email: "nuevo.miembro@gmail.com", role: "member" }
```

Y definí la contraseña común del club en la constante:

```js
export const CLUB_PASSWORD = "tu-clave-comun";
```

---

## Instalación y desarrollo local

```bash
npm install
npm run dev
```

## Deploy en Vercel

```bash
npm run build
# o conectá el repo a Vercel y deployá automáticamente
```

---

## Nota de seguridad

Las contraseñas están guardadas en texto plano en `data.js`. Esto es aceptable para un sitio interno pequeño de un club. Si en el futuro necesitás mayor seguridad (muchos usuarios, datos sensibles), el paso natural es agregar un backend con base de datos o usar un servicio como Supabase.
