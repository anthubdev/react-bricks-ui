import React from "react";
import ReactBricksApp, { usePageViewer } from "./ReactBricksApp";
import blockNames from "../blockNames";
import { NewsletterSubscribeProps } from "../cta/NewsletterSubscribe/NewsletterSubscribe";

const NewsletterSubscribe = (props: NewsletterSubscribeProps) => {
  return (
    <ReactBricksApp>
      {usePageViewer([
        {
          id: "",
          type: blockNames.NewsletterSubscribe,
          props: props,
        },
      ])}
    </ReactBricksApp>
  );
};

export default NewsletterSubscribe;
