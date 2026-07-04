import { useState } from "react";
import "../../styles/Principal.css";

function RegistrarContacto() {
  const [whatsapp, setWhatsapp] = useState("70099887");
  const [email, setEmail] = useState("CARLOS.MENDOZA@EXAMPLE.COM");

  function handleActualizar() {
    if (!whatsapp.trim() || !email.trim()) return;

    alert("Datos de contacto actualizados correctamente");
  }

  return (
    <div>
      <h1>REGISTRA TU NUMERO DE WHATSAPP Y EMAIL</h1>

      <div className="contacto-form">
        <label className="contacto-label">NUMERO_WHATSAPP</label>
        <input
          type="text"
          className="contacto-input"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
        />

        <label className="contacto-label">EMAIL</label>
        <input
          type="email"
          className="contacto-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button className="contacto-btn" onClick={handleActualizar}>
          ACTUALIZAR
        </button>
      </div>
    </div>
  );
}

export default RegistrarContacto;