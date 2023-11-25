import React from "react";
import ReactBricksApp, { usePageViewer } from "./ReactBricksApp";
import blockNames from "../blockNames";
import { CodeProps } from "../singleColumnContent/Code/Code";

const Code = (props: CodeProps) => {
  return (
    <ReactBricksApp>
      {usePageViewer([
        {
          id: "",
          type: blockNames.Code,
          props: props,
        },
      ])}
    </ReactBricksApp>
  );
};

export default Code;
