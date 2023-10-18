import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-color: #1A1A1A;
    border-bottom: 4px solid #4D4D4D;
    color: #FFF;
    padding: 4rem 0px;
    position: relative;

    &:before {
        background-image: url(/images/footer-default-supergraphic-logo.svg);
        background-color: #333;
        background-repeat: no-repeat;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        @media(min-width: 361px) {
            background-size: 180rem;
            background-position: calc(50vw - 120rem) -106rem;
        }
    
        @media(min-width: 1168px) {
            background-size: 275rem;
            background-position: calc(50vw - 187rem) -160rem;
        }
    
        @media(min-width: 1536px) {
            background-size: 305rem;
            background-position: calc(50vw - 222rem) -160rem;
        }
    }
`;

export const FooterRow = styled.div`
    position: relative;
    margin: 0 auto;
    max-width: 72rem;
    width: 100%;
    display: flex;
    flex-direction: column;

    @media(min-width: 640px) {
        flex-direction: row;
    }
`;

export const OntarioColumn = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding-left: 1rem;
    padding-right: 1rem;
`;

export const FooterLinksContainer = styled.ul`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    list-style: none;
    margin: 0px 0px 1rem;
    padding: 0px;

    li {
        padding: 0.25rem 0;
    }

    @media(min-width: 640px) {
        flex-direction: row;
    }

    @media(min-width: 1168px){
        margin-bottom: 0.5rem;
    }
`;

export const FooterLink = styled.a`
  color: #FFF;
  display: inline-block;
  padding: 0.5rem 0px;
  margin: 0px;
  text-decoration: underline;

  &:hover,
  &:focus {
    text-decoration: none;
  }

  &:visited,
  &:active,
  &:hover {
    color: #FFF;
  }

  @media(min-width: 640px){
    padding: 0px;
    margin: 0px 3rem 1rem 0px;
  }
`;

export const FooterCopyrightLink = styled(FooterLink)`
  margin: 0;
`;