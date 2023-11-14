"use client";

import { useSearchParams } from "next/navigation";

import {
  PageTitle,
  IconWrapper,
  BranchCard,
  DButton,
  DInputField,
  DTypography,
} from "@/app/utils/imports";

import { FilterIcon } from "@/app/utils/iconImports";

import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTranslations } from "next-intl";
import colorPalette from "@/app/theme/colors";
import useSearchFilter from "@/app/hooks/useSearchFilter";
import {
  GetAllBoothWP,
  GetAllBranchesWP,
} from "@/app/requests/branchesAtmBooths";
import makeApiCall from "@/app/utils/makeApiCall";
import { DPagination } from "@/app/utils/imports";
import Loader from "@/app/[locale]/loading";
import { GetAllDistricts } from "@/app/requests/location";

const BranchesAtmLocations = ({ locale }) => {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const t = useTranslations("Index");

  const [loading, setLoading] = useState(false);

  const [pageNo, setPageNo] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const handleChangePage = (event, newPage) => {
    console.log(newPage);
    setPageNo(newPage);
  };

  // for filter....
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    console.log(event);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const searchByFields = [
    { label: "", field: type === "branches" ? "branchName" : "boothName" },
  ];

  const {
    // sortRender,
    // sortParam,
    // sortType,
    // filterRender,
    // filterField,
    // filterParam,
    searchRender,
    searchParam,
    searchField,
  } = useSearchFilter([], [], searchByFields);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const fetchUrl = type === "branches" ? GetAllBranchesWP : GetAllBoothWP;
    const fetchLocation = GetAllDistricts;
    try {
      setLoading(true);
      const queryParams = {
        pageNo: pageNo,
        pageSize: 20,
        sortBy: "creationDate",
        ascOrDesc: "asc",
        [searchField]: searchParam,
      };
      const response = await makeApiCall(
        fetchUrl,
        "GET",
        locale,
        null,
        {},
        queryParams
      );
      const branchLocationRes = response?.payload?.content;

      const locationData = await makeApiCall(
        fetchLocation,
        "GET",
        locale,
        null,
        {},
        ""
      );
      const locationRes = locationData.payload;
      setTotalPages(response?.payload?.totalPages);
      setData({
        branchLocationData: branchLocationRes,
        locationData: locationRes,
      });
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [pageNo, searchParam]);

  return (
    <>
      <PageTitle
        variant={"title"}
        text={
          type === "branches"
            ? t("branchAtmLocations.branchesLocaiton")
            : t("branchAtmLocations.atmsLocation")
        }
        hasSubtitle={true}
      />
      <PageTitle
        variant={"sub-title"}
        text={t("branchAtmLocations.locationOnMap")}
        hasSubtitle={true}
        utilClasses={"text-center"}
      />

      {loading ? (
        <Loader />
      ) : (
        <>
          <Grid
            container
            sx={{ justifyContent: { sm: "center", md: "flex-end" } }}
          >
            <Grid item xxs={12} sm={"auto"}>
              <Stack direction={"row"} spacing={20}>
                {searchRender}
                <DButton
                  onlyIcon={true}
                  iconOnLeft={<FilterIcon />}
                  style={{
                    border: `1px solid ${colorPalette.palette.border.light}`,
                    borderRadius: "5px",
                  }}
                  id="basic-button"
                  onClick={handleClick}
                  ariaControls={open ? "basic-menu" : undefined}
                  ariaExpanded={open ? "true" : undefined}
                  ariaHasPopUp={true}
                />
                <div>
                  {console.log(data)}
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                  >
                    <DTypography
                      variant={"smallNormal"}
                      text={"Division"}
                      textAccent={"light"}
                      style={{
                        padding: "10px 15px",
                      }}
                    />

                    {data?.locationData?.map((loc, idx) => (
                      <MenuItem
                        // onClick={handleClose}
                        key={idx}
                        sx={{
                          width: "320px",
                          maxWidth: "100%",
                          "&:hover": {
                            background: "#fff",
                          },
                        }}
                      >
                        <Accordion
                          sx={{
                            padding: "0",
                            minWidth: "100%",
                          }}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            sx={{
                              minHeight: "unset",
                              ".MuiAccordionSummary-content": {
                                margin: "0",
                              },
                            }}
                          >
                            <DTypography
                              variant={"mediumBold"}
                              textAccent={"dark"}
                              text={locale === "en" ? loc.name : loc.namebn}
                            />
                          </AccordionSummary>
                          <AccordionDetails>
                            <DTypography
                              variant={"smallBold"}
                              textAccent={"dark"}
                              text={"Hello...1"}
                              style={{
                                padding: "0 10px",
                              }}
                            />
                          </AccordionDetails>
                        </Accordion>
                      </MenuItem>
                    ))}
                  </Menu>
                </div>
              </Stack>
            </Grid>
          </Grid>

          <Grid container spacing={20} mt={20}>
            {data?.branchLocationData?.map((item, idx) => (
              <Grid item sm={12} md={6} key={idx}>
                <BranchCard
                  cardData={{
                    ...item,
                    name:
                      type === "branches" ? item?.branchName : item.boothName,
                  }}
                />
              </Grid>
            ))}
          </Grid>

          <DPagination
            totalPages={totalPages}
            handleChangePage={handleChangePage}
          />
        </>
      )}
    </>
  );
};

export default BranchesAtmLocations;
