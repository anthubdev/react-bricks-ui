import React from "react";
import { Repeater, types } from "react-bricks/frontend";

import blockNames from "../../blockNames";
import Container from "../../shared/components/Container";
import Section from "../../shared/components/Section";
import {
  sectionDefaults,
  LayoutProps,
  neutralBackgroundSideGroup,
  paddingBordersSideGroup,
  containerWidthSideGroup,
} from "../../LayoutSideProps";
import { icons } from "../../shared/defaultImages";
import classNames from "classnames";
import TitleSubtitle from "../../shared/components/TitleSubtitle";
import { LinkCardProps } from "./LinkCard";

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
            className={classNames(bigCenteredTitle ? "mb-12" : "mb-8")}
            bigCentered={bigCenteredTitle}
          />
        )}
        <div className="grid gap-5 sm:grid-cols-2">
          <Repeater propName="cards" />
        </div>
      </Container>
    </Section>
  );
};
LinkCards.schema = {
  name: blockNames.LinkCards,
  label: "Link cards",
  category: "Main Content",
  tags: ["cards", "links", "thumbnails", "features", "banners"],
  playgroundLinkLabel: "View source code on Github",
  playgroundLinkUrl:
    "https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/Features/Features.tsx",
  previewImageUrl: `/bricks-preview-images/${blockNames.LinkCards}.png`,
  getDefaultProps: () => ({
    ...sectionDefaults,
    withTitle: true,
    bigCenteredTitle: true,
    title: "Why you will love React Bricks",
    subtitle:
      'We created React Bricks as a "one stop shop" to make everybody happy.',
    cards: [
      {
        title: "Visual editing",
        text: "The best UX on the market.",
        withLink: true,
        linkPath: "https://reactbricks.com/visual-editing-cms",
        withIcon: true,
        icon: icons.VISUAL_EDITING,
      },
      {
        title: "React components",
        text: "Add visual magic to your components.",
        withLink: true,
        linkPath: "https://reactbricks.com/react-cms",
        withIcon: true,
        icon: icons.COMPONENTS,
      },
      {
        title: "Multilanguage",
        text: "Internationalization? Built in.",
        withLink: false,
        linkPath: "",
        withIcon: true,
        icon: icons.MULTILANGUAGE,
      },
      {
        title: "Scheduled publishing",
        text: "Publish at midnight? Roger.",
        withLink: false,
        linkPath: "",
        withIcon: true,
        icon: icons.SCHEDULED_PUBLISHING,
      },
    ],
  }),
  repeaterItems: [
    {
      name: "cards",
      itemType: blockNames.LinkCard,
      itemLabel: "Card",
      min: 0,
      max: 8,
    },
  ],
  sideEditProps: [
    {
      groupName: "Title",
      defaultOpen: true,
      props: [
        {
          name: "withTitle",
          label: "With title",
          type: types.SideEditPropType.Boolean,
        },
        {
          name: "bigCenteredTitle",
          label: "Big centered",
          type: types.SideEditPropType.Boolean,
          show: (props) => !!props.withTitle,
        },
      ],
    },
    neutralBackgroundSideGroup,
    paddingBordersSideGroup,
    containerWidthSideGroup,
  ],
};
export default LinkCards;
