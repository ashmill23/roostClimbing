import styled from 'styled-components';
import bounderingImg from '../images/bouldering.webp';
import liftingImg from '../images/lifting.webp';
import yogaImg from '../images/yogaing.webp';

const ServicesWrapper = styled.section`
  padding: clamp(3rem, 8vw, ${({ theme }) => theme.spacing.xxl})
    clamp(1rem, 5vw, ${({ theme }) => theme.spacing.lg});
  background-color: ${({ theme }) => theme.colors.grayLight};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

const SectionSubtitle = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 3px;
`;

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: clamp(2rem, 5vw, 3rem);
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(320px, 100%), 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
`;

const ServiceCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
  }
`;

const ServiceImageWrapper = styled.div`
  height: 220px;
  overflow: hidden;
  position: relative;
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${ServiceCard}:hover & {
    transform: scale(1.05);
  }
`;

const ServiceImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(26, 60, 52, 0.2) 100%
  );
`;

const ServiceContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`;

const ServiceTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const ServiceDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ServiceFeatures = styled.ul`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ServiceFeature = styled.li`
  color: ${({ theme }) => theme.colors.primaryLight};
  font-size: 0.9rem;
  padding: ${({ theme }) => theme.spacing.xs} 0;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};

  &::before {
    content: '✓';
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: bold;
  }
`;

const services = [
  {
    image: bounderingImg,
    title: 'Rock Climbing',
    description: 'Experience the thrill of climbing on our diverse range of walls, from beginner-friendly routes to challenging overhangs.',
    features: [
      'Over 100 routes updated monthly',
      'Bouldering & top-rope areas',
      'Auto-belays available',
      'All skill levels welcome',
    ],
  },
  {
    image: liftingImg,
    title: 'Fitness Gym',
    description: 'A fully-equipped gym with everything you need to build strength, improve endurance, and complement your climbing.',
    features: [
      'Free weights & machines',
      'Cardio equipment',
      'Functional training zone',
      'Climbing-specific training',
    ],
  },
  {
    image: yogaImg,
    title: 'Yoga Studio',
    description: 'Restore balance and flexibility with our yoga classes, perfect for recovery and improving your climbing performance.',
    features: [
      'Daily classes offered',
      'Multiple yoga styles',
      'Expert instructors',
      'All levels welcome',
    ],
  },
];

export const Services = () => {
  return (
    <ServicesWrapper id="services">
      <Container>
        <SectionHeader>
          <SectionSubtitle>What We Offer</SectionSubtitle>
          <SectionTitle>Our Services</SectionTitle>
        </SectionHeader>
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard key={index}>
              <ServiceImageWrapper>
                <ServiceImage src={service.image} alt={service.title} loading="lazy" />
                <ServiceImageOverlay />
              </ServiceImageWrapper>
              <ServiceContent>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
                <ServiceFeatures>
                  {service.features.map((feature, idx) => (
                    <ServiceFeature key={idx}>{feature}</ServiceFeature>
                  ))}
                </ServiceFeatures>
              </ServiceContent>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Container>
    </ServicesWrapper>
  );
};
