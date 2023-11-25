import React from "react";
import ReactBricksApp, { usePageViewer } from "./ReactBricksApp";
import blockNames from "../blockNames";
import { ParagraphProps } from "../singleColumnContent/Paragraph/Paragraph";

const Paragraph = (props: ParagraphProps) => {
  return (
    <ReactBricksApp>
      {usePageViewer([
        {
          id: "",
          type: blockNames.Paragraph,
          props: props,
        },
      ])}
    </ReactBricksApp>
  );
};

export default Paragraph;
