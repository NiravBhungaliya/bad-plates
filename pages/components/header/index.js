import {
  HeaderContainer,
  HeaderInnerContainer,
  HeaderLogoContainer,
  HeaderDesktopLogo,
  HeaderMobileLogo,
} from "./styles";

function Header() {
  return (
    <HeaderContainer>
      <HeaderInnerContainer>
        <HeaderLogoContainer>
          <a
            href="/"
            target={"_blank"}
            title="Please click this link to learn more about the government of Ontario. This link will open in a new window."
            rel="noreferrer"
          >
            <HeaderDesktopLogo
              src="/images/ontario-logo--desktop.svg"
              width="180"
              height="46"
            />
            <HeaderMobileLogo
              src="/images/ontario-logo--mobile.svg"
              width="45"
              height="46"
            />
          </a>
        </HeaderLogoContainer>
      </HeaderInnerContainer>
    </HeaderContainer>
  );
}

export default Header;
