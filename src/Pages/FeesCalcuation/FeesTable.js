import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { NotesTable } from './NotesTable';
import { FeesCalcNotes } from './FeesCalcNotes';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: '#4466AD',
  color: theme.palette.common.white,
  fontWeight: 'bold',
  border: '1px solid #ddd'
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  border: '1px solid #ddd'
}));

function createData(fees, year1, year2, year3, year4, year5, year6) {
  return { fees, year1, year2, year3, year4, year5, year6 };
}

const rows = [
    createData('Capital Contributed / Assets under Management', 0, 0, 0, 0, 0, 0),
    createData('Gain / (Loss) on Investment based on the Scenario', 0, 0, 0, 0, 0, 0),
    createData('Gross Value of the Portfolio at the end of the year', 0, 0, 0, 0, 0, 0),
    createData('Operating Expenses', 0, 0, 0, 0, 0, 0),
    createData('Management Fees', 0, 0, 0, 0, 0, 0),
    createData('Transaction costs (on actuals)', 0, 0, 0, 0, 0, 0),
    createData('Gross Value of the Portfolio before Carry is charged', 0, 0, 0, 0, 0, 0),
    createData('Carry charged', 0, 0, 0, 0, 0, 0),
    createData('Net Value of the Portfolio after Carry is charged', 0, 0, 0, 0, 0, 0),
];

export default function FeesTable({ capital, management, operating, hurdleRate, transaction, performanceCarry }) {
  // Parse input values safely
  const capitalValue = Math.round(parseFloat(capital)) || 0;
  const managementFee = parseFloat(management) / 100 || 0; // Convert percentage to decimal
  const operatingExpensesRate = parseFloat(operating) / 100 || 0; // Convert percentage to decimal
  const hurdleRateValue = parseFloat(hurdleRate) / 100 || 0;  // Convert % to decimal
  const performanceCarryRate = parseFloat(performanceCarry) / 100 || 0; // ✅ Corrected carry rate

  // Calculate Gain Year 6
  const transactionRate = parseFloat(transaction) / 100 || 0;
  const gainYear6 = Math.round(capitalValue * Math.pow(1 + transactionRate, 6) - capitalValue);

  // Calculate Gross Value of the Portfolio at the end of the year
  const grossValueYear1 = capitalValue;

  // Calculate Operating and Management Expenses
  const operatingExpenses = Math.round(capitalValue * operatingExpensesRate * 1.18);
  const managementExpenses = Math.round(capitalValue * managementFee * 1.18);
  const transactionCost = 0;

  // Calculate Gross Value Before Carry
  const grossValueBeforeCarry = Math.round(grossValueYear1 - operatingExpenses - managementExpenses - transactionCost);
  const hurdleValue = Math.round(capitalValue * Math.pow(1 + hurdleRateValue, 6) - capitalValue);

  // Net Value After Carry (assuming no carry is charged yet)
  const netValue = grossValueBeforeCarry;
  const capitalValueYear1 = netValue;
  
  // Amount subject to Carry
  const amountOnWhichCarryApplicable = Math.max(gainYear6 - hurdleValue, 0);

  // Calculate Carry Charged
  const carryCharged = Math.round(amountOnWhichCarryApplicable * performanceCarryRate);

  // Apply 18% charge to Carry
  const lastCarryCharged = Math.round(carryCharged * 1.18);

  // Yearly Portfolio Calculations
  const year2GrossValueBeforeCarry = netValue - operatingExpenses - managementExpenses - transactionCost;
  const year2NetValueBeforeCarry = year2GrossValueBeforeCarry;
  
  const grossValueYear2 = netValue;
  const grossValueYear3 = year2NetValueBeforeCarry;
  const year3NetValueBeforeCarry = grossValueYear3 - operatingExpenses - managementExpenses;
  const year3NetValue = year3NetValueBeforeCarry;

  const grossValueYear4 = year3NetValue;
  const year4NetValueBeforeCarry = grossValueYear4 - operatingExpenses - managementExpenses;
  const year4NetValue = year4NetValueBeforeCarry;

  const grossValueYear5 = year4NetValue;
  const year5NetValueBeforeCarry = grossValueYear5 - operatingExpenses - managementExpenses;
  const year5NetValue = year5NetValueBeforeCarry;

  const grossValueYear6 = year5NetValue + gainYear6;
  const year6NetValueBeforeCarry = grossValueYear6 - operatingExpenses - managementExpenses;
  const year6NetValue = year6NetValueBeforeCarry - carryCharged;

  // Table Rows
  const rows = [
    createData('Capital Contributed / Assets under Management', capitalValue, capitalValueYear1, year2NetValueBeforeCarry, year3NetValue, year4NetValue, year5NetValue),
    createData('Gain / (Loss) on Investment based on the Scenario', "", "", "", "", "", gainYear6),
    createData('Gross Value of the Portfolio at the end of the year', grossValueYear1, grossValueYear2, grossValueYear3, grossValueYear4, grossValueYear5, grossValueYear6),
    createData('Operating Expenses', operatingExpenses, operatingExpenses, operatingExpenses, operatingExpenses, operatingExpenses, operatingExpenses),
    createData('Management Fees', managementExpenses, managementExpenses, managementExpenses, managementExpenses, managementExpenses, managementExpenses),
    createData('Transaction costs (on actuals)', 0, "", "", "", "", 0),
    createData('Gross Value of the Portfolio before Carry is charged', grossValueBeforeCarry, year2GrossValueBeforeCarry, year3NetValueBeforeCarry, year4NetValueBeforeCarry, year5NetValueBeforeCarry, year6NetValueBeforeCarry),
    createData('Carry charged', "", "", "", "", "", carryCharged),
    createData('Net Value of the Portfolio after Carry is charged', netValue, year2NetValueBeforeCarry, year3NetValue, year4NetValue, year5NetValue, year6NetValue),
    createData('Carry Calculation', ''),
    createData('Hurdle Value or as defined in the Co-investment PMS agreement', '', '', '', '', '', hurdleValue),
    createData('Amount on which Carry shall be applicable', '', '', '', '', '', amountOnWhichCarryApplicable),
    createData('Carry charged (after 18% adjustment)', '', '', '', '', '', lastCarryCharged),
  ];

  return (
   <>
   
    <TableContainer className='mb-10 mt-5 shadow-lg rounded-lg' component={Paper}>
      <Table sx={{ minWidth: 650, border: '1px solid #ddd' }} aria-label="fees table">
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>Fees Illustration</StyledTableCell>
            <StyledTableCell align="right">Year 1</StyledTableCell>
            <StyledTableCell align="right">Year 2</StyledTableCell>
            <StyledTableCell align="right">Year 3</StyledTableCell>
            <StyledTableCell align="right">Year 4</StyledTableCell>
            <StyledTableCell align="right">Year 5</StyledTableCell>
            <StyledTableCell align="right">Year 6</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
  {rows.map((row, index) => (
    <StyledTableRow key={index}>
      <TableCell className="p-0" component="th" scope="row" sx={{ border: '1px solid #ddd' }}>
        {row.fees}
      </TableCell>
      {[row.year1, row.year2, row.year3, row.year4, row.year5, row.year6].map((value, i) => (
        <TableCell
          key={i}
          align="right"
          sx={{
            border: '1px solid #ddd',
            color: value < 0 ? 'red' : 'inherit', // Apply red color if value is negative
            fontWeight: value < 0 ? 'bold' : 'normal', // Make negative values bold
          }}
        >
          {value}
        </TableCell>
      ))}
    </StyledTableRow>
  ))}
</TableBody>

      </Table>
    </TableContainer>

<FeesCalcNotes />
    </>
  );
}



