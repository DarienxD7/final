import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../components/Layout";

import Principal from "../pages/principal/Principal";
import MiPerfil from "../pages/principal/MiPerfil";
import RegistrarContacto from "../pages/principal/RegistrarContacto";
import ProgramacionLaboratorio from "../pages/principal/ProgramacionLaboratorio";
import VerProgramacion from "../pages/principal/VerProgramacion";
import VerNotas from "../pages/principal/VerNotas";
import PlanEstudios from "../pages/principal/PlanEstudios";
import DescargaMaterial from "../pages/principal/DescargaMaterial";
import CarnetUniversitario from "../pages/principal/CarnetUniversitario";
import ImprimirKardex from "../pages/principal/ImprimirKardex";
import ImprimirKardexPensum from "../pages/principal/ImprimirKardexPensum";

import Becas from "../pages/becas/Becas";
import BecaAlimentacion from "../pages/becas/BecaAlimentacion";
import FormularioBecaAuxiliatura from "../pages/becas/FormularioBecaAuxiliatura";
import FormularioBecaTrabajo from "../pages/becas/FormularioBecaTrabajo";
import FormularioBecaTrabajoExtension from "../pages/becas/FormularioBecaTrabajoExtension";
import FormularioBecaGraduacion from "../pages/becas/FormularioBecaGraduacion";
import CuentaBancaria from "../pages/becas/CuentaBancaria";

import ExtensionLibre from "../pages/extensionLibre/ExtensionLibre";
import Postulacion from "../pages/extensionLibre/Postulacion";

import Matriculas from "../pages/matriculas/Matriculas";
import MatriculaDigital from "../pages/matriculas/MatriculaDigital";
import MisMatriculas from "../pages/matriculas/MisMatriculas";

import Tramites from "../pages/tramites/Tramites";
import SuspensionReadmision from "../pages/tramites/SuspensionReadmision";
import ActaGraduacion from "../pages/tramites/ActaGraduacion";

import Otros from "../pages/otros/Otros";
import TutorialMoodle from "../pages/otros/TutorialMoodle";
import ManualMoodle from "../pages/otros/ManualMoodle";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/principal" replace />} />

        {/* principal */}
        <Route path="principal" element={<Principal />} />
        <Route path="principal/mi-perfil" element={<MiPerfil />} />
        <Route path="principal/registrar-contacto" element={<RegistrarContacto />} />
        <Route path="principal/programacion-laboratorio" element={<ProgramacionLaboratorio />} />
        <Route path="principal/ver-programacion" element={<VerProgramacion />} />
        <Route path="principal/ver-notas" element={<VerNotas />} />
        <Route path="principal/plan-estudios" element={<PlanEstudios />} />
        <Route path="principal/descarga-material" element={<DescargaMaterial />} />
        <Route path="principal/carnet-universitario" element={<CarnetUniversitario />} />
        <Route path="principal/imprimir-kardex" element={<ImprimirKardex />} />
        <Route path="principal/imprimir-kardex-pensum" element={<ImprimirKardexPensum />} />

        {/* becas */}
        <Route path="becas" element={<Becas />} />
        <Route path="becas/alimentacion" element={<BecaAlimentacion />} />
        <Route path="becas/auxiliatura" element={<FormularioBecaAuxiliatura />} />
        <Route path="becas/trabajo" element={<FormularioBecaTrabajo />} />
        <Route path="becas/trabajo-extension" element={<FormularioBecaTrabajoExtension />} />
        <Route path="becas/graduacion" element={<FormularioBecaGraduacion />} />
        <Route path="becas/cuenta-bancaria" element={<CuentaBancaria />} />

        {/*  extension libre */}
        <Route path="extension-libre" element={<ExtensionLibre />} />
        <Route path="extension-libre/postulacion" element={<Postulacion />} />

        {/* matriculas */}
        <Route path="matriculas" element={<Matriculas />} />
        <Route path="matriculas/digital" element={<MatriculaDigital />} />
        <Route path="matriculas/mis-matriculas" element={<MisMatriculas />} />

        {/* tramites */}
        <Route path="tramites" element={<Tramites />} />
        <Route path="tramites/suspension-readmision" element={<SuspensionReadmision />} />
        <Route path="tramites/acta-graduacion" element={<ActaGraduacion />} />

        {/* otros */}
        <Route path="otros" element={<Otros />} />
        <Route path="otros/tutorial-moodle" element={<TutorialMoodle />} />
        <Route path="otros/manual-moodle" element={<ManualMoodle />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;