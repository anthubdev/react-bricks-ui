import React from "react";
import ReactBricksApp, { usePageViewer } from "./ReactBricksApp";
import blockNames from "../blockNames";
import { BadgeProps } from "../shared/bricks/Badge";

const Badge = (props: BadgeProps) => {
  return (
    <ReactBricksApp>
      {usePageViewer([
        {
          id: "",
          type: blockNames.Badge,
          props: props,
        },
      ])}
    </ReactBricksApp>
  );
};

export default Badge;
