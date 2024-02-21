import React from "react";
import { useState, useRef } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";
import { Box, Grid, Button } from "@mui/material";
import { InformacionComponent } from "./InformacionComponent";
import "../estilos/boton.css";
import "../estilos/home.css";
import { FooterHome } from "./FooterHome";

export const SubirCertComponent = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();
  const [isDisabledIng, setDisabledIng] = useState(true);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = () => {
    // Aquí puedes enviar el archivo al servidor o realizar cualquier otra acción necesaria.
    if (selectedFile) {
      // Por ejemplo, puedes usar la función `fetch` para enviar el archivo al servidor.
      // Reemplaza la URL y la configuración según tus necesidades.
      fetch("tu_url_de_subida", {
        method: "POST",
        body: selectedFile,
      })
        .then((response) => {
          // Maneja la respuesta del servidor aquí
          //setDisabledIng(!isDisabledIng);
        })
        .catch((error) => {
          // Maneja errores aquí
        });
      setDisabledIng(!isDisabledIng);
    }
  };

  const metodoValidar = (e) => {
    navigate("/home");
  };

  return (
    <>
      <form className="cuadrado-home" onSubmit={metodoValidar}>
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
              <input
                type="file"
                onChange={handleFileChange}
                style={{ display: "none" }}
                ref={fileInputRef}
              />
              <Button
                component="label"
                variant="contained"
                className="boton-comp"
                startIcon={<CloudUploadIcon />}
                onClick={() => fileInputRef.current.click()}
              >
                Seleccionar Archivo
              </Button>
              {selectedFile && (
                <div>
                  <p>Archivo seleccionado: {selectedFile.name}</p>
                </div>
              )}
            </Grid>
            <Grid item xs={8}>
              <Button
                variant="contained"
                className="boton-comp"
                endIcon={<SendIcon />}
                onClick={handleUpload}
              >
                Enviar Archivo
              </Button>
            </Grid>
            <Grid item xs={8}>
              <InformacionComponent></InformacionComponent>
            </Grid>
            <Grid item xs={8}>
              <Button
                variant="contained"
                type="submit"
                className="boton-comp"
                disabled={isDisabledIng}
              >
                Validar Ingreso
              </Button>
            </Grid>
          </Grid>
        </Box>
      </form>
      <FooterHome></FooterHome>
    </>
  );
};
