import React from "react";
import ReactBricksApp, { usePageViewer } from "./ReactBricksApp";
import blockNames from "../blockNames";
import { TweetLightProps } from "../singleColumnContent/Tweet/TweetLight";

const TweetLight = (props: TweetLightProps) => {
  return (
    <ReactBricksApp>
      {usePageViewer([
        {
          id: "",
          type: blockNames.TweetLight,
          props: props,
        },
      ])}
    </ReactBricksApp>
  );
};

export default TweetLight;
