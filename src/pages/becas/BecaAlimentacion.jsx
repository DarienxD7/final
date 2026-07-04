import "../../styles/Becas.css";

function BecaAlimentacion() {

  const convocatoriaAbierta = false;

  return (
    <div>
      <h1>FORMULARIO DE POSTULACION</h1>

      {convocatoriaAbierta ? (
        <div className="becas-postulacion-form">
          {/* aqui va el formulario cuando la convocatoria este abierta */}
        </div>
      ) : (
        <p className="becas-mensaje">LAS FECHAS YA TERMINARON</p>
      )}
    </div>
  );
}

export default BecaAlimentacion;