import styled from 'styled-components';
import textLogo from '../images/textLogo.webp';
import { CONTACT_EMAIL } from '../config';

const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.primaryDark};
  color: ${({ theme }) => theme.colors.secondaryLight};
  padding: clamp(3rem, 8vw, ${({ theme }) => theme.spacing.xxl})
    clamp(1rem, 5vw, ${({ theme }) => theme.spacing.lg});
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const FooterBrand = styled.div``;

const Logo = styled.img`
  height: 40px;
  width: auto;
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  filter: ${({ theme }) => theme.filters.brandTint};
`;

const BrandText = styled.p`
  font-size: 0.95rem;
  line-height: 1.7;
  opacity: 0.85;
  max-width: 300px;
`;

const FooterColumn = styled.div``;

const ColumnTitle = styled.h4`
  color: ${({ theme }) => theme.colors.secondary};
  /* Override the global heading serif so these match the header nav */
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const FooterLinks = styled.ul``;

const FooterLink = styled.li`
  margin-bottom: ${({ theme }) => theme.spacing.xs};

  a {
    /* Inline anchors only register hover across the text itself; block makes
       the whole row a target so the hand cursor shows anywhere on the line. */
    display: block;
    color: ${({ theme }) => theme.colors.secondaryLight};
    opacity: 0.85;
    font-size: 0.95rem;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      opacity: 1;
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

const ContactInfo = styled.div`
  font-size: 0.95rem;
  line-height: 1.8;
  opacity: 0.85;

  a {
    display: inline-block;
    color: inherit;
    cursor: pointer;
    transition: color 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

const FooterBottom = styled.div`
  padding-top: ${({ theme }) => theme.spacing.lg};
  border-top: 1px solid rgba(212, 197, 169, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    justify-content: center;
    text-align: center;
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  opacity: 0.7;
`;

export const Footer = () => {
  return (
    <FooterWrapper id="contact">
      <Container>
        <FooterGrid>
          <FooterBrand>
            <Logo src={textLogo} alt="The Roost" />
            <BrandText>
              Elevate your fitness journey at our premier indoor climbing facility.
              Where climbers come to roost.
            </BrandText>
          </FooterBrand>

          <FooterColumn>
            <ColumnTitle>Quick Links</ColumnTitle>
            <FooterLinks>
              <FooterLink><a href="#about">About Us</a></FooterLink>
              <FooterLink><a href="#services">Services</a></FooterLink>
              <FooterLink><a href="#membership">Membership</a></FooterLink>
            </FooterLinks>
          </FooterColumn>

          <FooterColumn>
            <ColumnTitle>Hours</ColumnTitle>
            <ContactInfo>
              Mon - Fri: 6am - 10pm<br />
              Sat - Sun: 8am - 8pm
            </ContactInfo>
          </FooterColumn>

          <FooterColumn>
            <ColumnTitle>Contact</ColumnTitle>
            <ContactInfo>
              200 Speedway Dr<br />
              Newark, OH 43055<br /><br />
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </ContactInfo>
          </FooterColumn>
        </FooterGrid>

        <FooterBottom>
          <Copyright>
            © {new Date().getFullYear()} Roost Climbing. All rights reserved.
          </Copyright>
        </FooterBottom>
      </Container>
    </FooterWrapper>
  );
};
