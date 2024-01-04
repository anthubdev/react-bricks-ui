import React from "react";
import classNames from "classnames";
import { Repeater, types } from "../../shared";
import Container from "../../shared/components/Container";
import Section from "../../shared/components/Section";
import { LayoutProps } from "../../LayoutSideProps";
import TitleSubtitle from "../../shared/components/TitleSubtitle";
import TeamItem, { TeamItemProps } from "./TeamItem";

export interface TeamProps extends LayoutProps {
  withTitle?: boolean;
  title?: string;
  subtitle?: string;
  bigCenteredTitle?: boolean;
  members: TeamItemProps[];
}

const Team: types.Brick<TeamProps> = ({
  withTitle = false,
  title,
  subtitle,
  bigCenteredTitle = false,
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  width,
  members,
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
      >
        {withTitle && (
          <TitleSubtitle
            title={title}
            subtitle={subtitle}
            className={classNames(bigCenteredTitle ? "mb-12" : "mb-8")}
            bigCentered={bigCenteredTitle}
          />
        )}
        <div
          className={classNames(
            "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8",
            {
              "lg:grid-cols-5 lg:gap-10 xl:grid-cols-6": width === "medium",
            }
          )}
        >
          <Repeater
            propName="members"
            items={members}
            itemBuilder={(props) => <TeamItem {...props} />}
          />
        </div>
      </Container>
    </Section>
  );
};

export default Team;
