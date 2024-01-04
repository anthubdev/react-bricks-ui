import React from "react";
import { Repeater, types } from "../../shared";
import { LayoutProps } from "../../LayoutSideProps";
import Container from "../../shared/components/Container";
import Section from "../../shared/components/Section";
import Testimonial3ColsItem, {
  Testimonial3ColsItemProps,
} from "./Testimonial3ColsItem";

export interface TestimonialProps extends LayoutProps {
  testimonials: Testimonial3ColsItemProps[];
}

const Testimonial3Cols: types.Brick<TestimonialProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  testimonials,
}) => {
  return (
    <Section
      backgroundColor={backgroundColor}
      borderTop={borderTop}
      borderBottom={borderBottom}
    >
      <Container
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        className="grid grid-cols-1 lg:grid-cols-3 gap-12 xl:gap-10"
      >
        <Repeater
          propName="testimonials"
          items={testimonials}
          itemBuilder={(props) => <Testimonial3ColsItem {...props} />}
        />
      </Container>
    </Section>
  );
};

export default Testimonial3Cols;
