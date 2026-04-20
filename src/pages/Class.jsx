import "../styles/class.css";
import clubShield from "../escudo-santa-rosa-rugby.png";

function formatDate(dateStr) {
  const d = new Date(dateStr + "T12:00:00");
  return d.toLocaleDateString("es-AR", { day: "numeric", month: "long", year: "numeric" });
}

function getUserLabel(email) {
  const localPart = (email || "").split("@")[0] || "miembro";
  return localPart;
}

function SidecardIcon({ type }) {
  if (type === "video") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
        <path d="M10 9.2L15.2 12L10 14.8V9.2Z" />
      </svg>
    );
  }

  if (type === "summary") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="4.5" y="3.5" width="15" height="17" rx="2.5" />
        <path d="M8 8.5H16M8 12H16M8 15.5H13.5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M6.5 3.5H14L18.5 8V20.5H6.5V3.5Z" />
      <path d="M14 3.5V8H18.5" />
    </svg>
  );
}

// Minimal markdown-like renderer: headers, bold, lists, paragraphs
function renderSummary(text) {
  const lines = text.split("\n");
  const elements = [];
  let listBuffer = [];
  let key = 0;

  const flushList = () => {
    if (listBuffer.length > 0) {
      elements.push(
        <ul key={key++} className="summary-list">
          {listBuffer.map((item, i) => <li key={i}>{parseBold(item)}</li>)}
        </ul>
      );
      listBuffer = [];
    }
  };

  const parseBold = (str) => {
    const parts = str.split(/\*\*(.*?)\*\*/g);
    return parts.map((p, i) => i % 2 === 1 ? <strong key={i}>{p}</strong> : p);
  };

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) { flushList(); elements.push(<div key={key++} className="summary-spacer" />); continue; }
    if (trimmed.startsWith("### ")) { flushList(); elements.push(<h4 key={key++} className="summary-h3">{trimmed.slice(4)}</h4>); continue; }
    if (trimmed.startsWith("## ")) { flushList(); elements.push(<h3 key={key++} className="summary-h2">{trimmed.slice(3)}</h3>); continue; }
    if (trimmed.startsWith("# ")) { flushList(); elements.push(<h2 key={key++} className="summary-h1">{trimmed.slice(2)}</h2>); continue; }
    if (trimmed.startsWith("- ")) { listBuffer.push(trimmed.slice(2)); continue; }
    flushList();
    elements.push(<p key={key++} className="summary-p">{parseBold(trimmed)}</p>);
  }
  flushList();
  return elements;
}

export default function Class({ cls, user, classes, onOpenClass, onLogout, onGoHome }) {
  if (!cls) return null;
  const availableClasses = classes || [];
  const pdfEmbedUrl = cls.pdfUrl ? `${cls.pdfUrl}#view=FitH&navpanes=0` : "";
  const currentClassIndex = availableClasses.findIndex((item) => item.id === cls.id);
  const previousClass = currentClassIndex > 0 ? availableClasses[currentClassIndex - 1] : null;
  const nextClass =
    currentClassIndex >= 0 && currentClassIndex < availableClasses.length - 1
      ? availableClasses[currentClassIndex + 1]
      : null;

  return (
    <div className="class-page">
      <header className="class-header">
        <div className="class-header-inner">
          <button className="class-brand class-brand-link" onClick={onGoHome}>
            <span className="class-logo-mark">
              <img src={clubShield} alt="Escudo de Santa Rosa Rugby" className="class-brand-shield" />
            </span>
            <div className="class-brand-copy">
              <span className="class-brand-name">Santa Rosa Rugby</span>
              <span className="class-brand-subtitle">Capacitaciones internas</span>
            </div>
          </button>
          <div className="home-user">
            <span className="home-user-name">{getUserLabel(user.email)}</span>
            <button className="home-logout" onClick={onLogout}>Salir</button>
          </div>
        </div>
      </header>

      <main className="class-main">
        <div className="class-layout">
          <div className="class-content">
            <section className="class-hero">
              <div className="class-copy">
                <div className="class-meta">
                  <span className="class-number">Clase {cls.number}</span>
                  <span className="class-dot">·</span>
                  <span className="class-date-text">{formatDate(cls.date)}</span>
                </div>
                <h1 className="class-title">{cls.title}</h1>
                <p className="class-desc">{cls.description}</p>
              </div>
            </section>

            <div id="section-resumen" className="summary-section">
              <div className="summary-divider">
                <span>Resumen de la clase</span>
              </div>
              <div className="summary-body">
                {renderSummary(cls.summary)}
              </div>
            </div>

            {cls.videoUrl && (
              <div id="section-video" className="video-section">
                <div className="section-heading">
                  <span className="section-chip">Reproducción</span>
                  <h2>Video de la clase</h2>
                </div>
                <div className="video-wrapper">
                  <iframe
                    src={cls.videoUrl}
                    title={`Clase ${cls.number}: ${cls.title}`}
                    frameBorder="0"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            )}

            {cls.pdfUrl && (
              <div id="section-pdf" className="pdf-section">
                <div className="section-heading">
                  <span className="section-chip">Presentación</span>
                  <h2>PDF de la clase</h2>
                </div>
                <div className="pdf-actions">
                  <a href={cls.pdfUrl} target="_blank" rel="noopener noreferrer" className="pdf-link">
                    Abrir en pestaña nueva
                  </a>
                </div>
                <div className="pdf-wrapper">
                  <iframe src={pdfEmbedUrl} title={`PDF Clase ${cls.number}: ${cls.title}`} loading="lazy" />
                </div>
              </div>
            )}

            <div className="class-nav">
              {previousClass ? (
                <button type="button" className="class-nav-btn" onClick={() => onOpenClass(previousClass)}>
                  <span className="class-nav-label">← Clase anterior</span>
                  <span className="class-nav-target">Clase {previousClass.number} · {previousClass.title}</span>
                </button>
              ) : (
                <span className="class-nav-spacer" />
              )}
              {nextClass ? (
                <button type="button" className="class-nav-btn" onClick={() => onOpenClass(nextClass)}>
                  <span className="class-nav-label">Clase siguiente →</span>
                  <span className="class-nav-target">Clase {nextClass.number} · {nextClass.title}</span>
                </button>
              ) : (
                <span className="class-nav-spacer" />
              )}
            </div>
          </div>

          <aside className="class-sidebar">
            <div className="class-sidecard">
              <span className="class-sidecard-label">Contenido disponible</span>
              <div className={`sidecard-item${cls.videoUrl ? " is-available" : " is-unavailable"}`}>
                <span className="sidecard-icon" aria-hidden="true"><SidecardIcon type="video" /></span>
                {cls.videoUrl ? (
                  <a href="#section-video" className="sidecard-link">Video</a>
                ) : (
                  <strong>Video</strong>
                )}
              </div>
              <div className="sidecard-item is-available">
                <span className="sidecard-icon" aria-hidden="true"><SidecardIcon type="summary" /></span>
                <a href="#section-resumen" className="sidecard-link">Resumen</a>
              </div>
              <div className={`sidecard-item${cls.pdfUrl ? " is-available" : " is-unavailable"}`}>
                <span className="sidecard-icon" aria-hidden="true"><SidecardIcon type="pdf" /></span>
                {cls.pdfUrl ? (
                  <a href="#section-pdf" className="sidecard-link">Presentación PDF</a>
                ) : (
                  <strong>Presentación PDF</strong>
                )}
              </div>
            </div>

            <div className="class-index-card">
              <span className="class-sidecard-label">Indice de clases</span>
              <div className="class-index-list">
                {availableClasses.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => onOpenClass(item)}
                    className={`class-index-item${item.id === cls.id ? " is-active" : ""}`}
                  >
                    <span className="class-index-number">Clase {item.number}</span>
                    <span className="class-index-title">{item.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>

      <footer className="home-footer">
        <p>© {new Date().getFullYear()} · Santa Rosa Rugby - Javier Telechea</p>
      </footer>
    </div>
  );
}
