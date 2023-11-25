import React from "react";
import ReactBricksApp, { usePageViewer } from "./ReactBricksApp";
import blockNames from "../blockNames";
import { TitleProps } from "../singleColumnContent/Title/Title";

const Title = (props: TitleProps) => {
  return (
    <ReactBricksApp>
      {usePageViewer([
        {
          id: "",
          type: blockNames.Title,
          props: props,
        },
      ])}
    </ReactBricksApp>
  );
};

export default Title;
