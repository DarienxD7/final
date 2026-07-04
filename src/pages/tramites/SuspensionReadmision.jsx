import "../../styles/Tramites.css";

function SuspensionReadmision() {
  const sistemaActivo = false;

  return (
    <div>
      <h1>SUSPENSION/READMISION</h1>

      {sistemaActivo ? (
        <div>{/* formulario de suspensión/readmisión, cuando el sistema este activo */}</div>
      ) : (
        <p className="tramites-mensaje-error">LO SENTIMOS EL SISTEMA NO ESTA ACTIVO</p>
      )}
    </div>
  );
}

export default SuspensionReadmision;