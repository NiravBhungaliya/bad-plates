import { useState, useMemo } from "react";
import {
  OntarioTable,
  OntarioTableBody,
  OntarioTableCaption,
  OntarioTableContainer,
  OntarioTableData,
  OntarioTableDiv,
  OntarioTableHead,
  OntarioTableHeadData,
  OntarioTableRow,
  OntarioTableScrollWrapper,
} from "./styles";

function ExportPlates() {
  const data = [
    { plate: "1" },
    { plate: "2" },
    { plate: "3" },
    { plate: "4" },
    { plate: "5" },
    { plate: "6" },
    { plate: "7" },
    { plate: "8" },
    { plate: "9" },
    { plate: "10" },
    { plate: "11" },
    { plate: "12" },
  ];

  const itemsPerPage = 10;
  const [page, setPage] = useState(1);
  const displayData = useMemo(() => {
    const start = (page - 1) * itemsPerPage;
    return data.slice(start, start + itemsPerPage);
  }, [data]);

  const tableRows = displayData.map((dataDisplay, i) => {
    return (
      <OntarioTableRow>
        <OntarioTableData>{dataDisplay.plate}</OntarioTableData>
      </OntarioTableRow>
    );
  });

  return (
    <OntarioTableContainer>
      <OntarioTableScrollWrapper></OntarioTableScrollWrapper>
      <button onClick={() => setPage(page + 1)}> Next Page </button>
      <button onClick={() => setPage(page - 1)}> Prev Page </button>
      <OntarioTableDiv>
        <OntarioTable>
          <OntarioTableCaption>Bad Number Plates</OntarioTableCaption>
          <OntarioTableHead>
            <OntarioTableRow>
              <OntarioTableHeadData>Bad Number Plates</OntarioTableHeadData>
            </OntarioTableRow>
          </OntarioTableHead>
          <OntarioTableBody>{tableRows}</OntarioTableBody>
        </OntarioTable>
      </OntarioTableDiv>
    </OntarioTableContainer>
  );
}

export default ExportPlates;
