import { Autocomplete, TextField } from "@mui/material";
import React from "react";
import DTypography from "../DTypography/indedx";

const DAutoComplete = ({
  value,
  handleChange,
  handleInputChange,
  options,
  label,
  fullWidth,
  placeholder,
}) => {
  return (
    <>
      <DTypography
        variant={"smallerBold"}
        text={label}
        style={{ marginBottom: "4px" }}
      />

      <Autocomplete
        value={value}
        // onChange={(event, value) => setFieldValue(name, value)}
        onChange={handleChange}
        options={options}
        isOptionEqualToValue={(option, value) => {
          return option.districtId === value.districtId || value === "";
        }}
        getOptionLabel={(option) => option.title || ""}
        renderOption={(props, option) => {
          return (
            <li {...props} key={option.id}>
              {option.title}
            </li>
          );
        }}
        renderInput={(params) => (
          <TextField {...params} placeholder={placeholder} my={2} />
        )}
      />
    </>
  );
};

export default DAutoComplete;
