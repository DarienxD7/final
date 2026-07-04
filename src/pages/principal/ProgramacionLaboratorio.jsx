import { useState } from "react";
import { Settings, FlaskConical, Info } from "lucide-react";
import "../../styles/Principal.css";

function ProgramacionLaboratorio() {
  const [tab, setTab] = useState("fisica");

  const materiasFisica = [];
  const materiasQuimica = [];

  return (
    <div>
      <h1>PROGRAMACIÓN DE LABORATORIOS</h1>

      <div className="lab-tabs">
        <button
          className={`lab-tab ${tab === "fisica" ? "active" : ""}`}
          onClick={() => setTab("fisica")}
        >
          <Settings size={16} /> Laboratorio de Física
          <span className="lab-tab-badge">{materiasFisica.length}</span>
        </button>
        <button
          className={`lab-tab ${tab === "quimica" ? "active" : ""}`}
          onClick={() => setTab("quimica")}
        >
          <FlaskConical size={16} /> Laboratorio de Química
          <span className="lab-tab-badge">{materiasQuimica.length}</span>
        </button>
      </div>

      {tab === "fisica" && (
        <>
          <div className="lab-card">
            <div className="lab-card-icon">
              <Settings size={22} />
            </div>
            <div>
              <p className="lab-card-title">LABORATORIO DE FÍSICA</p>
              <p className="lab-card-desc">PROGRAMACIÓN DE MATERIAS DEL LABORATORIO FÍSICO</p>
            </div>
          </div>
          {materiasFisica.length === 0 && (
            <div className="lab-info">
              <Info size={16} />
              USTED NO TIENE MATERIAS DE LABORATORIO DE FÍSICA ASIGNADAS.
            </div>
          )}
        </>
      )}

      {tab === "quimica" && (
        <>
          <div className="lab-card">
            <div className="lab-card-icon">
              <FlaskConical size={22} />
            </div>
            <div>
              <p className="lab-card-title">LABORATORIO DE QUÍMICA</p>
              <p className="lab-card-desc">PROGRAMACIÓN DE MATERIAS DEL LABORATORIO QUÍMICO</p>
            </div>
          </div>
          {materiasQuimica.length === 0 && (
            <div className="lab-info">
              <Info size={16} />
              USTED NO TIENE MATERIAS DE LABORATORIO DE QUÍMICA ASIGNADAS.
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default ProgramacionLaboratorio;