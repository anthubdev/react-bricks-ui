import React from "react";
import ReactBricksApp, { usePageViewer } from "./ReactBricksApp";
import blockNames from "../blockNames";
import { FaqProps } from "../Faq/Faq";

const Faqs2Cols = (props: FaqProps) => {
  return (
    <ReactBricksApp>
      {usePageViewer([
        {
          id: "",
          type: blockNames.Faqs2Cols,
          props: {
            ...props,
            faqs: props.faqs.map((x) => {
              return { type: blockNames.Faq, props: x };
            }),
          },
        },
      ])}
    </ReactBricksApp>
  );
};

export default Faqs2Cols;
