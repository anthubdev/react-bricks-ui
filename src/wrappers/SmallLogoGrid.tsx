import React from "react";
import ReactBricksApp, { usePageViewer } from "./ReactBricksApp";
import blockNames from "../blockNames";
import { SmallLogoGridProps } from "../logos/SmallLogoGrid/SmallLogoGrid";

const SmallLogoGrid = (props: SmallLogoGridProps) => {
  return (
    <ReactBricksApp>
      {usePageViewer([
        {
          id: "",
          type: blockNames.SmallLogoGrid,
          props: {
            ...props,
            badge: props.badge.map((x) => {
              return { type: blockNames.Badge, props: x };
            }),
            logos: props.logos.map((x) => {
              return { type: blockNames.SmallLogoGridItem, props: x };
            }),
          },
        },
      ])}
    </ReactBricksApp>
  );
};

export default SmallLogoGrid;
