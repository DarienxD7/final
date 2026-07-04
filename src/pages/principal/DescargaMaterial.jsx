import "../../styles/Principal.css";

function DescargaMaterial() {
  const materiales = [];

  return (
    <div>
      <h1>DESCARGAR MATERIAL</h1>

      <table className="principal-tabla">
        <thead>
          <tr>
            <th>SIGLA</th>
            <th>MATERIA</th>
            <th>GRUPO</th>
            <th>ARCHIVO</th>
            <th>FECHA DE REGISTRO</th>
            <th>DESCARGAR</th>
          </tr>
        </thead>
        <tbody>
          {materiales.length === 0 ? (
            <tr>
              <td colSpan={6} className="principal-tabla-vacia">
                NO EXISTE MATERIAL
              </td>
            </tr>
          ) : (
            materiales.map((m) => (
              <tr key={m.id}>
                <td>{m.sigla}</td>
                <td>{m.materia}</td>
                <td>{m.grupo}</td>
                <td>{m.archivo}</td>
                <td>{m.fecha}</td>
                <td>
                  <button className="becas-btn-link">Descargar</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DescargaMaterial;