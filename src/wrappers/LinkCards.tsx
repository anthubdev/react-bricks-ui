import React from "react";
import ReactBricksApp, { usePageViewer } from "./ReactBricksApp";
import blockNames from "../blockNames";
import { LinkCardsProps } from "../mainContent/LinkCards/LinkCards";

const LinkCards = (props: LinkCardsProps) => {
  return (
    <ReactBricksApp>
      {usePageViewer([
        {
          id: "",
          type: blockNames.Cards,
          props: {
            ...props,
            cards: props.cards.map((x) => {
              return { type: blockNames.LinkCard, props: x };
            }),
          },
        },
      ])}
    </ReactBricksApp>
  );
};

export default LinkCards;
