import {
  Box,
  FormHelperText,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import React from "react";
import DTypography from "../DTypography/indedx";
import { SearchIcon } from "@/app/utils/iconImports";

import { MuiOtpInput } from "mui-one-time-password-input";

const DInputField = ({
  type,
  value,
  name,
  placeholder,
  label,
  handleChange,
  style,
  useAsOtp,
  icon,
  iconPosition,
  handleIconClick,
  multiline,
  rows
}) => {
  return (
    <>
      {useAsOtp ? (
        <Box>
          <MuiOtpInput value={value} onChange={handleChange} />
        </Box>
      ) : (
        <>
          <DTypography
            variant={"smallerBold"}
            text={label}
            style={{ marginBottom: "4px" }}
          />
          <TextField
            type={type}
            placeholder={placeholder}
            fullWidth
            value={value}
            name={name}
            onChange={handleChange}
            sx={{
              ...style,
              
            }}
            multiline={multiline}
            rows={rows}
            InputProps={{
              endAdornment: icon && (
                <InputAdornment position={iconPosition || "end"}>
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleIconClick}
                    // onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {icon}
                  </IconButton>
                  {/* <SearchIcon /> */}
                </InputAdornment>
              ),
            }}
          />
        </>
      )}
    </>
  );
};

export default DInputField;
