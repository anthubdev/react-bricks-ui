import React from "react";
import { Image, types } from "../../shared";

export interface TextMediaLogoProps {
  image: types.IImageSource;
}

const TextMediaLogo: types.Brick<TextMediaLogoProps> = () => {
  return (
    <div>
      <Image
        propName="image"
        alt="logo"
        imageClassName="w-20 h-20 lg:w-24 lg:h-24"
        renderWrapper={({ children }) => (
          <div className="flex justify-center items-center p-4">{children}</div>
        )}
      />
    </div>
  );
};

export default TextMediaLogo;
