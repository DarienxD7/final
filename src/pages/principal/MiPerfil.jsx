import { useState } from "react";
import { User } from "lucide-react";
import "../../styles/Principal.css";

const ESTUDIANTE = {
  nombres: "MARIA ELENA",
  paterno: "QUISPE",
  materno: "MAMANI",
  ci: "9876543",
  ru: "204567",
  direccion: "CALLE BOLIVAR NRO 145",
  zona: "VILLA COPACABANA",
  email: "MARIA.QUISPE@EXAMPLE.COM",
  tipoSangre: "A RH(+)",
  fechaNac: "15/03/2001",
  telfPersonal: "70012345",
  telfWhatsapp: "70012345",
};

const ACADEMICA = {
  gestionIngreso: "1/2019",
  modalidadIngreso: "EXAMEN DE INGRESO",
  semestreActual: "8VO SEMESTRE",
  situacion: "REGULAR",
};

const LOCALIDAD = {
  departamento: "POTOSI",
  provincia: "TOMAS FRIAS",
  municipio: "POTOSI",
  localidad: "POTOSI",
};

function MiPerfil() {
  const [tab, setTab] = useState("estudiante");

  return (
    <div>
      <h1>CARRERA: INGENIERIA DE SISTEMAS</h1>

      <div className="perfil-container">
        <div className="perfil-foto-wrapper">
          <div className="perfil-foto">
            <User size={72} />
          </div>
          <span className="perfil-ru">R.U. : {ESTUDIANTE.ru}</span>
        </div>

        <div className="perfil-info">
          <div className="perfil-info-header">INFORMACION</div>

          <div className="perfil-tabs">
            <button
              className={`perfil-tab ${tab === "estudiante" ? "active" : ""}`}
              onClick={() => setTab("estudiante")}
            >
              INFORMACION ESTUDIANTE
            </button>
            <button
              className={`perfil-tab ${tab === "academica" ? "active" : ""}`}
              onClick={() => setTab("academica")}
            >
              INFORMACION ACADEMICA
            </button>
            <button
              className={`perfil-tab ${tab === "localidad" ? "active" : ""}`}
              onClick={() => setTab("localidad")}
            >
              INFORMACION LOCALIDAD
            </button>
          </div>

          {tab === "estudiante" && (
            <div className="perfil-grid">
              <div className="perfil-field">
                <label>NOMBRES:</label>
                <span>{ESTUDIANTE.nombres}</span>
              </div>
              <div className="perfil-field">
                <label>C.I:</label>
                <span>{ESTUDIANTE.ci}</span>
              </div>
              <div className="perfil-field">
                <label>DIRECCION:</label>
                <span>{ESTUDIANTE.direccion}</span>
              </div>
              <div className="perfil-field">
                <label>EMAIL:</label>
                <span>{ESTUDIANTE.email}</span>
              </div>
              <div className="perfil-field">
                <label>PATERNO:</label>
                <span>{ESTUDIANTE.paterno}</span>
              </div>
              <div className="perfil-field">
                <label>R.U.:</label>
                <span>{ESTUDIANTE.ru}</span>
              </div>
              <div className="perfil-field">
                <label>ZONA:</label>
                <span>{ESTUDIANTE.zona}</span>
              </div>
              <div className="perfil-field">
                <label>TIPO SANGUINEO:</label>
                <span>{ESTUDIANTE.tipoSangre}</span>
              </div>
              <div className="perfil-field">
                <label>MATERNO:</label>
                <span>{ESTUDIANTE.materno}</span>
              </div>
              <div className="perfil-field">
                <label>FECHA NAC.:</label>
                <span>{ESTUDIANTE.fechaNac}</span>
              </div>
              <div className="perfil-field">
                <label>TELF. PERSONAL:</label>
                <span>{ESTUDIANTE.telfPersonal}</span>
              </div>
              <div className="perfil-field">
                <label>TEL. WHATSAPP</label>
                <span>{ESTUDIANTE.telfWhatsapp}</span>
              </div>
            </div>
          )}

          {tab === "academica" && (
            <div className="perfil-grid">
              <div className="perfil-field">
                <label>GESTION DE INGRESO:</label>
                <span>{ACADEMICA.gestionIngreso}</span>
              </div>
              <div className="perfil-field">
                <label>MODALIDAD DE INGRESO:</label>
                <span>{ACADEMICA.modalidadIngreso}</span>
              </div>
              <div className="perfil-field">
                <label>SEMESTRE ACTUAL:</label>
                <span>{ACADEMICA.semestreActual}</span>
              </div>
              <div className="perfil-field">
                <label>SITUACION:</label>
                <span>{ACADEMICA.situacion}</span>
              </div>
            </div>
          )}

          {tab === "localidad" && (
            <div className="perfil-grid">
              <div className="perfil-field">
                <label>DEPARTAMENTO:</label>
                <span>{LOCALIDAD.departamento}</span>
              </div>
              <div className="perfil-field">
                <label>PROVINCIA:</label>
                <span>{LOCALIDAD.provincia}</span>
              </div>
              <div className="perfil-field">
                <label>MUNICIPIO:</label>
                <span>{LOCALIDAD.municipio}</span>
              </div>
              <div className="perfil-field">
                <label>LOCALIDAD:</label>
                <span>{LOCALIDAD.localidad}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MiPerfil;