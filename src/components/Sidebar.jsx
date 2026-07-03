import { useState } from "react";
import { Link } from "react-router-dom";
import * as Icons from "lucide-react";
import { ChevronDown } from "lucide-react";
import menuItems from "../data/menu.json";
import "../styles/Sidebar.css";

function Sidebar() {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (label) => {
    setOpenSections((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <aside className="sidebar">
      <Link to="/principal" className="sidebar-header">
        <Icons.Users size={26} />
        <h1>U.A.T.F.</h1>
        </Link>

      <div className="sidebar-user">
        <div className="sidebar-avatar">
          <Icons.User size={28} />
        </div>
        <div>
          <p className="sidebar-user-welcome">BIENVENIDO,</p>
          <p className="sidebar-user-name">USUARIO</p>
        </div>
      </div>

      <p className="sidebar-section-label">GENERAL</p>

      <nav className="sidebar-nav">
        {menuItems.map((item) => {
          const IconComponent = Icons[item.icon] || Icons.Circle;
          const isOpen = openSections[item.label];

          return (
            <div key={item.label} className="sidebar-group">
              <button
                className="sidebar-item-header"
                onClick={() => toggleSection(item.label)}
              >
                <span className="sidebar-item-left">
                  <IconComponent size={18} />
                  {item.label}
                </span>
                <ChevronDown
                  size={16}
                  className={`sidebar-chevron ${isOpen ? "open" : ""}`}
                />
              </button>

              {isOpen && (
                <div className="sidebar-submenu">
                  {item.children.map((child) => (
                    <Link
                      key={child.path}
                      to={child.path}
                      className="sidebar-subitem"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;