import React from "react";
import ReactBricksApp, { usePageViewer } from "./ReactBricksApp";
import blockNames from "../blockNames";
import { CustomersProps } from "../logos/Customers/Customers";

const Customers = (props: CustomersProps) => {
  return (
    <ReactBricksApp>
      {usePageViewer([
        {
          id: "",
          type: blockNames.Customers,
          props: {
            ...props,
            customers: props.customers.map((x) => {
              return { type: blockNames.Customer, props: x };
            }),
          },
        },
      ])}
    </ReactBricksApp>
  );
};

export default Customers;
