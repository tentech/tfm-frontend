import React from "react";
import "../estilos/home.css";
import { FooterHome } from "./FooterHome";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const HomeComponent = () => {
  const navigate = useNavigate();

  const navegarLogin = () => {
    navigate("/");
  };
  return (
    <>
      <div className="cuadrado-home">
        <h1>Bienvenido a la pantalla principal con validación exitosa</h1>
        <Button
          className="boton-comp"
          variant="outlined"
          onClick={navegarLogin}
          size="large"
          color="error"
        >
          Atrás
        </Button>
      </div>
      <FooterHome></FooterHome>
    </>
  );
};
