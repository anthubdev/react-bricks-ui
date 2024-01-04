import React, { createElement } from "react";
import { types } from "../../types";

type ImageProps = {
  propName: string;
  source?: types.IImageSource;
  alt?: string;
  maxWidth?: number;
  imageClassName?: string;
  aspectRatio?: number;
  renderWrapper?: ({}: { children: React.ReactNode[] }) => React.ReactNode;
};

export const Image = (props: ImageProps) => {
  if (!props.source) {
    return null;
  }

  return createElement("img", {
    src: props.source.src,
    width: props.source.width,
    height: props.source.height,
    alt: props.source.alt,
    className: props.imageClassName,
    sizes: "100vw",
    loading: "lazy",
    decoding: "async",
    fetchPriority: "auto",
  });
};
