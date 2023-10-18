import { TableContainer, TableBody, TableRow, TableData } from "./styles";

function BadPlatesViewPage() {
  return <TableContainer>
      <TableBody>
        <TableRow key="1">
          <th>#</th>
          <th>Bad Plate Number</th>
        </TableRow>
        <TableRow>
          <TableData>1</TableData>
          <TableData>GRABHER</TableData>
        </TableRow>
        <TableRow>
          <TableData>2</TableData>
          <TableData>HHJM</TableData>
        </TableRow>
      </TableBody>
    </TableContainer>;
}

export default BadPlatesViewPage;
