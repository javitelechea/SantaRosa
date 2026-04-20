import "../styles/classes-index.css";
import clubShield from "../escudo-santa-rosa-rugby.png";

function formatDate(dateStr) {
  const d = new Date(dateStr + "T12:00:00");
  return d.toLocaleDateString("es-AR", { day: "numeric", month: "long", year: "numeric" });
}

function getUserLabel(email) {
  const localPart = (email || "").split("@")[0] || "miembro";
  return localPart;
}

export default function ClassesIndex({ user, classes, onOpenClass, onBackHome, onLogout }) {
  return (
    <div className="classes-index-page">
      <header className="home-header">
        <div className="home-header-inner">
          <button className="home-brand classes-index-brand-link" onClick={onBackHome}>
            <span className="home-logo-mark">
              <img src={clubShield} alt="Escudo de Santa Rosa Rugby" className="club-shield club-shield-header" />
            </span>
            <div className="home-brand-copy">
              <span className="home-brand-name">Santa Rosa Rugby</span>
              <span className="home-brand-subtitle">Indice completo de clases</span>
            </div>
          </button>
          <div className="home-user">
            <button className="home-nav-btn" onClick={onBackHome}>Inicio</button>
            <span className="home-user-name">Hola, {getUserLabel(user.email)}</span>
            <button className="home-logout" onClick={onLogout}>Salir</button>
          </div>
        </div>
      </header>

      <main className="classes-index-main">
        <div className="classes-index-header">
          <p className="classes-index-kicker">Biblioteca del club</p>
          <h1>Indice de clases</h1>
          <p>Acceso rapido a todo el historial en orden cronologico.</p>
        </div>

        <div className="classes-index-list">
          {classes.map((cls) => (
            <button key={cls.id} className="classes-index-item" onClick={() => onOpenClass(cls)}>
              <span className="classes-index-number">Clase {cls.number}</span>
              <strong>{cls.title}</strong>
              <span className="classes-index-date">{formatDate(cls.date)}</span>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}
