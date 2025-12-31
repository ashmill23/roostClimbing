import styled from 'styled-components';

const HeroWrapper = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary} 0%,
    ${({ theme }) => theme.colors.primaryDark} 100%
  );
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4c5a9' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
`;

const HeroContent = styled.div`
  text-align: center;
  z-index: 1;
  padding: ${({ theme }) => theme.spacing.lg};
  max-width: 900px;
`;

const HeroSubtitle = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 4px;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const HeroTitle = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: clamp(3rem, 8vw, 5.5rem);
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.1;
`;

const HeroAccent = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
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
    <HeroWrapper>
      <HeroContent>
        <HeroSubtitle>Welcome to</HeroSubtitle>
        <HeroTitle>
          ROOST <HeroAccent>CLIMBING</HeroAccent>
        </HeroTitle>
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
