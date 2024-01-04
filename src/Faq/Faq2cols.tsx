import React from "react";
import { Repeater, types } from "../shared";
import { LayoutProps } from "../LayoutSideProps";
import Container from "../shared/components/Container";
import Section from "../shared/components/Section";
import FaqQuestion, { FaqQuestionProps } from "./FaqItem";

export interface FaqProps extends LayoutProps {
  faqs: FaqQuestionProps[];
}

const Faq2Cols: types.Brick<FaqProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  width,
  faqs,
}) => {
  return (
    <Section
      backgroundColor={backgroundColor}
      borderTop={borderTop}
      borderBottom={borderBottom}
    >
      <Container
        size={width}
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        className="grid sm:grid-cols-2 gap-12"
      >
        <Repeater
          propName="faqs"
          items={faqs}
          itemBuilder={(props) => <FaqQuestion {...props} />}
        />
      </Container>
    </Section>
  );
};

export default Faq2Cols;
