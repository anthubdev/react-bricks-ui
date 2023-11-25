import React from "react";
import ReactBricksApp, { usePageViewer } from "./ReactBricksApp";
import blockNames from "../blockNames";
import { TableProps } from "../singleColumnContent/Table/Table";

const Table = (props: TableProps) => {
  return (
    <ReactBricksApp>
      {usePageViewer([
        {
          id: "",
          type: blockNames.Table,
          props: {
            ...props,
            rows: props.rows.map((x) => {
              return { type: blockNames.TableRow, props: x };
            }),
          },
        },
      ])}
    </ReactBricksApp>
  );
};

export default Table;
