import React from "react";
import ReactBricksApp, { usePageViewer } from "./ReactBricksApp";
import blockNames from "../blockNames";
import { FeaturesProps } from "../mainContent/Features/Features";

const Features = (props: FeaturesProps) => {
  return (
    <ReactBricksApp>
      {usePageViewer([
        {
          id: "",
          type: blockNames.Features,
          props: {
            ...props,
            features: props.features.map((x) => {
              return { type: blockNames.FeatureItem, props: x };
            }),
          },
        },
      ])}
    </ReactBricksApp>
  );
};

export default Features;
