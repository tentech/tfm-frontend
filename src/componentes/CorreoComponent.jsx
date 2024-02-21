import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField } from "@mui/material";
import "../estilos/input-txt.css";

export const CorreoComponent = (props) => {
  const { valor, evento } = props;

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Ingrese un correo electrónico válido")
      .required("El correo electrónico es obligatorio"),
  });

  const formik = useFormik({
    initialValues: {
      email: valor || "", // Inicializar el valor del formulario con el valor proporcionado
    },
    validationSchema: validationSchema,
    onSubmit: () => {
      // Aquí puedes realizar acciones con el valor del correo electrónico
      console.log("Correo electrónico enviado:", formik.values.email);
    },
  });

  return (
    <TextField
      required
      name="email"
      label="Correo Electrónico"
      variant="outlined"      
      className="input-comp"
      margin="normal"
      error={formik.touched.email && Boolean(formik.errors.email)}
      helperText={formik.touched.email && formik.errors.email}
      onChange={(e) => {
        formik.handleChange(e);
        evento(e.target.value); // Actualizar el valor de correo en el componente padre
      }}
      onBlur={formik.handleBlur}
      value={formik.values.email}
    />
  );
};
