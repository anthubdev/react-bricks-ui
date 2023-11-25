import React from "react";
import ReactBricksApp, { usePageViewer } from "./ReactBricksApp";
import blockNames from "../blockNames";
import { BlogTitleProps } from "../singleColumnContent/BlogTitle/BlogTitle";

const BlogTitle = (props: BlogTitleProps) => {
  return (
    <ReactBricksApp>
      {usePageViewer([
        {
          id: "",
          type: blockNames.BlogTitle,
          props: props,
        },
      ])}
    </ReactBricksApp>
  );
};

export default BlogTitle;
