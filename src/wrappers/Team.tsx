import React from "react";
import ReactBricksApp, { usePageViewer } from "./ReactBricksApp";
import blockNames from "../blockNames";
import { TeamProps } from "../team/Team/Team";

const Team = (props: TeamProps) => {
  return (
    <ReactBricksApp>
      {usePageViewer([
        {
          id: "",
          type: blockNames.HeroUnit2,
          props: {
            ...props,
            members: props.members.map((x) => {
              return { type: blockNames.TeamItem, props: x };
            }),
          },
        },
      ])}
    </ReactBricksApp>
  );
};

export default Team;
