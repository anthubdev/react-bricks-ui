import React from "react";
import ReactBricksApp, { usePageViewer } from "./ReactBricksApp";
import blockNames from "../blockNames";
import { Team2ColsProps } from "../team/Team2Cols/Team2Cols";

const Team2Cols = (props: Team2ColsProps) => {
  return (
    <ReactBricksApp>
      {usePageViewer([
        {
          id: "",
          type: blockNames.Team2Cols,
          props: {
            ...props,
            members: props.members.map((x) => {
              return { type: blockNames.Team2ColsItem, props: x };
            }),
          },
        },
      ])}
    </ReactBricksApp>
  );
};

export default Team2Cols;
