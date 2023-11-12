import React from "react";
import ReactBricksApp, { usePageViewer } from "./ReactBricksApp";
import blockNames from "../blockNames";
import { TestimonialProps } from "../testimonials/Testimonial3Cols/Testimonial3Cols";

const Testimonial3Cols = (props: TestimonialProps) => {
  return (
    <ReactBricksApp>
      {usePageViewer([
        {
          id: "",
          type: blockNames.Footer,
          props: {
            ...props,
            testimonials: props.testimonials.map((x) => {
              return { type: blockNames.Testimonial3ColsItem, props: x };
            }),
          },
        },
      ])}
    </ReactBricksApp>
  );
};

export default Testimonial3Cols;
