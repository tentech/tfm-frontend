import React, { useState } from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import "../estilos/input-txt.css";
import { PasswordComponent } from "./PasswordComponent";
import { CorreoComponent } from "./CorreoComponent";
import { useNavigate } from "react-router-dom";
import "../estilos/boton.css";
import Alert from "@mui/material/Alert";
import "../estilos/home.css"
import { FooterHome } from "./FooterHome";

export const NuevoUsuarioComponent = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  function validarCorreo(correo) {
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexCorreo.test(correo);
  }

  const agregarNuevoUsuario = (e) => {
    e.preventDefault(nombre, apellido, correo, pass);
    console.log(
      "ingresa al metodo: ",
      nombre + " ",
      apellido + " ",
      correo + " ",
      pass
    );
    if (correo !== null && correo !== "" && validarCorreo(correo)) {
      navigate("/");
      <Alert severity="success">Usuario registrado exitosamente</Alert>;
    }
  };

  const navegarLogin = () => {
    navigate("/");
  };

  return (
    <>
    <form className="cuadrado-home" onSubmit={agregarNuevoUsuario}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          direction={"column"}
          alignContent={"center"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Grid item xs={8}>
            <TextField
              className="input-comp"
              required
              helperText="Ingrese el nombre"
              label="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              className="input-comp"
              required
              helperText="Ingrese el apellido"
              label="Apellido"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />
          </Grid>
          <Grid item xs={8}>
            <PasswordComponent
              valor={pass}
              evento={setPass}
            ></PasswordComponent>
          </Grid>
          <Grid item xs={8}>
            <CorreoComponent
              valor={correo}
              evento={setCorreo}
            ></CorreoComponent>
          </Grid>
          <Grid item xs={8}>
            <Button
              className="boton-comp"
              variant="outlined"
              onClick={navegarLogin}
              size="large"
              color="error"
            >
              Atrás
            </Button>
            <Button
              className="boton-comp"
              variant="contained"
              type="submit"
              size="large"
            >
              Guardar
            </Button>
          </Grid>
        </Grid>
      </Box>
    </form>
    <FooterHome></FooterHome>
    </>
  );
};
