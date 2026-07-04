import { useState } from "react";
import "../../styles/Becas.css";

const TIPOS_BECA = [
  "BECA ALIMENTACION",
  "BECA GRADUACION",
  "BECA TRABAJO",
  "BECA AUXILIATURA DE DOCENCIA",
  "BECA INVESTIGACION",
  "BECA AUXILIATURA DE SERVICIO",
];

function CuentaBancaria() {
  const [tipoBeca, setTipoBeca] = useState(TIPOS_BECA[0]);
  const [nroCuenta, setNroCuenta] = useState("");

  function handleGuardar() {
    if (!nroCuenta.trim()) return;
    alert("Cuenta bancaria registrada correctamente");
  }

  function handleImprimir() {
    window.print();
  }

  return (
    <div>
      <h1>REGISTRA TU NUMERO DE CUENTA BANCARIA -1</h1>

      <div className="becas-cuenta-form">
        <label className="becas-label">TIPO DE BECA</label>
        <select
          className="becas-select"
          value={tipoBeca}
          onChange={(e) => setTipoBeca(e.target.value)}
        >
          {TIPOS_BECA.map((tipo) => (
            <option key={tipo} value={tipo}>
              {tipo}
            </option>
          ))}
        </select>

        <label className="becas-label">NRO. DE CUENTA BANCO NACIONAL DE BOLIVIA (BNB)</label>
        <input
          type="text"
          className="becas-input"
          value={nroCuenta}
          onChange={(e) => setNroCuenta(e.target.value)}
        />

        <div className="becas-cuenta-botones">
          <button className="becas-btn-verde" onClick={handleGuardar}>
            GUARDAR
          </button>
          <button className="becas-btn-azul" onClick={handleImprimir}>
            IMPRIMIR
          </button>
        </div>

        <p className="becas-nota">
          UNA VEZ REGISTRADO E IMPRESO DEBE PRESENTARLO EN SU DIRECCIÓN DE CARRERA DE MANERA FÍSICA
        </p>
      </div>
    </div>
  );
}

export default CuentaBancaria;