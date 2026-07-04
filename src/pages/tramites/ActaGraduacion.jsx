import { useState } from "react";
import "../../styles/Tramites.css";

const MODALIDADES = [
  "INTERNADO ROTATORIO",
  "TESIS",
  "PROYECTO DE GRADO",
  "GRADUACIÓN POR EXCELENCIA ACADÉMICA",
  "TRABAJO DIRIGIDO",
  "GRADUACIÓN DIRECTA",
  "PROGRAMA DE TITULACIÓN ESPECIAL PARA UNIVERSITARIOS NO GRADUADOS (P.T.E.U.N.G)",
];

function ActaGraduacion() {
  const [solicitudes, setSolicitudes] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [modalidad, setModalidad] = useState("");

  function handleSolicitar() {
    if (!modalidad) return;

    const nueva = {
      id: Date.now(),
      modalidad,
      estado: "EN REVISIÓN",
      observaciones: "-",
    };
    setSolicitudes([...solicitudes, nueva]);
    setModalidad("");
    setMostrarModal(false);
  }

  return (
    <div>
      <h1>SOLICITUD DE GRADUACIÓN</h1>

      <button className="tramites-btn-azul" onClick={() => setMostrarModal(true)}>
        Nueva Solicitud
      </button>

      <table className="tramites-tabla">
        <thead>
          <tr>
            <th>MODALIDAD</th>
            <th>ESTADO</th>
            <th>ACCIONES</th>
            <th>OBSERVACIONES</th>
          </tr>
        </thead>
        <tbody>
          {solicitudes.length === 0 ? (
            <tr>
              <td colSpan={4} className="tramites-tabla-vacia">
                SIN REGISTROS
              </td>
            </tr>
          ) : (
            solicitudes.map((s) => (
              <tr key={s.id}>
                <td>{s.modalidad}</td>
                <td>{s.estado}</td>
                <td>-</td>
                <td>{s.observaciones}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {mostrarModal && (
        <div className="tramites-modal-overlay" onClick={() => setMostrarModal(false)}>
          <div className="tramites-modal" onClick={(e) => e.stopPropagation()}>
            <div className="tramites-modal-header">
              <h2>NUEVA SOLICITUD</h2>
              <button className="tramites-modal-close" onClick={() => setMostrarModal(false)}>
                ×
              </button>
            </div>
            <div className="tramites-modal-body">
              <label className="tramites-modal-label">SELECCIONE LA MODALIDAD</label>
              <select
                className="tramites-modal-select"
                value={modalidad}
                onChange={(e) => setModalidad(e.target.value)}
              >
                <option value="">Seleccione una modalidad</option>
                {MODALIDADES.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>

              <button className="tramites-modal-submit" onClick={handleSolicitar}>
                SOLICITAR ACTA
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ActaGraduacion;