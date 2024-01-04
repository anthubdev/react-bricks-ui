import React from "react";
import classNames from "classnames";
import { Image, Link, types } from "../../shared";

export interface LogoGridItemProps {
  link?: string;
  targetBlank?: boolean;
  image?: types.IImageSource;
}

const LogoGridItem: types.Brick<LogoGridItemProps> = ({
  link,
  targetBlank,
  image,
}) => {
  return (
    <Link
      href={link!}
      target={targetBlank ? "_blank" : "_self"}
      className={classNames("bg-white border border-black/10 rounded-md p-4", {
        "hover:border-sky-500/50 transition-all duration-150 hover:shadow-lg hover:-translate-y-[3px]":
          link,
      })}
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

export default LogoGridItem;
