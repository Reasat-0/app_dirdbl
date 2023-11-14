"use client";

import { Grid, Pagination } from "@mui/material";
import React from "react";

const DPagination = ({ totalPages, handleChangePage }) => {
  return (
    <Grid
      container
      sx={{
        justifyContent: {
          xxs: "center",
          cmd: "flex-end",
        },
      }}
    >
      <Grid item xxs={12} md={6} lg={4}>
        <Pagination
          sx={{
            ul: {
              justifyContent: "flex-end",
            },
          }}
          count={totalPages}
          onChange={handleChangePage}
        />
      </Grid>
    </Grid>
  );
};

export default DPagination;
