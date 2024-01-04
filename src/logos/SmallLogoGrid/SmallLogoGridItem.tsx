import React from "react";
import { Image, Link, types } from "../../shared";

export interface SmallLogoGridItemProps {
  link?: string;
  targetBlank?: boolean;
  image?: types.IImageSource;
}

const SmallLogoGridItem: types.Brick<SmallLogoGridItemProps> = ({
  link,
  targetBlank,
  image,
}) => {
  return (
    <Link
      href={link!}
      target={targetBlank ? "_blank" : "_self"}
      className="rounded-md p-1"
    >
      <div className="content-none pb-[100%] relative">
        <Image
          propName="image"
          source={image}
          alt="customer"
          imageClassName="absolute top-0 left-0 w-full h-full object-contain"
        />
      </div>
    </Link>
  );
};

export default SmallLogoGridItem;
