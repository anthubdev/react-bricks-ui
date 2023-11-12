import React from "react";
import ReactBricksApp, { usePageViewer } from "./ReactBricksApp";
import blockNames from "../blockNames";
import { FeatureCalloutProps } from "../mainContent/FeatureCallout/FeatureCallout";

const FeatureCallout = (props: FeatureCalloutProps) => {
  return (
    <ReactBricksApp>
      {usePageViewer([
        {
          id: "",
          type: blockNames.FeatureCallout,
          props: props,
        },
      ])}
    </ReactBricksApp>
  );
};

export default FeatureCallout;
