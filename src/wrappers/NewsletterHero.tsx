import React from "react";
import ReactBricksApp, { usePageViewer } from "./ReactBricksApp";
import blockNames from "../blockNames";
import { NewsletterHeroProps } from "../cta/NewsletterHero/NewsletterHero";

const NewsletterHero = (props: NewsletterHeroProps) => {
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
