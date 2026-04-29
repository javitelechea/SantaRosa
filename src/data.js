// ─── USUARIOS ────────────────────────────────────────────────────────────────
// Agregá o quitá miembros acá. La contraseña está en texto plano por simplicidad.
// Para producción seria recomendable usar un backend o servicio de auth.
export const USERS = [
  { email: "klausnermarilina@gmail.com", role: "member" },
  { email: "lulalmirall@gmail.com", role: "member" },
  { email: "viquiantonio@gmail.com", role: "member" },
  { email: "lisandro.baravallelago@gmail.com", role: "member" },
  { email: "micasalomon14@gmail.com", role: "member" },
  { email: "consumacias83@gmail.com", role: "member" },
  { email: "mnzapata1993@gmail.com", role: "member" },
  { email: "coordinacionsrr.hockey@gmail.com", role: "member" },
  { email: "javitelechea@hotmail.com", role: "admin" },
  { email: "agrimensorag@gmail.com", role: "member" },
  { email: "cgigena@gmail.com", role: "member" },
];

// Contraseña única para todo el club (uso interno)
export const CLUB_PASSWORD = "SantaRosa26";

// ─── CLASES ───────────────────────────────────────────────────────────────────
// Agregá una nueva entrada cada 2 semanas.
// videoUrl: link de YouTube o Vimeo (embed)
// pdfUrl: archivo PDF en /public (opcional)
// summary: el resumen de la clase en formato texto/markdown
export const CLASSES = [
  {
    id: 1,
    number: "1A",
    date: "2026-03-05",
    title: "Diseño de entrenamientos",
    description: "Clase 1A: estructura y metodología para planificar entrenamientos efectivos.",
    videoUrl: "https://www.youtube.com/embed/bu33hfpMPR0",
    pdfUrl: "/pdfs/clase-1a.pdf",
    summary: `## Resumen de la clase

### Temas tratados
- Cómo tiene que ser un entrenamiento: con objetivo claro, planificación, ritmo y transferencia real.
- Tipos de ejercicios y criterios para ajustarlos según dificultad, espacio y reglas.
- Progresión de sesión: de lo simple a lo complejo, del análisis al juego real.

### Puntos clave
Un entrenamiento efectivo no es una suma de ejercicios: es una secuencia diseñada para enseñar una idea de juego concreta.

**Concepto central:** objetivo claro + progresión + correcciones alineadas al foco del día.`,
  },
  {
    id: 2,
    number: "1B",
    date: "2026-03-05",
    title: "Introducción a los principios del juego",
    description: "Clase 1B: qué son los principios de juego y cómo aplicarlos en el club.",
    videoUrl: "",
    pdfUrl: "/pdfs/clase-1b.pdf",
    summary: `## Resumen de la clase

### Temas tratados
- Qué son los principios de juego y para qué sirven en la toma de decisiones.
- Diferencia entre principios (guías) y patrones (secuencias prefijadas).
- Cómo elegir principios útiles para el club: claros, prácticos y entrenables.

### Puntos clave
Los principios ordenan la forma de jugar del club y permiten que todas las categorías entrenen con un mismo idioma.

**Concepto central:** menos es más: pocos principios, bien definidos y repetidos en cada fase del juego.`,
  },
  {
    id: 3,
    number: "2",
    date: "2026-04-01",
    title: "Agrandar la cancha",
    description: "Clase 2: criterios para ampliar espacios, generar tiempo y mejorar decisiones.",
    videoUrl: "https://www.youtube.com/embed/GHp-D0LmSrc",
    pdfUrl: "/pdfs/clase-2.pdf",
    summary: `## Resumen de la clase

### Temas tratados
- Agrandar el espacio como primer principio ofensivo para facilitar pase, control y desmarque.
- Juego ancho para acelerar por afuera o para abrir pasillos internos.
- Opciones de pase anchas y profundas (rombo) para sostener posesión y progresar.
- Uso táctico de alineaciones y tareas de entrenamiento específicas para desarrollar el principio.

### Puntos clave
Cuando el equipo hace la cancha grande, obliga al rival a elegir qué proteger y siempre aparece un espacio útil.

**Concepto central:** agrandar el espacio primero para atacar mejor después, por afuera o por adentro según lo que permita la defensa.`,
  },
  {
    id: 4,
    number: "3",
    date: "2026-04-14",
    title: "Derecho a derecho",
    description: "Clase 3: fundamentos técnicos y decisiones para jugar de derecho a derecho.",
    videoUrl: "https://www.youtube.com/embed/we92p6bBDWo",
    pdfUrl: "/pdfs/clase-3.pdf",
    summary: `## Resumen de la clase

### Temas tratados
- Derecho a derecho como principio de posesión para circular la bocha con criterio.
- Calidad técnica del pase (fuerte, liso y al derecho) y de la recepción (controlada, abierta y perfilada).
- Rol de las jugadoras sin bocha: generar líneas de pase, desmarques y mejores ángulos de apoyo.
- Subprincipio "juego lo que veo": evitar recepciones ciegas y elegir opciones claras según el contexto.

### Puntos clave
Sostener la posesión no depende solo de quien tiene la bocha: depende de la calidad del pase, la postura y las opciones que ofrece todo el equipo.

**Concepto central:** posesión útil = técnica de pase + recepción orientada + lectura del juego para decidir mejor.`,
  },
  {
    id: 5,
    number: "4",
    date: "2026-04-28",
    title: "Progresar",
    description: "Clase 4 del ciclo de capacitaciones.",
    videoUrl: "",
    pdfUrl: "",
    summary: `## Resumen de la clase

### Temas tratados
- Pendiente de completar.

### Puntos clave
Resumen en construcción.`,
  },
];
