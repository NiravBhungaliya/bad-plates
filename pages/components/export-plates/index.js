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
  return (
    <OntarioTableContainer>
      <OntarioTableScrollWrapper></OntarioTableScrollWrapper>
      <OntarioTableDiv>
        <OntarioTable>
          <OntarioTableCaption>Bad Number Plates</OntarioTableCaption>
          <OntarioTableHead>
            <OntarioTableRow>
              <OntarioTableHeadData>Bad Number Plates</OntarioTableHeadData>
            </OntarioTableRow>
          </OntarioTableHead>
          <OntarioTableBody>
            <OntarioTableRow>
              <OntarioTableData>19COVID</OntarioTableData>
            </OntarioTableRow>
            <OntarioTableRow>
              <OntarioTableData>HUGEEGO</OntarioTableData>
            </OntarioTableRow>
            <OntarioTableRow>
              <OntarioTableData>IAMLOST</OntarioTableData>
            </OntarioTableRow>
            <OntarioTableRow>
              <OntarioTableData>TEDEBEAR</OntarioTableData>
            </OntarioTableRow>
            <OntarioTableRow>
              <OntarioTableData>DCWW002</OntarioTableData>
            </OntarioTableRow>
          </OntarioTableBody>
        </OntarioTable>
      </OntarioTableDiv>
    </OntarioTableContainer>
  );
}

export default ExportPlates;
