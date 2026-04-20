import { CLASSES } from "../data";
import clubShield from "../escudo-santa-rosa-rugby.png";
import "../styles/home.css";

function formatDate(dateStr) {
  const d = new Date(dateStr + "T12:00:00");
  return d.toLocaleDateString("es-AR", { day: "numeric", month: "long", year: "numeric" });
}

function getUserLabel(email) {
  const localPart = (email || "").split("@")[0] || "miembro";
  return localPart;
}

export default function Home({ user, onLogout, onOpenClass, onOpenClassesIndex, onGoHome }) {
  const sorted = [...CLASSES].sort((a, b) => new Date(b.date) - new Date(a.date));
  const latest = sorted[0];
  const rest = sorted.slice(1);

  return (
    <div className="home">
      <header className="home-header">
        <div className="home-header-inner">
          <button className="home-brand home-brand-link" onClick={onGoHome}>
            <span className="home-logo-mark">
              <img src={clubShield} alt="Escudo de Santa Rosa Rugby" className="club-shield club-shield-header" />
            </span>
            <div className="home-brand-copy">
              <span className="home-brand-name">Santa Rosa Rugby</span>
              <span className="home-brand-subtitle">Capacitaciones internas</span>
            </div>
          </button>
          <div className="home-user">
            <button className="home-nav-btn" onClick={onOpenClassesIndex}>Indice de clases</button>
            <span className="home-user-name">Hola, {getUserLabel(user.email)}</span>
            <button className="home-logout" onClick={onLogout}>Salir</button>
          </div>
        </div>
      </header>

      <main className="home-main">
        <section className="home-hero">
          <div className="home-hero-copy">
            <p className="home-kicker">Plataforma privada del club</p>
            <h1 className="home-heading">Capacitaciones Santa Rosa Rugby</h1>
            <p className="home-lead">
              En esta web vas a encontrar todo el contenido de las capacitaciones.
            </p>
          </div>
          <div className="home-hero-panel">
            <div className="hero-panel-top">
              <span className="hero-panel-pill">Última clase</span>
              <span className="hero-panel-date">
                {latest ? `Última actualización · ${formatDate(latest.date)}` : "Sin clases cargadas"}
              </span>
            </div>
            {latest && (
              <button className="hero-feature-card" onClick={() => onOpenClass(latest)}>
                <span className="hero-feature-label">Clase destacada</span>
                <strong>{latest.title}</strong>
                <span>{latest.description}</span>
                <span className="hero-feature-link">Abrir clase</span>
              </button>
            )}
          </div>
        </section>

        {rest.length > 0 && (
          <section className="archive-section">
            <p className="section-label">Clases anteriores</p>
            <div className="archive-shell">
              <div className="archive-header">
                <div>
                  <h2>Archivo de clases</h2>
                  <p>Todo el historial queda disponible para consulta del plantel y del staff.</p>
                </div>
              </div>
              <div className="class-list">
              {rest.map((cls) => (
                <div key={cls.id} className="class-row" onClick={() => onOpenClass(cls)}>
                  <div className="class-row-left">
                    <span className="class-number-small">{cls.number}</span>
                    <div>
                      <p className="class-row-title">{cls.title}</p>
                      <p className="class-row-date">{formatDate(cls.date)}</p>
                    </div>
                  </div>
                  <span className="class-row-arrow">→</span>
                </div>
              ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="home-footer">
        <p>© {new Date().getFullYear()} · Santa Rosa Rugby - Javier Telechea</p>
      </footer>
    </div>
  );
}
