import React from "react";
import ReactBricksApp, { usePageViewer } from "./ReactBricksApp";
import blockNames from "../blockNames";
import { TestimonialProps } from "../testimonials/Testimonial/Testimonial";

const Testimonial = (props: TestimonialProps) => {
  return (
    <ReactBricksApp>
      {usePageViewer([
        {
          id: "",
          type: blockNames.Testimonial,
          props: props,
        },
      ])}
    </ReactBricksApp>
  );
};

export default Testimonial;
