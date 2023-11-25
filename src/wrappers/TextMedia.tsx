import React from "react";
import ReactBricksApp, { usePageViewer } from "./ReactBricksApp";
import blockNames from "../blockNames";
import { TextMediaProps } from "../mainContent/TextMedia/TextMedia";

const TextMedia = (props: TextMediaProps) => {
  return (
    <ReactBricksApp>
      {usePageViewer([
        {
          id: "",
          type: blockNames.TextMedia,
          props: {
            ...props,
            buttons: props.buttons?.map((x) => {
              return { type: blockNames.Button, props: x };
            }),
            bulletListItems: props.bulletListItems?.map((x) => {
              return { type: blockNames.BulletListItem, props: x };
            }),
            badge: props.badge?.map((x) => {
              return { type: blockNames.Badge, props: x };
            }),
            logos: props.logos?.map((x) => {
              return { type: blockNames.TextMedia, props: x };
            }),
          },
        },
      ])}
    </ReactBricksApp>
  );
};

export default TextMedia;
