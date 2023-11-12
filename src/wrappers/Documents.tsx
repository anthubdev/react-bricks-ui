import React from "react";
import ReactBricksApp, { usePageViewer } from "./ReactBricksApp";
import blockNames from "../blockNames";
import { DocumentsProps } from "../Documents/Documents";

const Documents = (props: DocumentsProps) => {
  return (
    <ReactBricksApp>
      {usePageViewer([
        {
          id: "",
          type: blockNames.Documents,
          props: {
            ...props,
            documents: props.documents.map((x) => {
              return { type: blockNames.Document, props: x };
            }),
          },
        },
      ])}
    </ReactBricksApp>
  );
};

export default Documents;
