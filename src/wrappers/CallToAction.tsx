import React from "react";
import ReactBricksApp, { usePageViewer } from "./ReactBricksApp";
import blockNames from "../blockNames";
import { CallToActionProps } from "../cta/CallToAction/CallToAction";

const CallToAction = (props: CallToActionProps) => {
  return (
    <ReactBricksApp>
      {usePageViewer([
        {
          id: "",
          type: blockNames.CallToAction,
          props: {
            ...props,
            buttons: props.buttons.map((x) => {
              return { type: blockNames.Button, props: x };
            }),
          },
        },
      ])}
    </ReactBricksApp>
  );
};

export default CallToAction;
