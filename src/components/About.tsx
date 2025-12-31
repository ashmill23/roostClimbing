import styled from 'styled-components';
import roostingImg from '../images/roosting.png';

const AboutWrapper = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.white};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xxl};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const AboutImageWrapper = styled.div`
  position: relative;
  height: 500px;

  &::before {
    content: '';
    position: absolute;
    top: -20px;
    right: -20px;
    width: 150px;
    height: 150px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 8px;
    z-index: 0;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: -20px;
    width: 100px;
    height: 100px;
    background-color: ${({ theme }) => theme.colors.primaryLight};
    border-radius: 8px;
    z-index: 0;
  }
`;

const AboutImage = styled.img`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

const AboutContent = styled.div``;

const SectionSubtitle = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 3px;
`;

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: clamp(2rem, 5vw, 2.75rem);
  margin: ${({ theme }) => theme.spacing.sm} 0 ${({ theme }) => theme.spacing.md};
`;

const AboutText = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const StatItem = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.grayLight};
  border-radius: 8px;
`;

const StatNumber = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

const StatLabel = styled.div`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

export const About = () => {
  return (
    <AboutWrapper id="about">
      <Container>
        <AboutImageWrapper>
          <AboutImage src={roostingImg} alt="Roost Climbing" />
        </AboutImageWrapper>
        <AboutContent>
          <SectionSubtitle>Our Story</SectionSubtitle>
          <SectionTitle>Where Climbers Come to Roost</SectionTitle>
          <AboutText>
            Founded by passionate climbers, Roost Climbing was born from a simple idea:
            create a space where the climbing community can thrive. We believe that climbing
            is more than just a sport—it's a way of life that builds strength, confidence,
            and lasting friendships.
          </AboutText>
          <AboutText>
            Our state-of-the-art facility combines challenging climbing routes with comprehensive
            fitness amenities and mindful yoga practice. Whether you're a seasoned climber or
            just starting your journey, you'll find your place at the Roost.
          </AboutText>
          <StatsGrid>
            <StatItem>
              <StatNumber>15K+</StatNumber>
              <StatLabel>Sq. Feet</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>100+</StatNumber>
              <StatLabel>Routes</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>2K+</StatNumber>
              <StatLabel>Members</StatLabel>
            </StatItem>
          </StatsGrid>
        </AboutContent>
      </Container>
    </AboutWrapper>
  );
};
