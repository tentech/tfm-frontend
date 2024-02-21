import React, { useState } from "react";
import { validateCredencial } from "../servicios/ServicioRest.js";
import { useNavigate, Link } from "react-router-dom";
import { Button, TextField, Grid, Box } from "@mui/material";
import { PasswordComponent } from "./PasswordComponent.jsx";
import { DesbloquearComponent } from "./DesbloquearComponent.jsx";
import "../estilos/input-txt.css";
import "../estilos/login.css";

export const LoginComponent = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const metodoIngresar = (e) => {
    e.preventDefault(user, pass);
    console.log("ingresa al metodo: ", user + " ", pass);

    validateCredencial()
      .then((jsonData) => {
        if (jsonData.resp) {
          console.log("valido correctamente");
          navigate("/certificado");
        }
      })
      .catch((error) => console.error("Error al obtener los datos:", error));
  };

  return (
    <form onSubmit={metodoIngresar}>      
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
              label="Usuario"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </Grid>
          <Grid item xs={8}>
            <PasswordComponent
              valor={pass}
              evento={setPass}
            ></PasswordComponent>
          </Grid>
          <Grid item xs={8}>
            <Button
              className="boton-comp"
              variant="contained"
              type="submit"
              size="large"
            >
              Ingresar
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          direction={"row"}
          alignContent={"center"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <DesbloquearComponent></DesbloquearComponent>

          <Link className="link-comp" to={`/nuevo`}>
            Crear Nuevo Usuario
          </Link>
        </Grid>
      </Box>
    </form>
  );
};
