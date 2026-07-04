import { useState } from "react";
import "../../styles/Becas.css";

function FormularioBecaTrabajo() {
  const hayConvocatoria = true;
  const [postulaciones, setPostulaciones] = useState([]);

  function handleNuevaPostulacion() {
    const nueva = {
      id: Date.now(),
      nro: postulaciones.length + 1,
      gestion: new Date().getFullYear(),
      periodo: "I/2026",
      obs: "-",
      estado: "EN REVISIÓN",
    };
    setPostulaciones([...postulaciones, nueva]);
  }

  return (
    <div>
      <h1>FORMULARIO DE POSTULACION:</h1>

      {!hayConvocatoria ? (
        <p className="becas-mensaje">NO HAY CONVOCATORIA PARA ESTA GESTION Y PERIODO</p>
      ) : (
        <>
          <div className="becas-toolbar">
            <span className="becas-toolbar-label">LISTA DE POSTULACIONES</span>
            <button className="becas-btn-azul" onClick={handleNuevaPostulacion}>
              Nueva Postulación
            </button>
          </div>

          <table className="becas-tabla">
            <thead>
              <tr>
                <th>NRO</th>
                <th>GESTION</th>
                <th>PERIODO</th>
                <th>OBS</th>
                <th>ESTADO</th>
                <th>IMPRIMIR</th>
              </tr>
            </thead>
            <tbody>
              {postulaciones.length === 0 ? (
                <tr>
                  <td colSpan={6} className="becas-tabla-vacia">
                    SIN REGISTROS
                  </td>
                </tr>
              ) : (
                postulaciones.map((p) => (
                  <tr key={p.id}>
                    <td>{p.nro}</td>
                    <td>{p.gestion}</td>
                    <td>{p.periodo}</td>
                    <td>{p.obs}</td>
                    <td>{p.estado}</td>
                    <td>
                      <button className="becas-btn-link">Imprimir</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default FormularioBecaTrabajo;