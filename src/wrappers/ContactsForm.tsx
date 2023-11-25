import React from "react";
import ReactBricksApp, { usePageViewer } from "./ReactBricksApp";
import blockNames from "../blockNames";
import { ContactsFormProps } from "../contacts/ContactsForm/ContactsForm";

const ContactsForm = (props: ContactsFormProps) => {
  return (
    <ReactBricksApp>
      {usePageViewer([
        {
          id: "",
          type: blockNames.ContactsForm,
          props: {
            ...props,
            form: props.form?.map((x) => {
              return { type: blockNames.FormBuilder, props: x };
            }),
          },
        },
      ])}
    </ReactBricksApp>
  );
};

export default ContactsForm;
