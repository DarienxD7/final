import "../../styles/Principal.css";

const LEYENDA = [
  { estado: "nunca-llevo", label: "MATERIAS QUE NUNCA LLEVÓ", color: "#60a5fa" },
  { estado: "reprobada", label: "MATERIAS REPROBADAS", color: "#f87171" },
  { estado: "aprobada", label: "MATERIAS APROBADAS", color: "#4ade80" },
  { estado: "dependiente", label: "MATERIAS DEPENDIENTES", color: "#fbbf24" },
  { estado: "programada", label: "MATERIAS PROGRAMADAS", color: "#a78bfa" },
  { estado: "abandonada", label: "MATERIAS ABANDONADAS", color: "#94a3b8" },
];

const COLORES = {
  "nunca-llevo": { border: "#60a5fa", color: "#1d4ed8", bg: "#eff6ff" },
  reprobada: { border: "#f87171", color: "#b91c1c", bg: "#fef2f2" },
  aprobada: { border: "#4ade80", color: "#15803d", bg: "#f0fdf4" },
  dependiente: { border: "#fbbf24", color: "#92400e", bg: "#fffbeb" },
  programada: { border: "#a78bfa", color: "#6d28d9", bg: "#f5f3ff" },
  abandonada: { border: "#94a3b8", color: "#334155", bg: "#f1f5f9" },
};

const SEMESTRES = [
  ["LIN110", "FIS120", "FIS220", "SIS330", "SIS440", "SIS550"],
  ["MAT120", "MAT210", "MAT320", "SIS431", "SIS541", "SIS650"],
  ["MAT130", "SIS220", "SIS340", "SIS432", "SIS542", "SIS660"],
  ["MAT140", "SIS230", "SIS350", "SIS433", "SIS543", "SIS670"],
  ["SIS150", "SIS240", "SIS360", "SIS434", "SIS544", "SIS680"],
  ["SIS160", "SIS250", "SIS370", "SIS435", "SIS545", "SIS690"],
];

const ESTADOS = [
  "aprobada", "aprobada", "aprobada", "programada", "dependiente", "nunca-llevo",
];

function estadoDe(fila, columna) {
  return ESTADOS[(fila + columna) % ESTADOS.length];
}

function PlanEstudios() {
  return (
    <div>
      <h1>
        PLAN DE ESTUDIOS
        <button className="plan-toggle">NORMAL</button>
      </h1>

      <div className="plan-leyenda">
        {LEYENDA.map((item) => (
          <div className="plan-leyenda-item" key={item.estado}>
            <span className="plan-leyenda-color" style={{ backgroundColor: item.color }} />
            {item.label}
          </div>
        ))}
      </div>

      <div className="plan-grid">
        {SEMESTRES.map((columna, colIndex) => (
          <div className="plan-columna" key={colIndex}>
            {columna.map((sigla, filaIndex) => {
              const estado = estadoDe(filaIndex, colIndex);
              const { border, color, bg } = COLORES[estado];
              return (
                <div
                  key={sigla}
                  className="plan-materia"
                  style={{ borderColor: border, color, backgroundColor: bg }}
                >
                  {sigla}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlanEstudios;