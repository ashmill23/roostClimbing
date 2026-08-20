import styled from 'styled-components';
import textLogo from '../images/textLogo.webp';
import { CONTACT_EMAIL } from '../config';

const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.primaryDark};
  color: ${({ theme }) => theme.colors.secondaryLight};
  padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.lg};
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
    color: ${({ theme }) => theme.colors.secondaryLight};
    opacity: 0.85;
    font-size: 0.95rem;
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
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-3px);
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

const LegalLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};

  a {
    font-size: 0.9rem;
    opacity: 0.7;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 1;
    }
  }
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
            <SocialLinks>
              <SocialLink href="#" aria-label="Instagram">📷</SocialLink>
              <SocialLink href="#" aria-label="Facebook">📘</SocialLink>
              <SocialLink href="#" aria-label="YouTube">📺</SocialLink>
            </SocialLinks>
          </FooterBrand>

          <FooterColumn>
            <ColumnTitle>Quick Links</ColumnTitle>
            <FooterLinks>
              <FooterLink><a href="#about">About Us</a></FooterLink>
              <FooterLink><a href="#services">Services</a></FooterLink>
              <FooterLink><a href="#membership">Membership</a></FooterLink>
              <FooterLink><a href="#">Classes</a></FooterLink>
              <FooterLink><a href="#">Events</a></FooterLink>
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
              {CONTACT_EMAIL}
            </ContactInfo>
          </FooterColumn>
        </FooterGrid>

        <FooterBottom>
          <Copyright>
            © {new Date().getFullYear()} Roost Climbing. All rights reserved.
          </Copyright>
          <LegalLinks>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Waiver</a>
          </LegalLinks>
        </FooterBottom>
      </Container>
    </FooterWrapper>
  );
};
