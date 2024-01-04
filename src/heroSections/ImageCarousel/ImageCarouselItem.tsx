import React from "react";
import { Image, types, useAdminContext } from "../../shared";

interface Props {
  adaptAspectRatio?: boolean;
  slidesToShow?: number;
  image?: types.IImageSource;
}

const ImageCarouselItem: types.Brick<Props> = ({
  adaptAspectRatio,
  slidesToShow = 1,
  image,
}) => {
  let aspectRatioProp = {};

  if (adaptAspectRatio) {
    if (slidesToShow === 1) {
      aspectRatioProp = { aspectRatio: 4 };
    }
    if (slidesToShow === 2) {
      aspectRatioProp = { aspectRatio: 2 };
    }
    if (slidesToShow > 2) {
      aspectRatioProp = { aspectRatio: 1 };
    }
  }

  const { isAdmin } = useAdminContext();

  return (
    <div className={`${isAdmin && "p-6 m-2 hover:bg-gray-100"}`}>
      <Image
        propName="image"
        source={image}
        alt="altText"
        maxWidth={1200}
        imageClassName={`w-full h-32 sm:h-48 md:h-72 object-cover object-center transition-all duration-300`}
        {...aspectRatioProp}
      />
    </div>
  );
};

export default ImageCarouselItem;
