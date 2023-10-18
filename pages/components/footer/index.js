import {
  FooterContainer,
  FooterCopyrightLink,
  FooterLink,
  FooterLinksContainer,
  FooterRow,
  OntarioColumn,
} from "./styles";

function Footer() {
  const currentDate = new Date().getFullYear().toString();

  return (
    <FooterContainer>
      <FooterRow>
        <OntarioColumn>
          <FooterLinksContainer>
            <FooterLink
              href="https://www.ontario.ca/page/accessibility"
              title="Please click this link to learn more about ServiceOntario’s accessibility policy. This link will open in a new window."
              target="_blank"
              rel="noreferrer"
            >
              Accessiblility
            </FooterLink>
            <FooterLink
              href="https://www.ontario.ca/page/privacy-statement"
              title="Please click this link to learn more about ServiceOntario’s privacy statement. This link will open in a new window."
              target="_blank"
              rel="noreferrer"
            >
              Privacy
            </FooterLink>
            <FooterLink
              href="https://www.ontario.ca/feedback/contact-us?id=7476&amp;nid=53662"
              title="Please click this link to contact us. This link will open in a new window."
              target="_blank"
              rel="noreferrer"
            >
              Contact Us
            </FooterLink>
          </FooterLinksContainer>
          <FooterCopyrightLink
            href="https://www.ontario.ca/page/copyright-information"
            title="Please click this link to learn more about how to use and reuse the content on Ontario.ca. This link will open in a new window."
            target="_blank"
            rel="noreferrer"
          >
            © King’s Printer for Ontario, {currentDate}
          </FooterCopyrightLink>
        </OntarioColumn>
      </FooterRow>
    </FooterContainer>
  );
}

export default Footer;
