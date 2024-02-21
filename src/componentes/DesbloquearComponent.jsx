import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Link } from "react-router-dom";
import { CorreoComponent } from "./CorreoComponent";
import Alert from "@mui/material/Alert";

export const DesbloquearComponent = () => {
  const [open, setOpen] = React.useState(false);
  const [correo, setCorreo] = React.useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const enviarDesbloqueo = () => {
    console.log("ingreso al metodo enviar correo", correo);
    if (correo !== null && correo !== "" && validarCorreo(correo)) {
      handleClose();
      <Alert severity="success">Correo enviado exitosamente</Alert>;
    }
  };

  function validarCorreo(correo) {
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexCorreo.test(correo);
  }

  return (
    <React.Fragment>
      <Link
        component="button"
        className="link-comp"
        variant="body2"
        onClick={handleClickOpen}
      >
        Desbloquear Usuario
      </Link>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Desbloquear Usuario</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Ingrese su correo y se le hará llegar un código provisional.
          </DialogContentText>
          <CorreoComponent valor={correo} evento={setCorreo}></CorreoComponent>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={enviarDesbloqueo}>Enviar</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
