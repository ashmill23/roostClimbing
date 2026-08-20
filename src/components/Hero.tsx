import styled from 'styled-components';
import roostLogo from '../images/roostLogo.webp';
import bannerBg from '../images/bannerBackground.webp';

const HeroWrapper = styled.section<{ $bgImage: string }>`
  min-height: 100vh;
  /* Clear the fixed header (40px logo + 2x1rem padding) */
  padding: 96px 0 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${({ $bgImage }) => $bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(15, 38, 32, 0.7) 0%,
      rgba(26, 60, 52, 0.8) 100%
    );
  }
`;

const HeroContent = styled.div`
  text-align: center;
  z-index: 1;
  padding: ${({ theme }) => theme.spacing.lg};
  max-width: 900px;
`;

const HeroLogo = styled.img`
  max-width: 280px;
  width: 100%;
  height: auto;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  filter: ${({ theme }) => theme.filters.brandTint};
`;

const HeroDescription = styled.p`
  color: ${({ theme }) => theme.colors.secondaryLight};
  font-size: 1.25rem;
  max-width: 600px;
  margin: 0 auto ${({ theme }) => theme.spacing.xl};
  opacity: 0.9;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: center;
  flex-wrap: wrap;
`;

const PrimaryButton = styled.a`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.xl};
  border-radius: 4px;
  font-weight: 600;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryLight};
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
`;

const SecondaryButton = styled.a`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.xl};
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 4px;
  font-weight: 600;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-3px);
  }
`;

const ScrollIndicator = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }

  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  opacity: 0.7;
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateX(-50%) translateY(0);
    }
    40% {
      transform: translateX(-50%) translateY(-10px);
    }
    60% {
      transform: translateX(-50%) translateY(-5px);
    }
  }
`;

export const Hero = () => {
  return (
    <HeroWrapper $bgImage={bannerBg}>
      <HeroContent>
        <HeroLogo src={roostLogo} alt="Roost Climbing" />
        <HeroDescription>
          Elevate your fitness journey with world-class indoor climbing, a fully-equipped gym,
          and rejuvenating yoga classes—all under one roof.
        </HeroDescription>
        <ButtonGroup>
          <PrimaryButton href="#membership">Start Climbing</PrimaryButton>
          <SecondaryButton href="#services">Explore Services</SecondaryButton>
        </ButtonGroup>
      </HeroContent>
      <ScrollIndicator>Scroll Down ↓</ScrollIndicator>
    </HeroWrapper>
  );
};
