import React, { useState } from "react";
import {
  IconButton,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  FormControl,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export const PasswordComponent = (props) => {
  const [showPass, setShowPass] = useState("");
  const handleClickShowPassword = () => setShowPass((show) => !show);
  return (
    <FormControl variant="outlined">
      <InputLabel>Contraseña</InputLabel>
      <OutlinedInput
        required
        className="input-comp"
        type={showPass ? "text" : "password"}
        value={props.valor}
        onChange={(e) => props.evento(e.target.value)}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {showPass ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label="Contraseña"
      />
    </FormControl>
  );
};
