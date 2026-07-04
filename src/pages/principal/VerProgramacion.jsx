import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import "../../styles/Principal.css";

const PERIODOS = [
  "PROGRAMACION 2026/1",
  "PROGRAMACION 2025/5 (MESA DE EXAMEN)",
  "PROGRAMACION 2025/2",
  "PROGRAMACION 2025/1",
  "PROGRAMACION 2024/3 (CURSO DE VERANO)",
  "PROGRAMACION 2024/2",
  "PROGRAMACION 2024/1",
];

const MATERIAS = [
  { id: 1, tipo: "NORMAL", sigla: "MAT203", materia: "CALCULO II", grupo: 2, p1: 42, p2: 50, p3: 38, promP: 20, promPr: 18, promL: 10, exFinal: 55, promEx: 22, notaFinal: 60, turno2: 0 },
  { id: 2, tipo: "PARALELA", sigla: "SIS416", materia: "INGENIERIA DE SOFTWARE I", grupo: 1, p1: 55, p2: 48, p3: 52, promP: 26, promPr: 15, promL: 0, exFinal: 62, promEx: 25, notaFinal: 63, turno2: 0 },
  { id: 3, tipo: "NORMAL", sigla: "SIS420", materia: "SISTEMAS OPERATIVOS", grupo: 1, p1: 40, p2: 44, p3: 50, promP: 18, promPr: 12, promL: 16, exFinal: 50, promEx: 20, notaFinal: 58, turno2: 0 },
  { id: 4, tipo: "NORMAL", sigla: "SIS421", materia: "REDES DE COMPUTADORAS", grupo: 1, p1: 48, p2: 40, p3: 45, promP: 21, promPr: 14, promL: 12, exFinal: 52, promEx: 21, notaFinal: 61, turno2: 0 },
  { id: 5, tipo: "NORMAL", sigla: "SIS443", materia: "INTELIGENCIA ARTIFICIAL", grupo: 1, p1: 50, p2: 52, p3: 40, promP: 23, promPr: 16, promL: 0, exFinal: 60, promEx: 24, notaFinal: 62, turno2: 0 },
];

function VerProgramacion() {
  const [periodoSeleccionado, setPeriodoSeleccionado] = useState(null);

  function handleImprimir() {
    window.print();
  }

  function handleActivarMoodle() {

    alert("Solicitud de activación en Moodle enviada");
  }

  if (!periodoSeleccionado) {
    return (
      <div>
        <h1>SELECCIONE EL GESTION Y PERIODO</h1>
        <div className="periodo-lista">
          {PERIODOS.map((p) => (
            <button key={p} className="periodo-item" onClick={() => setPeriodoSeleccionado(p)}>
              <ArrowUpRight size={16} />
              {p}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1>MI PROGRAMACION DE MATERIAS</h1>

      <button className="volver-link" onClick={() => setPeriodoSeleccionado(null)}>
        ← VOLVER A SELECCIONAR PERIODO
      </button>

      <div className="notas-tabla-wrap">
        <table className="principal-tabla">
          <thead>
            <tr>
              <th>#</th>
              <th>TIPO PROGRA.</th>
              <th>SIGLA</th>
              <th>MATERIA</th>
              <th>GRUPO</th>
              <th>1ER PARCIAL</th>
              <th>2DO PARCIAL</th>
              <th>3ER PARCIAL</th>
              <th>PROM. PARCIALES</th>
              <th>PROM. PRACTICAS</th>
              <th>PROM. LABORATORIO</th>
              <th>EX FINAL</th>
              <th>PROM. EX FINAL</th>
              <th>NOTA FINAL</th>
              <th>2DO TURNO</th>
            </tr>
          </thead>
          <tbody>
            {MATERIAS.map((m, i) => (
              <tr key={m.id}>
                <td>{i + 1}</td>
                <td>{m.tipo}</td>
                <td>{m.sigla}</td>
                <td>{m.materia}</td>
                <td>{m.grupo}</td>
                <td>{m.p1}</td>
                <td>{m.p2}</td>
                <td>{m.p3}</td>
                <td>{m.promP}</td>
                <td>{m.promPr}</td>
                <td>{m.promL}</td>
                <td>{m.exFinal}</td>
                <td>{m.promEx}</td>
                <td className="notas-final">{m.notaFinal}</td>
                <td>{m.turno2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="notas-acciones">
        <button className="btn-imprimir-prog" onClick={handleImprimir}>
          IMPRIMIR PROGRAMACION
        </button>
        <button className="btn-moodle" onClick={handleActivarMoodle}>
          ACTIVAR MIS MATERIAS EN MOODLE {periodoSeleccionado.match(/\d{4}\/\d/)?.[0]}
        </button>
      </div>
    </div>
  );
}

export default VerProgramacion;