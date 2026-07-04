import { useState } from "react";
import "../../styles/Principal.css";

function CarnetUniversitario() {
  const [datos, setDatos] = useState({
    zona: "BARRIO SAN PEDRO",
    direccion: "CALLE JUNIN NRO 456",
    telfFijo: "6123456",
    telfPersonal: "70099887",
    telfReferencia: "70011223",
    email: "CARLOS.MENDOZA@EXAMPLE.COM",
  });
  const tipoSangre = "B RH(-)";
  const [archivo, setArchivo] = useState(null);

  function handleChange(campo, valor) {
    setDatos({ ...datos, [campo]: valor });
  }

  function handleImprimir() {
    window.print();
  }

  function handleGuardar() {

    alert("Datos del carnet guardados correctamente");
  }

  return (
    <div>
      <h1>FOTO PARA EL CARNET UNIVERSITARIO</h1>

      <div className="carnet-container">
        <div>
          <div className="carnet-foto-box">
            {archivo ? archivo.name : "FOTO PARA SU CARNET"}
          </div>
          <p className="carnet-foto-info">
            LA FOTOGRAFIA DEBE SER CON FONDO CELESTE.
            <br />
            EL FORMATO DEBE SER JPG Y EL TAMAÑO ACEPTABLE
          </p>
          <input
            type="file"
            accept="image/jpeg"
            className="carnet-file-input"
            onChange={(e) => setArchivo(e.target.files[0])}
          />
        </div>

        <div className="carnet-form">
          <div className="carnet-field">
            <label>ZONA:</label>
            <input
              type="text"
              value={datos.zona}
              onChange={(e) => handleChange("zona", e.target.value)}
            />
          </div>
          <div className="carnet-field">
            <label>DIRECCION:</label>
            <input
              type="text"
              value={datos.direccion}
              onChange={(e) => handleChange("direccion", e.target.value)}
            />
          </div>
          <div className="carnet-field">
            <label>TELEFONO (FIJO):</label>
            <input
              type="text"
              value={datos.telfFijo}
              onChange={(e) => handleChange("telfFijo", e.target.value)}
            />
          </div>
          <div className="carnet-field">
            <label>TELEFONO PERSONAL:</label>
            <input
              type="text"
              value={datos.telfPersonal}
              onChange={(e) => handleChange("telfPersonal", e.target.value)}
            />
          </div>
          <div className="carnet-field">
            <label>TELEFONO REFERENCIA O URGENCIA:</label>
            <input
              type="text"
              value={datos.telfReferencia}
              onChange={(e) => handleChange("telfReferencia", e.target.value)}
            />
          </div>
          <div className="carnet-field">
            <label>CORREO ELECTRONICO:</label>
            <input
              type="email"
              value={datos.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </div>
          <div className="carnet-field">
            <label>TIPO DE SANGRE:</label>
            <input type="text" value={tipoSangre} disabled />
          </div>

          <div className="carnet-botones">
            <button className="carnet-btn-azul" onClick={handleImprimir}>
              IMPRIMIR DATOS ACTUALIZADOS
            </button>
            <button className="carnet-btn-rojo" onClick={handleGuardar}>
              Guardar Datos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarnetUniversitario;