import React from "react";
import {
  Card,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
  Box,
} from "@mui/material";
import DTypography from "../DTypography/indedx";
// import NotFound from "../ui/NotFound";
// import Loader from "../ui/Loader";

export default function DTable({
  columns,
  rows,
  pageNo,
  pageSize,
  onPageChange,
  onRowsChange,
  count,
  rowsPerPageOptions = [20, 50, 100],
  loading,
  notFoundMessage = "Not Found",
  withIndex = false,
  pagination,
}) {
  return (
    <Box style={{ width: "100%", display: "table", tableLayout: "fixed" }}>
      <Card sx={{ width: "100%", padding: "24px 24px 0px 24px" }}>
        <TableContainer className="table-container campaign-table-container">
          <Table>
            <TableHead>
              <TableRow>
                {withIndex && <TableCell align="center">SL No.</TableCell>}
                {columns.map((column, index) => (
                  <TableCell
                    key={index}
                    align={column?.textCenter ? "center" : "left"}
                    style={column.headerStyle}
                  >
                    <DTypography
                      variant={"medium2Bold"}
                      textAccent={"normal"}
                      text={column.headerName}
                    />
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell align="center" colSpan={columns.length}>
                    {/* <Loader /> */}
                  </TableCell>
                </TableRow>
              ) : rows.length < 1 ? (
                <TableRow>
                  <TableCell align="center" colSpan={columns.length}>
                    {/* <NotFound message={notFoundMessage} /> */}
                  </TableCell>
                </TableRow>
              ) : (
                rows.map((row, index) => (
                  <TableRow key={row.id ?? index}>
                    {withIndex && (
                      <TableCell align="left">
                        {pageNo * pageSize + index + 1}.
                      </TableCell>
                    )}
                    {columns.map((column, index) => (
                      <TableCell
                        key={index}
                        align={column?.textCenter ? "center" : "left"}
                        style={column.columnStyle}
                      >
                        {"renderCell" in column
                          ? column.renderCell({ row, value: row[column.field] })
                          : row[column.field] !== null
                          ? row[column.field]
                          : "N/A"}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
        {
          // !pagination

          pagination && (
            <TablePagination
              rowsPerPageOptions={rowsPerPageOptions}
              component="div"
              count={count}
              rowsPerPage={pageSize}
              page={pageNo}
              onPageChange={onPageChange}
              onRowsPerPageChange={onRowsChange}
            />
          )
        }
      </Card>
    </Box>
  );
}
