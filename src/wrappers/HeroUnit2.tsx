import React from "react";
import ReactBricksApp, { usePageViewer } from "./ReactBricksApp";
import blockNames from "../blockNames";
import { HeroUnitProps } from "../heroSections/HeroUnit2/HeroUnit2";

const HeroUnit2 = (props: HeroUnitProps) => {
  return (
    <ReactBricksApp>
      {usePageViewer([
        {
          id: "",
          type: blockNames.HeroUnit2,
          props: {
            ...props,
            badge: props.badge?.map((x) => {
              return { type: blockNames.Badge, props: x };
            }),
            buttons: props.buttons?.map((x) => {
              return { type: blockNames.Button, props: x };
            }),
          },
        },
      ])}
    </ReactBricksApp>
  );
};

export default HeroUnit2;
