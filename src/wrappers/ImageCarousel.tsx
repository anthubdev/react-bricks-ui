import React from "react";
import ReactBricksApp, { usePageViewer } from "./ReactBricksApp";
import blockNames from "../blockNames";
import { ImageCarouselProps } from "../heroSections/ImageCarousel/ImageCarousel";

const ImageCarousel = (props: ImageCarouselProps) => {
  return (
    <ReactBricksApp>
      {usePageViewer([
        {
          id: "",
          type: blockNames.ImageCarousel,
          props: {
            ...props,
            images: props.images.map((x) => {
              return { type: blockNames.ImageCarouselItem, props: x };
            }),
          },
        },
      ])}
    </ReactBricksApp>
  );
};

export default ImageCarousel;
