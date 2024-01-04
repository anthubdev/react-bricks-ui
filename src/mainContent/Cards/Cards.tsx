import React from "react";
import { types } from "../../shared";
import { Repeater } from "../../shared";
import Container from "../../shared/components/Container";
import Section from "../../shared/components/Section";
import { LayoutProps } from "../../LayoutSideProps";
import classNames from "classnames";
import TitleSubtitle from "../../shared/components/TitleSubtitle";
import Card, { CardProps } from "./Card";

export interface CardsProps extends LayoutProps {
  withTitle?: boolean;
  title?: string;
  subtitle?: string;
  bigCenteredTitle?: boolean;
  cards: CardProps[];
}

const Cards: types.Brick<CardsProps> = ({
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
  cards,
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
            className={classNames(bigCenteredTitle ? "mb-10" : "mb-8")}
            bigCentered={bigCenteredTitle}
          />
        )}
        <div
          className={classNames(
            "grid gap-[30px] grid-cols-1",
            width === "small" ? "lg:grid-cols-2" : "md:grid-cols-2"
          )}
        >
          <Repeater
            propName="cards"
            items={cards}
            itemBuilder={(props) => <Card {...props} />}
          />
        </div>
      </Container>
    </Section>
  );
};

export default Cards;
