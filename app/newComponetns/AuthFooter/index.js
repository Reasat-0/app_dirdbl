import Link from "next/link";
import React, { useState } from "react";

import { useRouter } from "next/navigation";
import { usePathname } from "next-intl/client";
import { useLocale, useTranslations } from "next-intl";
import { ChangeEvent, useTransition } from "react";

import { Box, Grid, MenuItem, Select, SvgIcon } from "@mui/material";
import { DTypography } from "@/app/utils/imports";
import colorPalette from "@/app/theme/colors";

import { Global } from "@/app/utils/iconImports";

const AuthFooter = ({ footerData, langParam }) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const pathname = usePathname();

  const languages = [
    {
      value: "en",
      label: "English",
    },
    {
      value: "bn",
      label: "বাংলা",
    },
  ];

  const handleLocale = (e) => {
    startTransition(() => {
      router.replace(`/${e.target.value}${pathname}`);
    });
  };

  return (
    <Grid
      container
      alignItems={"center"}
      justifyContent={"center"}
      columnSpacing={10}
      sx={{
        flexWrap: "wrap",
      }}
    >
      {footerData?.map((menu, idx) => {
        return (
          <Grid
            item
            xxs="auto"
            sx={{
              borderRight: `1px solid ${colorPalette.palette.border.light}`,
              padding: "0 10px",
              marginBottom: "10px",
            }}
            key={idx}
          >
            <Link
              href={`${menu.url}`}
              className="text-secondary-300 position-relative"
            >
              <DTypography
                variant={"smallerBold"}
                textAccent={"darker"}
                text={menu.title}
                style={{ lineHeight: "20px" }}
              />
            </Link>
          </Grid>
        );
      })}

      <Grid
        item
        xxs="auto"
        sx={{
          padding: "0 10px",
          marginBottom: "10px",
        }}
      >
        <Select
          defaultValue={locale}
          sx={{
            border: "none",
            padding: "0!important",
            boxShadow: "none",
            background: "transparent",
            ".MuiOutlinedInput-notchedOutline": { border: 0, padding: 0 },
            ".MuiSelect-select MuiSelect-outlined": {
              padding: "0!important",
            },
            fieldset: { display: "none" },
          }}
          onChange={handleLocale}
          renderValue={(value, label) => {
            return (
              <Box sx={{ display: "flex", gap: 1 }}>
                <SvgIcon color="primary">
                  <Global />
                </SvgIcon>
                <DTypography
                  variant={"smallerBold"}
                  textAccent={"darker"}
                  text={languages.find((lan) => lan.value === value)?.label}
                  style={{ lineHeight: "20px" }}
                />
              </Box>
            );
          }}
        >
          {languages.map((option, idx) => (
            <MenuItem key={idx} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </Grid>
    </Grid>
  );
};

export default AuthFooter;
