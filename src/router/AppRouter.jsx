import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { SubirCertComponent } from "../componentes/SubirCertComponent";
import { HomeComponent } from "../componentes/HomeComponente";
import { NuevoUsuarioComponent } from "../componentes/NuevoUsuarioComponent";
import { HeaderComponent } from "../componentes/HeaderComponent";


export const AppRouter = (props) => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
            <Route path="/" element={<HeaderComponent></HeaderComponent>}></Route>
            <Route path="/certificado" element={<SubirCertComponent></SubirCertComponent>}></Route>
            <Route path="/home" element={<HomeComponent></HomeComponent>}></Route>
            <Route path="/nuevo" element={<NuevoUsuarioComponent></NuevoUsuarioComponent>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};
