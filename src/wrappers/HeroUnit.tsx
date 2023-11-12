import React from "react";
import { HeroUnitProps } from "../heroSections/HeroUnit/HeroUnit";
import ReactBricksApp, { usePageViewer } from "./ReactBricksApp";
import blockNames from "../blockNames";

const HeroUnit = (props: HeroUnitProps) => {
  return (
    <ReactBricksApp>
      {usePageViewer([
        {
          id: "",
          type: blockNames.HeroUnit,
          props: {
            ...props,
            badge: props.badge?.map((x) => {
              return { type: blockNames.Badge, props: x };
            }),
            buttons: props.buttons.map((x) => {
              return { type: blockNames.Button, props: x };
            }),
          },
        },
      ])}
    </ReactBricksApp>
  );
};

export default HeroUnit;
