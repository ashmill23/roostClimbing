import styled from 'styled-components';
import { CONTACT_EMAIL } from '../config';

const MembershipWrapper = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.lg};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary} 0%,
    ${({ theme }) => theme.colors.primaryDark} 100%
  );
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
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 3px;
`;

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: clamp(2rem, 5vw, 3rem);
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`;

const PricingCard = styled.div<{ $featured?: boolean }>`
  background-color: ${({ $featured, theme }) =>
    $featured ? theme.colors.secondary : theme.colors.white};
  border-radius: 8px;
  padding: ${({ theme }) => theme.spacing.xl};
  text-align: center;
  position: relative;
  transform: ${({ $featured }) => ($featured ? 'scale(1.05)' : 'scale(1)')};
  box-shadow: ${({ $featured }) =>
    $featured ? '0 20px 40px rgba(0, 0, 0, 0.2)' : '0 4px 20px rgba(0, 0, 0, 0.1)'};
  transition: all 0.3s ease;

  &:hover {
    transform: ${({ $featured }) => ($featured ? 'scale(1.08)' : 'scale(1.03)')};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    transform: scale(1);
    &:hover {
      transform: scale(1.03);
    }
  }
`;

const PlanName = styled.h3<{ $featured?: boolean }>`
  color: ${({ $featured, theme }) =>
    $featured ? theme.colors.primary : theme.colors.primaryDark};
  font-size: 1.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Price = styled.div<{ $featured?: boolean }>`
  color: ${({ $featured, theme }) =>
    $featured ? theme.colors.primary : theme.colors.primary};
`;

const PriceAmount = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 3.5rem;
  font-weight: 700;
`;

const PricePeriod = styled.span`
  font-size: 1rem;
  opacity: 0.8;
`;

const PlanFeatures = styled.ul`
  margin: ${({ theme }) => theme.spacing.lg} 0;
  text-align: left;
`;

const PlanFeature = styled.li<{ $featured?: boolean }>`
  color: ${({ $featured, theme }) =>
    $featured ? theme.colors.primaryDark : theme.colors.gray};
  padding: ${({ theme }) => theme.spacing.xs} 0;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};

  &::before {
    content: '✓';
    color: ${({ $featured, theme }) =>
      $featured ? theme.colors.primary : theme.colors.secondary};
    font-weight: bold;
  }
`;

const PlanButton = styled.a<{ $featured?: boolean }>`
  display: block;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  border-radius: 4px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  background-color: ${({ $featured, theme }) =>
    $featured ? theme.colors.primary : theme.colors.secondary};
  color: ${({ $featured, theme }) =>
    $featured ? theme.colors.white : theme.colors.primary};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  }
`;

const plans = [
  {
    name: 'Solo',
    price: '100',
    period: '/month',
    features: [
      'One member',
      'Unlimited climbing',
      'Full gym access',
      'All yoga classes',
      'Member discounts',
    ],
    featured: false,
  },
  {
    name: 'Couple',
    price: '125',
    period: '/month',
    features: [
      'Two members',
      'Unlimited climbing',
      'Full gym access',
      'All yoga classes',
      'Member discounts',
    ],
    featured: true,
  },
  {
    name: 'Family',
    price: '150',
    period: '/month',
    features: [
      'Up to five members',
      'Unlimited climbing',
      'Full gym access',
      'All yoga classes',
      'Member discounts',
    ],
    featured: false,
  },
];

export const Membership = () => {
  return (
    <MembershipWrapper id="membership">
      <Container>
        <SectionHeader>
          <SectionSubtitle>Pricing</SectionSubtitle>
          <SectionTitle>Membership Options</SectionTitle>
        </SectionHeader>
        <PricingGrid>
          {plans.map((plan, index) => (
            <PricingCard key={index} $featured={plan.featured}>
              <PlanName $featured={plan.featured}>{plan.name}</PlanName>
              <Price $featured={plan.featured}>
                <PriceAmount>${plan.price}</PriceAmount>
                <PricePeriod>{plan.period}</PricePeriod>
              </Price>
              <PlanFeatures>
                {plan.features.map((feature, idx) => (
                  <PlanFeature key={idx} $featured={plan.featured}>
                    {feature}
                  </PlanFeature>
                ))}
              </PlanFeatures>
              <PlanButton
                href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
                  `${plan.name} membership inquiry`
                )}`}
                $featured={plan.featured}
              >
                Get Started
              </PlanButton>
            </PricingCard>
          ))}
        </PricingGrid>
      </Container>
    </MembershipWrapper>
  );
};
