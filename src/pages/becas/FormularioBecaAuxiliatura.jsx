import { useState } from "react";
import "../../styles/Becas.css";

function FormularioBecaAuxiliatura() {
  const [asignaturas, setAsignaturas] = useState([]);
  const [mostrarForm, setMostrarForm] = useState(false);
  const [nuevaAsignatura, setNuevaAsignatura] = useState({
    sigla: "",
    nota: "",
    gestion: "",
  });

  function handleAgregar() {
    if (!nuevaAsignatura.sigla || !nuevaAsignatura.nota || !nuevaAsignatura.gestion) return;

    setAsignaturas([...asignaturas, { ...nuevaAsignatura, id: Date.now() }]);
    setNuevaAsignatura({ sigla: "", nota: "", gestion: "" });
    setMostrarForm(false);
  }

  return (
    <div>
      <h1>FORMULARIO DE POSTULACION:</h1>

      <div className="becas-toolbar">
        <span className="becas-toolbar-label">
          LISTA DE ASIGNATURAS{" "}
          <small>(UNA VEZ REGISTRADA LA ASIGNATURA NO PODRA REALIZAR MODIFICACIONES)</small>
        </span>
        <button className="becas-btn-azul" onClick={() => setMostrarForm(true)}>
          Nueva Postulación
        </button>
      </div>

      {mostrarForm && (
        <div className="becas-form-inline">
          <input
            type="text"
            placeholder="Sigla y nombre de la asignatura"
            value={nuevaAsignatura.sigla}
            onChange={(e) => setNuevaAsignatura({ ...nuevaAsignatura, sigla: e.target.value })}
          />
          <input
            type="text"
            placeholder="Nota de aprobación"
            value={nuevaAsignatura.nota}
            onChange={(e) => setNuevaAsignatura({ ...nuevaAsignatura, nota: e.target.value })}
          />
          <input
            type="text"
            placeholder="Gestión en la que aprobó"
            value={nuevaAsignatura.gestion}
            onChange={(e) => setNuevaAsignatura({ ...nuevaAsignatura, gestion: e.target.value })}
          />
          <button className="becas-btn-verde" onClick={handleAgregar}>
            Guardar
          </button>
        </div>
      )}

      <table className="becas-tabla">
        <thead>
          <tr>
            <th>SIGLA Y NOMBRE DE LA ASIGNATURA</th>
            <th>NOTA DE APROBACIÓN</th>
            <th>GESTIÓN EN LA QUE APROBÓ</th>
            <th>OBS</th>
            <th>IMPRIMIR</th>
          </tr>
        </thead>
        <tbody>
          {asignaturas.length === 0 ? (
            <tr>
              <td colSpan={5} className="becas-tabla-vacia">
                SIN REGISTROS
              </td>
            </tr>
          ) : (
            asignaturas.map((a) => (
              <tr key={a.id}>
                <td>{a.sigla}</td>
                <td>{a.nota}</td>
                <td>{a.gestion}</td>
                <td>-</td>
                <td>
                  <button className="becas-btn-link">Imprimir</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default FormularioBecaAuxiliatura;