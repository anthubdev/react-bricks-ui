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
          type: blockNames.HeroUnit2,
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
