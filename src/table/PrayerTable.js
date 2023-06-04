import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Prayers } from '../data/Data';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: '#fafafa',
    backgroundColor : '#4951eb',
    fontSize: 18
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  name,
  calories,
  fat,
  carbs,
  protein
) {
  return { name, calories, fat, carbs, protein };
}


const PrayersData = Prayers;


export default function PrayerTable() {
   

  return (
    <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center" >Name&nbsp;(English)</StyledTableCell>
            <StyledTableCell align="center">Jamat</StyledTableCell>
            <StyledTableCell align="center">Azan</StyledTableCell>
            <StyledTableCell align="center">Name&nbsp;(Urdu)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {PrayersData.map((row) => (
            <StyledTableRow key={row.Name}>
              <StyledTableCell align="center">{row.Name}</StyledTableCell>
              <StyledTableCell align="center">{row.Jamat}</StyledTableCell>
              <StyledTableCell align="center">{row.Azan}</StyledTableCell>
              <TableCell align="center" 
              sx={{ fontSize: 25 }}
              >{row.Urdu}</TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}