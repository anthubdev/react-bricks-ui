import React from "react";
import { Image, types } from "react-bricks/frontend";
import blockNames from "../../blockNames";

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

TextMediaLogo.schema = {
  name: blockNames.TextMediaLogo,
  label: "Logo",
  category: "Main Content",
  hideFromAddMenu: true,
  playgroundLinkLabel: "View source code on Github",
  playgroundLinkUrl:
    "https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/TextImage/TextMediaLogo.tsx",
};

export default TextMediaLogo;
