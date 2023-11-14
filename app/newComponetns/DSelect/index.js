import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

import DTypography from "../DTypography/indedx";

const DSelect = ({
  options,
  withIcon,
  withImage,
  handleChange,
  label,
  placeholder,
  value,
  name,
}) => {
  return (
    <>
      <DTypography
        variant={"smallerBold"}
        text={label}
        style={{ marginBottom: "4px" }}
      />
      <FormControl fullWidth>
        {/* <InputLabel
          disableAnimation
          shrink={false}
          focused={false}
          id="item_type_label"
        >
          Item Type
        </InputLabel> */}

        {!value && (
          <InputLabel
            id="demo-simple-select-label"
            disableAnimation
            shrink={false}
          >
            <DTypography
              variant={"smallNormal"}
              text={placeholder}
              textAccent={"lighter"}
            />
          </InputLabel>
        )}

        <Select value={value} onChange={handleChange} name={name}>
          {options.map((option, idx) => (
            <MenuItem value={option.value} key={idx}>
              {withImage && (
                <img
                  src={option.img}
                  alt={option.name}
                  style={{ width: "20px", height: "20px" }}
                  className="me-2"
                />
              )}
              {option.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default DSelect;
