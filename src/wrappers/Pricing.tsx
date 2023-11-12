import React from "react";
import ReactBricksApp, { usePageViewer } from "./ReactBricksApp";
import blockNames from "../blockNames";
import { PricingProps } from "../pricing/Pricing";

const Pricing = (props: PricingProps) => {
  return (
    <ReactBricksApp>
      {usePageViewer([
        {
          id: "",
          type: blockNames.Pricing,
          props: {
            ...props,
            plans: props.plans.map((x) => {
              return { type: blockNames.PricingPlan, props: x };
            }),
          },
        },
      ])}
    </ReactBricksApp>
  );
};

export default Pricing;
