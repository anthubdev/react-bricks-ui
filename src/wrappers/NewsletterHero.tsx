import React from "react";
import ReactBricksApp, { usePageViewer } from "./ReactBricksApp";
import blockNames from "../blockNames";
import { FooterProps } from "../layout/Footer";

const NewsletterHero = (props: FooterProps) => {
  return (
    <ReactBricksApp>
      {usePageViewer([
        {
          id: "",
          type: blockNames.NewsletterHero,
          props: props,
        },
      ])}
    </ReactBricksApp>
  );
};

export default NewsletterHero;
