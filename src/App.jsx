import { useState, useEffect } from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Class from "./pages/Class";
import ClassesIndex from "./pages/ClassesIndex";
import { CLASSES } from "./data";

export default function App() {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("home");
  const [selectedClass, setSelectedClass] = useState(null);

  useEffect(() => {
    const saved = sessionStorage.getItem("club_user");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  const handleLogin = (u) => {
    sessionStorage.setItem("club_user", JSON.stringify(u));
    setUser(u);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("club_user");
    setUser(null);
    setPage("home");
    setSelectedClass(null);
  };

  const openClass = (cls) => {
    setSelectedClass(cls);
    setPage("class");
  };

  const goHome = () => {
    setPage("home");
    setSelectedClass(null);
  };

  const openClassesIndex = () => {
    setPage("classes-index");
    setSelectedClass(null);
  };

  const orderedClasses = [...CLASSES].sort((a, b) => new Date(a.date) - new Date(b.date));

  if (!user) return <Login onLogin={handleLogin} />;

  return (
    <div>
      {page === "home" && (
        <Home
          user={user}
          onLogout={handleLogout}
          onOpenClass={openClass}
          onOpenClassesIndex={openClassesIndex}
          onGoHome={goHome}
        />
      )}
      {page === "classes-index" && (
        <ClassesIndex
          user={user}
          classes={orderedClasses}
          onOpenClass={openClass}
          onBackHome={goHome}
          onLogout={handleLogout}
        />
      )}
      {page === "class" && (
        <Class
          cls={selectedClass}
          user={user}
          classes={orderedClasses}
          onOpenClass={openClass}
          onLogout={handleLogout}
          onGoHome={goHome}
        />
      )}
    </div>
  );
}
