import React from "react";
import ReactBricksApp, { usePageViewer } from "./ReactBricksApp";
import blockNames from "../blockNames";
import { BigImageProps } from "../singleColumnContent/BigImage/BigImage";

const BigImage = (props: BigImageProps) => {
  return (
    <ReactBricksApp>
      {usePageViewer([
        {
          id: "",
          type: blockNames.BigImage,
          props: props,
        },
      ])}
    </ReactBricksApp>
  );
};

export default BigImage;
