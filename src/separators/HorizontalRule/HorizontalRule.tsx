import React from "react";
import { types } from "../../shared";
import Container from "../../shared/components/Container";
import Section from "../../shared/components/Section";
import { LayoutProps } from "../../LayoutSideProps";

interface HorizontalRuleProps extends LayoutProps {}

const HorizontalRule: types.Brick<HorizontalRuleProps> = ({
  backgroundColor,
  width,
  paddingTop,
  paddingBottom,
}) => {
  return (
    <Section backgroundColor={backgroundColor}>
      <Container
        size={width}
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
      >
        <hr className="border-black/10" />
      </Container>
    </Section>
  );
};

export default HorizontalRule;
