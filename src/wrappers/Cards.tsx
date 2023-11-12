import React from "react";
import ReactBricksApp, { usePageViewer } from "./ReactBricksApp";
import blockNames from "../blockNames";
import { CardsProps } from "../mainContent/Cards/Cards";

const Cards = (props: CardsProps) => {
  return (
    <ReactBricksApp>
      {usePageViewer([
        {
          id: "",
          type: blockNames.Cards,
          props: {
            ...props,
            cards: props.cards.map((x) => {
              return { type: blockNames.Card, props: x };
            }),
          },
        },
      ])}
    </ReactBricksApp>
  );
};

export default Cards;
