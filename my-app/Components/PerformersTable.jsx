import React from "react";
import { useRouter } from "next/navigation";
import styled2 from "styled-components";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { mobileBreakpoint } from "../constants";

const ComponentWrapper = styled2.div`
  margin: 18px 26px;

  @media(max-width: ${mobileBreakpoint}) {
  margin: 18px 0px;
  }
`;

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function PerformersTable({ item }) {
  const router = useRouter();

  const handleSubmit = (arg) => {
    router.push(`${process.env.NEXT_PUBLIC_DOMAIN}/tickerbyid/${arg}`);
  };

  return (
    <ComponentWrapper>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Ticker</StyledTableCell>
              <StyledTableCell align="right">Price</StyledTableCell>
              <StyledTableCell align="right">Change Amount</StyledTableCell>
              <StyledTableCell align="right">Change Percentage</StyledTableCell>
              <StyledTableCell align="right">volume</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {item.map((field, i) => (
              <StyledTableRow key={i}>
                <StyledTableCell
                  component="th"
                  scope="row"
                  onClick={() => handleSubmit(field.ticker)}
                >
                  {field.ticker}
                </StyledTableCell>
                <StyledTableCell align="right">{field.price}</StyledTableCell>
                <StyledTableCell align="right">
                  {field.change_amount}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {field.change_percentage}
                </StyledTableCell>
                <StyledTableCell align="right">{field.volume}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ComponentWrapper>
  );
}
