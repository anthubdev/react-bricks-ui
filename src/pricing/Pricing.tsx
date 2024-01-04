import React from "react";
import { Repeater, types } from "../shared";
import Container from "../shared/components/Container";
import Section from "../shared/components/Section";
import { LayoutProps } from "../LayoutSideProps";
import PricingPlan, { PricingPlanProps } from "./PricingPlan";

export interface PricingProps extends LayoutProps {
  plans: PricingPlanProps[];
}

const Pricing: types.Brick<PricingProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  plans,
}) => {
  return (
    <Section
      backgroundColor={backgroundColor}
      borderTop={borderTop}
      borderBottom={borderBottom}
    >
      <Container
        size="medium"
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
      >
        <div className={`flex flex-wrap justify-center`}>
          <Repeater
            propName="plans"
            items={plans}
            itemBuilder={(props) => <PricingPlan {...props} />}
          />
        </div>
      </Container>
    </Section>
  );
};

export default Pricing;
