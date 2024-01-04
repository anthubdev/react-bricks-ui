import React from "react";
import classNames from "classnames";
import { Repeater, types } from "../../shared";
import Container from "../../shared/components/Container";
import Section from "../../shared/components/Section";
import { LayoutProps } from "../../LayoutSideProps";
import TitleSubtitle from "../../shared/components/TitleSubtitle";
import LinkCard, { LinkCardProps } from "./LinkCard";

export interface LinkCardsProps extends LayoutProps {
  withTitle?: boolean;
  title?: string;
  subtitle?: string;
  bigCenteredTitle?: boolean;
  cards: LinkCardProps[];
}

const LinkCards: types.Brick<LinkCardsProps> = ({
  backgroundColor,
  paddingTop,
  paddingBottom,
  borderTop,
  borderBottom,
  width,
  withTitle,
  bigCenteredTitle,
  cards,
  title,
  subtitle,
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
        <div className="grid gap-5 sm:grid-cols-2">
          <Repeater
            propName="cards"
            items={cards}
            itemBuilder={(props) => {
              return <LinkCard {...props} />;
            }}
          />
        </div>
      </Container>
    </Section>
  );
};

export default LinkCards;
