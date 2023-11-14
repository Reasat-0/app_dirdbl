import React from "react";
import {
  Box,
  Card,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Stack,
} from "@mui/material";
import Account from "../Icons/Account";

import { DTypography, IconWrapper } from "@/app/utils/imports";

const DRadioBtn = ({
  key,
  label,
  onChange,
  name,
  value,
  checked,
  radioOptions,
  variant,
}) => {
  return (
    <Box>
      <FormControl sx={{ minWidth: "100%" }}>
        {!variant && (
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name={name}
            value={value}
            onChange={onChange}
          >
            {radioOptions.map((opt, idx) => (
              <FormControlLabel
                key={idx}
                value={opt.value}
                control={<Radio />}
                label={opt.label}
              />
            ))}
          </RadioGroup>
        )}

        {variant === "card-radio" && (
          <Grid container justifyContent="center" spacing={30}>
            {radioOptions.map((item, idx) => (
              <Grid item xxs={12} md={6} key={idx}>
                <Card
                  variant="child-card"
                  sx={{
                    // marginBottom: "20px",
                    padding: "24px",
                  }}
                >
                  <Grid container spacing={15} justifyContent={"center"}>
                    <Grid item>
                      <Stack direction={"row"} alignItems={"center"}>
                        <RadioGroup
                          aria-labelledby="demo-controlled-radio-buttons-group"
                          name={name}
                          value={value}
                          onChange={onChange}
                        >
                          <FormControlLabel
                            value={item.value}
                            control={<Radio />}
                            label={item.label}
                          />
                        </RadioGroup>
                        <IconWrapper variant={"primary"}>
                          <Account />
                        </IconWrapper>
                      </Stack>
                    </Grid>
                    <Grid item xs>
                      <DTypography
                        variant={"medium2Bolder"}
                        textAccent={"darker"}
                        text={item.title}
                        style={{
                          marginBottom: "4px",
                          textAlign: { xxs: "center", sm: "left" },
                        }}
                      />
                      <DTypography
                        variant={"smallNormal"}
                        textAccent={"lighter"}
                        text={item.subTitle}
                        style={{
                          textAlign: { xxs: "center", sm: "left" },
                        }}
                        // style={{ marginBottom: "4px" }}
                      />
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </FormControl>
    </Box>
  );
};

export default DRadioBtn;
