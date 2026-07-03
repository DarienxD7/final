import escudoUatf from "../../assets/escudouatf.png";

function Principal() {
  return (
    <div className="principal-page">
      <h1>PRINCIPAL</h1>
      <div className="principal-escudo-wrapper">
        <img src={escudoUatf} alt="Escudo UATF" className="principal-escudo" />
      </div>
    </div>
  );
}

export default Principal;