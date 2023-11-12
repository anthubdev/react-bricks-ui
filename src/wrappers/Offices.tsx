import React from "react";
import ReactBricksApp, { usePageViewer } from "./ReactBricksApp";
import blockNames from "../blockNames";
import { OfficesProps } from "../contacts/Offices/Offices";

const Offices = (props: OfficesProps) => {
  return (
    <ReactBricksApp>
      {usePageViewer([
        {
          id: "",
          type: blockNames.Offices,
          props: {
            ...props,
            offices: props.offices.map((x) => {
              return { type: blockNames.Office, props: x };
            }),
          },
        },
      ])}
    </ReactBricksApp>
  );
};

export default Offices;
