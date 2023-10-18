import styled from "styled-components";

export const SubHeaderContainer = styled.section`
    background-color: #006c40;
    padding: 0.75rem 0px;
`;

export const SubHeaderInnerContainer = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin: 0px auto;
    max-width: 72rem;
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
`;

export const SubHeaderSOTitle = styled.p`
    color: #FFF;
    font-family: "Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    margin: 0px;

    @media (min-width: 640px){
        font-size: 1.4375rem;
    }

    span {
        display: none;
      }
    
      @media screen and (max-width: 480px) {
        span {
          display: inline-block;
        }
      }
`;

export const SubheaderAppTitle = styled.p`
  color:  #FFF;
  font-family: "Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  margin: 0;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;