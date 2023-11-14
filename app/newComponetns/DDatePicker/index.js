import React from "react";
import dayjs from "dayjs";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import DTypography from "../DTypography/indedx";
import { Box } from "@mui/material";
const DDatePicker = ({
  value,
  label,
  placeholder,
  handleChange,
  name,
  onBlur,
  style,
}) => {
  return (
    <Box
      sx={{
        ...style,
      }}
    >
      <DTypography
        variant={"smallerBold"}
        text={label}
        style={{ marginBottom: "4px" }}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          {/* <DemoItem label="Desktop variant"> */}
          <DesktopDatePicker
            slotProps={{ textField: { fullWidth: true } }}
            placeholder={placeholder}
            onChange={handleChange}
            name={name}
            format="DD-MM-YYYY"
            value={value}
            //   defaultValue={dayjs("2022-04-17")}
          />
          {/* </DemoItem> */}
        </DemoContainer>
      </LocalizationProvider>
    </Box>
  );
};

export default DDatePicker;
