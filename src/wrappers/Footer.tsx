import React from "react";
import ReactBricksApp, { usePageViewer } from "./ReactBricksApp";
import blockNames from "../blockNames";
import { FooterProps } from "../layout/Footer";

const Footer = (props: FooterProps) => {
  return (
    <ReactBricksApp>
      {usePageViewer([
        {
          id: "",
          type: blockNames.Footer,
          props: props,
        },
      ])}
    </ReactBricksApp>
  );
};

export default Footer;
