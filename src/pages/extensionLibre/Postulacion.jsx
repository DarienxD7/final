import "../../styles/ExtensionLibre.css";

const CURSOS = [
  { id: 1, nombre: "ESCUELA DE IDIOMAS" },
  { id: 2, nombre: "EXTENSION LIBRE - INGLES" },
  { id: 3, nombre: "EXTENSION LIBRE - QUECHUA" },
];

function Postulacion() {
  function handleImprimir(curso) {

    window.print();
  }

  return (
    <div>
      <h1>POSTULACIÓN EXTENSION LIBRE</h1>

      <div className="postulacion-cursos">
        <div className="postulacion-cursos-header">CURSOS</div>
        {CURSOS.map((curso) => (
          <div className="postulacion-curso-row" key={curso.id}>
            <span className="postulacion-curso-nombre">{curso.nombre}</span>
            <button
              className="postulacion-btn-imprimir"
              onClick={() => handleImprimir(curso)}
            >
              IMPRIMIR POSTULACION
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Postulacion;