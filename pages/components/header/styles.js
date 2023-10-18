import styled from "styled-components";

export const HeaderContainer = styled.header`
    position: relative;
    overflow: hidden;
    z-index: 5;
    background-color: #1A1A1A;
    color: #FFF;
    display: flex;
    align-items: center;
`;

export const HeaderInnerContainer = styled.div`
  width: 100%;
  max-width: 72rem;
  height: 5.75rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  -webkit-box-align: center;
`;

export const HeaderLogoContainer = styled.div`
  height: 46px;
  box-sizing: border-box;
  padding-left: 1rem;
  padding-right: 1rem;

  @media(min-width: 361px) {
    width: 16.6666666667%;
  }

  @media(min-width: 1168px) {
    width: 33.3333333333%;
  }

  @media(min-width: 1536px) {
    width: 25%;
  }

  a {
    display: inline-block;
    height: 100%;
  }
`;

export const HeaderDesktopLogo = styled.img`
    display:none;
    @media(min-width: 640px){
        display: block;
    }`;

export const HeaderMobileLogo = styled.img`
    @media(min-width: 1168px){
        display: none;
    }
    @media(min-width: 640px){
        display: none;
    }`;