import React from "react";
import classNames from "classnames";
import { Repeater, types } from "../../shared";
import { LayoutProps } from "../../LayoutSideProps";
import Container from "../../shared/components/Container";
import Section from "../../shared/components/Section";
import TitleSubtitle from "../../shared/components/TitleSubtitle";
import Office, { OfficeProps } from "./Office";

export interface OfficesProps extends LayoutProps {
  withTitle: boolean;
  title?: string;
  subtitle?: string;
  bigCenteredTitle?: boolean;
  offices: OfficeProps[];
}

const Offices: types.Brick<OfficesProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  width,
  withTitle,
  title,
  subtitle,
  bigCenteredTitle,
  offices,
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
        size={width}
      >
        {withTitle && (
          <TitleSubtitle
            title={title}
            subtitle={subtitle}
            bigCentered={bigCenteredTitle}
            className={classNames(bigCenteredTitle ? "mb-12" : "mb-8")}
          />
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <Repeater
            propName="offices"
            items={offices}
            itemBuilder={(props) => <Office {...props} />}
          />
        </div>
      </Container>
    </Section>
  );
};

export default Offices;
