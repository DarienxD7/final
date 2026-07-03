import { useState } from "react";
import { Menu, User, ChevronDown, LogOut } from "lucide-react";
import "../styles/Topbar.css";

function Topbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="topbar">
      <Menu size={22} className="topbar-menu-icon" />

      <div className="topbar-user" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="topbar-avatar">
          <User size={18} />
        </div>
        <span>USUARIO</span>
        <ChevronDown size={16} />

        {menuOpen && (
          <div className="topbar-dropdown">
            <button className="topbar-logout">
              <span>CERRAR SESION</span>
              <LogOut size={16} />
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Topbar;