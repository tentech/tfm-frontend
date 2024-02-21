import React from "react";
import { Box, Grid, TextField } from "@mui/material";

export const InformacionComponent = () => {
  return (
    <Box
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
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
            disabled
            label="Nombre"
            //defaultValue="Nombre"
            defaultValue="Bryan Steven"
            variant="filled"
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            disabled
            label="Apellido"
            //defaultValue="Apellido"
            defaultValue="Erazo Carvajal"
            variant="filled"
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            disabled
            label="Correo"
            //defaultValue="Correo"
            defaultValue="bryan_erazo@gmail.com"
            variant="filled"
          />
        </Grid>
      </Grid>
    </Box>
  );
};
