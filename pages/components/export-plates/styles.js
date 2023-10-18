import styled from "styled-components";

export const OntarioTableContainer = styled.div`
  position: relative;
  margin: 0.5rem 0 2.5rem 0;
`;

export const OntarioTableScrollWrapper = styled.div`
  height: 20px;
  overflow-x: auto;
  overflow-y: hidden;
  display: block;
`;

export const OntarioTableDiv = styled.div`
  overflow-x: auto;
  background: linear-gradient(to right, #fff 30%, rgba(255, 255, 255, 0)),
    linear-gradient(to right, rgba(255, 255, 255, 0), #fff 70%) 0 100%,
    linear-gradient(to right, rgba(0, 0, 0, 0.2) 0, rgba(252, 0, 0, 0) 100.01%),
    linear-gradient(to left, rgba(0, 0, 0, 0.2) 0, rgba(252, 0, 0, 0) 100.01%);
  background-repeat: no-repeat;
  background-size: 2.5rem 100%, 2.5rem 100%, 0.875rem 100%, 0.875rem 100%;
  background-position: 0 0, 100%, 0 0, 100%;
  background-attachment: local, local, scroll, scroll;
`;

export const OntarioTable = styled.table`
  border-collapse: collapse;
  font-size: 1.0625rem;
  display: table;
  line-height: 1.625rem;
  font-weight: 400;
  padding: 2.5rem;
  @media screen and (max-width: 40em) {
    table {
      font-size: 1rem;
    }
  }
`;

export const OntarioTableCaption = styled.caption`
  background-color: #0000001a;
  padding: 1.125rem 1rem 1.125rem 1.5rem;
  text-align: left;
  font-weight: 700;
  font-size: 1.375rem;
  line-height: 2.1875rem;
  display: table-caption;
`;

export const OntarioTableHead = styled.thead`
  border: solid;
  border-width: 0.1875rem 0;
  border-color: #1a1a1a;
  vertical-align: text-top;
`;

export const OntarioTableHeadData = styled.th`
  text-align: left;
  padding: 1.75rem 1rem 1.75rem 1.5rem;
  margin: 0;
  font-size: 1.125rem;
  line-height: 1.5rem thead th {
    font-size: 1rem;
    line-height: 1.3125rem;
    padding: 1.53125rem 0.5rem 1.53125rem 1rem;
  }
`;

export const OntarioTableBody = styled.tbody`
  font-size: 1rem;
  vertical-align: text-top;
`;

export const OntarioTableRow = styled.tr`
  border: solid;
  border-width: 0.0625rem 0;
  border-color: #0000004d;
`;

export const OntarioTableData = styled.td`
  padding: 1.1875rem 1rem 1.1875rem 1.5rem;
  text-align: left;
  letter-spacing: 0.025rem;
`;
