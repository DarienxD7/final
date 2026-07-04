import { useState } from "react";
import "../../styles/Principal.css";

const PERIODOS = [
  "PROGRAMACION 2026/1",
  "PROGRAMACION 2025/2",
  "PROGRAMACION 2025/1",
  "PROGRAMACION 2024/2",
  "PROGRAMACION 2024/1",
];

function VerNotas() {
  const [periodo, setPeriodo] = useState("");

  function handleVerNotas() {
    if (!periodo) return;

    alert(`Consultando notas de: ${periodo}`);
  }

  return (
    <div>
      <h1>
        MIS NOTAS
        {!periodo && (
          <div className="notas-alerta">• SELECCIONE LA GESTION Y EL PERIODO PARA VER SUS NOTAS</div>
        )}
      </h1>

      <div className="notas-selector">
        <div className="notas-selector-row">
          <label>SELECCIONE</label>
          <select
            className="notas-select"
            value={periodo}
            onChange={(e) => setPeriodo(e.target.value)}
          >
            <option value="">Gestion y periodo de su programacion</option>
            {PERIODOS.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>

        <button className="notas-btn-ver" onClick={handleVerNotas}>
          Ver mis notas
        </button>
      </div>
    </div>
  );
}

export default VerNotas;