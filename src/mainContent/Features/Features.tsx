import React from "react";
import classNames from "classnames";
import { Repeater, types } from "../../shared";
import Container from "../../shared/components/Container";
import Section from "../../shared/components/Section";
import { LayoutProps } from "../../LayoutSideProps";
import FeatureItem, { FeatureItemProps } from "./FeatureItem";

export type ColsNumber = "2" | "3" | "4";

export interface FeaturesProps extends LayoutProps {
  colsNumber: ColsNumber;
  features: FeatureItemProps[];
}

const Features: types.Brick<FeaturesProps> = ({
  backgroundColor,
  colsNumber,
  paddingTop,
  paddingBottom,
  borderTop,
  borderBottom,
  features,
}) => {
  return (
    <Section
      backgroundColor={backgroundColor}
      borderTop={borderTop}
      borderBottom={borderBottom}
    >
      <Container
        size={colsNumber === "2" ? "small" : "medium"}
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        className={classNames("flex flex-wrap justify-between")}
      >
        <Repeater
          propName="features"
          items={features}
          itemBuilder={(props) => <FeatureItem {...props} />}
          itemProps={{ colsNumber: colsNumber }}
        />
      </Container>
    </Section>
  );
};

export default Features;
