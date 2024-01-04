import React from "react";
import classNames from "classnames";
import { Repeater, types } from "../../shared";
import { LayoutProps } from "../../LayoutSideProps";
import Container from "../../shared/components/Container";
import Section from "../../shared/components/Section";
import TitleSubtitle from "../../shared/components/TitleSubtitle";
import Team2ColsItem, { Team2ColsItemProps } from "./Team2ColsItem";

export interface Team2ColsProps extends LayoutProps {
  withTitle?: boolean;
  title?: string;
  subtitle?: string;
  bigCenteredTitle?: boolean;
  members: Team2ColsItemProps[];
}

const Team2Cols: types.Brick<Team2ColsProps> = ({
  withTitle = false,
  title,
  subtitle,
  members,
  bigCenteredTitle = false,
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
}) => {
  return (
    <Section
      backgroundColor={backgroundColor}
      borderTop={borderTop}
      borderBottom={borderBottom}
    >
      <Container
        size="small"
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
        <ul className="grid grid-cols-[repeat(auto-fit,_minmax(240px,_1fr))] lg:grid-cols-2 gap-8 mb-12">
          <Repeater
            propName="members"
            items={members}
            itemBuilder={(props) => <Team2ColsItem {...props} />}
          />
        </ul>
      </Container>
    </Section>
  );
};

export default Team2Cols;
