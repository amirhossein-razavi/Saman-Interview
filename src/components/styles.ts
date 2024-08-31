import { styled } from "@mui/material/styles";
import { Paper, CircularProgress, TableCell, TableRow } from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import { lightBlue, grey, deepPurple } from "@mui/material/colors";

export const StyledPaper = styled(Paper)(() => ({
  padding: "1rem",
  marginBottom: "2rem",
  position: "sticky",
  top: 0,
  zIndex: 99,
  "form": {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
}));

export const StyledLoading = styled(CircularProgress)(() => ({
  color: lightBlue[50],
}));

export const StyledTableCell = styled(TableCell)(() => ({
  verticalAlign: "top",
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: deepPurple[50],
  },
}));

export const StyledTableRow = styled(TableRow)(() => ({
  "&:nth-of-type(odd)": {
    backgroundColor: grey[50],
  },
}));
