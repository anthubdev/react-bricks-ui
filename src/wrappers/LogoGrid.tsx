import React from "react";
import ReactBricksApp, { usePageViewer } from "./ReactBricksApp";
import blockNames from "../blockNames";
import { LogoGridProps } from "../logos/LogoGrid/LogoGrid";

const LogoGrid = (props: LogoGridProps) => {
  return (
    <ReactBricksApp>
      {usePageViewer([
        {
          id: "",
          type: blockNames.LogoGrid,
          props: {
            ...props,
            badge: props.badge.map((x) => {
              return { type: blockNames.Badge, props: x };
            }),
            logos: props.logos.map((x) => {
              return { type: blockNames.LogoGridItem, props: x };
            }),
          },
        },
      ])}
    </ReactBricksApp>
  );
};

export default LogoGrid;
