import "../../styles/Matriculas.css";

function MatriculaDigital() {

  const matriculaGenerada = true;

  function handleImprimir() {
    window.print();
  }

  return (
    <div>
      <h1>MATRICULA</h1>

      {matriculaGenerada ? (
        <div className="matricula-mensaje">
          <p>MATRICULA GENERADA</p>
          <button className="matricula-btn-imprimir" onClick={handleImprimir}>
            IMPRIMIR MATRICULA
          </button>
        </div>
      ) : (
        <p className="matricula-mensaje-error">LO SENTIMOS EL SISTEMA NO ESTA ACTIVO</p>
      )}
    </div>
  );
}

export default MatriculaDigital;