import React from "react";
import ReactBricksApp, { usePageViewer } from "./ReactBricksApp";
import blockNames from "../blockNames";
import { FormBuilderProps } from "../contacts/FormBuilder/FormBuilder";

const FormBuilder = (props: FormBuilderProps) => {
  return (
    <ReactBricksApp>
      {usePageViewer([
        {
          id: "",
          type: blockNames.FormBuilder,
          props: {
            ...props,
            "form-elements": props["form-elements"].map((x) => {
              return { type: x.type || blockNames.FormInput, props: x };
            }),
            "form-buttons": props["form-buttons"].map((x) => {
              return { type: blockNames.Button, props: x };
            }),
          },
        },
      ])}
    </ReactBricksApp>
  );
};

export default FormBuilder;
