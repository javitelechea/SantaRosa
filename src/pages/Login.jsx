import { useState } from "react";
import { USERS, CLUB_PASSWORD } from "../data";
import clubShield from "../escudo-santa-rosa-rugby.png";
import "../styles/login.css";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    setTimeout(() => {
      const user = USERS.find(
        (u) => u.email === email.trim().toLowerCase()
      );
      if (user && password === CLUB_PASSWORD) {
        onLogin(user);
      } else {
        setError("Mail o contraseña incorrectos.");
        setLoading(false);
      }
    }, 500);
  };

  return (
    <div className="login-bg">
      <div className="login-card">
        <div className="login-header">
          <div className="login-logo">
            <img src={clubShield} alt="Escudo de Santa Rosa Rugby" className="club-shield club-shield-login" />
          </div>
          <p className="login-kicker">Santa Rosa Rugby Club</p>
          <h1 className="login-title">Santa Rosa Rugby</h1>
          <p className="login-subtitle">Acceso a las capacitaciones internas del club</p>
        </div>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="field">
            <label htmlFor="email">Mail</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="nombre@ejemplo.com"
              autoComplete="email"
              required
            />
          </div>
          <div className="field">
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              autoComplete="current-password"
              required
            />
          </div>
          {error && <p className="login-error">{error}</p>}
          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? "Ingresando..." : "Ingresar"}
          </button>
        </form>
      </div>
    </div>
  );
}
