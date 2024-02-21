import React from "react";
import { LoginComponent } from "./Login";

export const HeaderComponent = () => {
  return (
    <>
      <section className="dir">
        <li className="cuadrado">
          <LoginComponent></LoginComponent>
        </li>
        <li className="tit">MÉTODO ALTERNATIVO DE INGRESO SEGURO WEB</li>
        <li className="tit">UTILIZANDO LA FIRMA ELECTRÓNICA ECUATORIANA</li>
        <li className="tit">COMO UN FACTOR DE AUTENTICACIÓN</li>
        <li className="tit-img"></li>
      </section>
      <section className="nombres">
        <ul>
          <li className="siglas">I.S.F.E</li>
          <li className="nombress">Bryan Steven Erazo Carvajal.</li>
          <li className="nombress">Carlos Armando Quishpe Cantuña.</li>
          <li className="nombress">Cristhian Oswaldo Gálvez Arévalo.</li>
        </ul>
      </section>
    </>
  );
};
