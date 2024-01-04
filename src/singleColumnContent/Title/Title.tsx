import React from "react";
import { types } from "../../shared";
import { LayoutProps } from "../../LayoutSideProps";
import Container, { Padding, Size } from "../../shared/components/Container";
import Section, { Border } from "../../shared/components/Section";
import TitleSubtitle from "../../shared/components/TitleSubtitle";

export interface TitleProps extends LayoutProps {
  backgroundColor: { color: string; className: string };
  backgroundImage?: types.IImageSource;
  backgroundImageDark?: types.IImageSource;
  paddingTop: Padding;
  paddingBottom: Padding;
  borderTop: Border;
  borderBottom: Border;
  width: Size;
  bigCentered: boolean;
  extraboldTitle: boolean;
  title?: string;
  subtitle?: string;
}

const Title: types.Brick<TitleProps> = ({
  bigCentered,
  extraboldTitle,
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  width,
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
        <TitleSubtitle
          title={title}
          subtitle={subtitle}
          bigCentered={bigCentered}
          extraboldTitle={extraboldTitle}
        />
      </Container>
    </Section>
  );
};

export default Title;
