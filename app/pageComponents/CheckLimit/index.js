"use client";

import colorPalette from "@/app/theme/colors";
import {
  ContentContainer,
  CustomTab,
  DTable,
  DTypography,
  PageTitle,
} from "@/app/utils/imports";
import { Box } from "@mui/material";
import { useTranslations } from "next-intl";
import React from "react";

const CheckLimit = () => {
  const t = useTranslations("Index");

  const columns = [
    {
      field: "agencyName",
      headerName: "",
      flex: 1,
      renderCell: (params) => (
        <Box>
          <Box>
            <DTypography
              text={params.row.cardType}
              variant={"mediumBold"}
              textAccent={"normal"}
            />
          </Box>

          <Box>
            <DTypography
              text={params.row.number}
              variant={"mediumNormal"}
              textAccent={"dark"}
            />
          </Box>
        </Box>
      ),
    },
    {
      field: "email",
      headerName: "Count",
      flex: 1,
      textCenter: true,
      headerStyle: {
        border: `1px solid ${colorPalette.palette.border.light}`,
        borderTop: "none",
      },
      columnStyle: {
        border: `1px solid ${colorPalette.palette.border.light}`,
      },
      renderCell: (params) => (
        <Box>
          <Box>
            <DTypography
              text={params.row.count}
              variant={"mediumBold"}
              textAccent={"gradient"}
            />
          </Box>

          <hr />

          <Box>
            <DTypography
              text={`${params.row.times} ${t("common.times")}`}
              variant={"mediumNormal"}
              textAccent={"dark"}
            />
          </Box>
        </Box>
      ),
    },
    {
      field: "phoneNumber",
      headerName: "Amounttttt",
      textCenter: true,
      flex: 1,
      renderCell: (params) => (
        <Box>
          <Box>
            <DTypography
              text={`${t("common.unit")}${params.row.amount}`}
              variant={"mediumBold"}
              textAccent={"gradient"}
            />
          </Box>

          <hr />

          <Box>
            <DTypography
              text={`${t("common.unit")}${params.row.totalAmount}`}
              variant={"mediumNormal"}
              textAccent={"dark"}
            />
          </Box>
        </Box>
      ),
    },
  ];

  const columns2 = [
    {
      field: "agencyName",
      headerName: "",
      flex: 1,
      renderCell: (params) => (
        <Box>
          <Box>
            <DTypography
              text={params.row.cardType}
              variant={"mediumBold"}
              textAccent={"normal"}
            />
          </Box>

          <Box>
            <DTypography
              text={params.row.number}
              variant={"mediumNormal"}
              textAccent={"dark"}
            />
          </Box>
        </Box>
      ),
    },
    {
      field: "email",
      headerName: "Count",
      flex: 1,
      textCenter: true,
      headerStyle: {
        border: `1px solid ${colorPalette.palette.border.light}`,
        borderTop: "none",
      },
      columnStyle: {
        border: `1px solid ${colorPalette.palette.border.light}`,
      },
      renderCell: (params) => (
        <Box>
          <Box>
            <DTypography
              text={params.row.count}
              variant={"mediumBold"}
              textAccent={"gradient"}
            />
          </Box>

          <hr />

          <Box>
            <DTypography
              text={`${params.row.times} ${t("common.times")}`}
              variant={"mediumNormal"}
              textAccent={"dark"}
            />
          </Box>
        </Box>
      ),
    },
    {
      field: "phoneNumber",
      headerName: "Amount",
      textCenter: true,
      flex: 1,
      renderCell: (params) => (
        <Box>
          <Box>
            <DTypography
              text={`${t("common.unit")}${params.row.amount}`}
              variant={"mediumBold"}
              textAccent={"gradient"}
            />
          </Box>

          <hr />

          <Box>
            <DTypography
              text={`${t("common.unit")}${params.row.totalAmount}`}
              variant={"mediumNormal"}
              textAccent={"dark"}
            />
          </Box>
        </Box>
      ),
    },
  ];

  const rows = [
    {
      id: 1,
      cardType: "Credit Card",
      number: "254354543543",
      count: "2",
      times: "10",
      amount: "1000",
      totalAmount: "20000",
    },
    {
      id: 2,
      cardType: "Credit Card",
      number: "254354543543",
      count: "2",
      times: "10",
      amount: "1000",
      totalAmount: "20000",
    },
    {
      id: 3,
      cardType: "Credit Card",
      number: "254354543543",
      count: "2",
      times: "10",
      amount: "1000",
      totalAmount: "20000",
    },
  ];

  const tabData = [
    {
      id: 1,
      tabTitle: "Daily Limit",
      tabContent: (
        <DTable
          columns={columns}
          rows={rows}
          pagination={false}
          // pageNo={pageNo}
          // pageSize={pageSize}
          // loading={loading}
          // onPageChange={handleChangePage}
          // onRowsChange={handleChangeRowsPerPage}
          // count={count}
          notFoundMessage="Agency Not Found"
        />
      ),
    },

    {
      id: 2,
      tabTitle: "Air Aliance",
      tabContent: (
        <DTable
          columns={columns2}
          rows={rows}
          pagination={false}
          // pageNo={pageNo}
          // pageSize={pageSize}
          // loading={loading}
          // onPageChange={handleChangePage}
          // onRowsChange={handleChangeRowsPerPage}
          // count={count}
          notFoundMessage="Agency Not Found"
        />
      ),
    },
  ];

  return (
    <ContentContainer width="600px">
      <PageTitle
        variant={"title"}
        text={t("checkLimit.pageTitle")}
        hasSubtitle={false}
      />

      <CustomTab data={tabData} />
      {/* <DTable
        columns={columns}
        rows={rows}
        pagination={false}
        // pageNo={pageNo}
        // pageSize={pageSize}
        // loading={loading}
        // onPageChange={handleChangePage}
        // onRowsChange={handleChangeRowsPerPage}
        // count={count}
        notFoundMessage="Agency Not Found"
      /> */}
    </ContentContainer>
  );
};

export default CheckLimit;
