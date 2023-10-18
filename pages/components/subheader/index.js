import {
  SubHeaderContainer,
  SubHeaderInnerContainer,
  SubHeaderSOTitle,
  SubheaderAppTitle,
} from "./styles";

function SubHeader() {
  return (
    <SubHeaderContainer>
      <SubHeaderInnerContainer>
        <SubHeaderSOTitle>
          ServiceOntario
          <span>Automated License Plate Review</span>      
        </SubHeaderSOTitle>
        <SubheaderAppTitle>Automated License Plate Review</SubheaderAppTitle>
      </SubHeaderInnerContainer>
    </SubHeaderContainer>
  );
}

export default SubHeader;
