import { useState } from 'react';
import styled from 'styled-components';
import logo from '../images/textLogo.webp';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoLink = styled.a`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 40px;
  width: auto;
  filter: ${({ theme }) => theme.filters.brandTint};
`;

const NavLinks = styled.ul<{ $isOpen: boolean }>`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.primary};
    padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.lg};
    transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.3s ease-in-out;
    box-shadow: ${({ $isOpen }) => ($isOpen ? '-5px 0 15px rgba(0,0,0,0.2)' : 'none')};
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.secondaryLight};
  font-weight: 500;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.5rem;
  z-index: 1001;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
`;

const CTAButton = styled.a`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryLight};
    transform: translateY(-2px);
  }
`;

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <HeaderWrapper>
      <Nav>
        <LogoLink href="#">
          <Logo src={logo} alt="Roost Climbing" />
        </LogoLink>
        <MobileMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? '✕' : '☰'}
        </MobileMenuButton>
        <NavLinks $isOpen={isMenuOpen}>
          <li><NavLink href="#about">About</NavLink></li>
          <li><NavLink href="#services">Services</NavLink></li>
          <li><NavLink href="#membership">Membership</NavLink></li>
          <li><NavLink href="#contact">Contact</NavLink></li>
          <li><CTAButton href="#membership">Join Now</CTAButton></li>
        </NavLinks>
      </Nav>
    </HeaderWrapper>
  );
};
