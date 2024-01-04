import React from "react";
import classNames from "classnames";
import { Image, types, Text, Link, Plain } from "../../shared";
import { textColors } from "../../colors";
import { ColsNumber } from "./Features";

export interface FeatureItemProps {
  title?: string;
  text?: string;
  image?: types.IImageSource;
  colsNumber?: ColsNumber;
  withIcon?: boolean;
  withLink?: boolean;
  linkText?: string;
  linkPath?: string;
}

const getColumnClass = (colsNumber: ColsNumber) => {
  switch (colsNumber) {
    case "2":
      return "sm:flex-[0_1_45%] mb-12 sm:mb-16";
    case "3":
      return "sm:flex-[0_1_27%] mb-12 sm:mb-16";
    case "4":
      return "sm:flex-[0_1_45%] lg:flex-[0_1_20.1%] mb-12 sm:mb-16";
  }
};

const FeatureItem: types.Brick<FeatureItemProps> = ({
  colsNumber,
  withIcon,
  withLink,
  linkText,
  linkPath,
  image,
  title,
  text,
}) => {
  const linkTextPlain =
    typeof linkText === "string"
      ? linkText
      : Plain.serialize(linkText || ("" as any));

  return (
    <div className={classNames("text-base", getColumnClass(colsNumber || "2"))}>
      {withIcon && (
        <Image
          propName="image"
          source={image}
          alt="feature"
          aspectRatio={1}
          imageClassName="block w-12 h-12 object-contain"
          renderWrapper={({ children }) => {
            return (
              <div className="float-left mr-5 mt-1 sm:float-none sm:mr-0 sm:mt-0 sm:mb-5">
                {children}
              </div>
            );
          }}
        />
      )}

      <div className="overflow-hidden">
        <Text
          propName="title"
          value={title}
          placeholder="Title..."
          renderBlock={(props) => (
            <div className={classNames("font-bold mb-1", textColors.GRAY_800)}>
              {props.children}
            </div>
          )}
        />
        <Text
          propName="text"
          value={text}
          placeholder="Text..."
          renderBlock={(props) => (
            <div className={textColors.GRAY_500}>{props.children}</div>
          )}
        />
        {withLink && (
          <div className="mt-2">
            <Link
              href={linkPath || ""}
              className={classNames(
                "cursor-pointer text-sky-500 hover:text-sky-600 hover:-translate-y-px transition-all ease-out duration-150",
                linkTextPlain ? "flex items-center space-x-1" : ""
              )}
            >
              <div>
                <Text
                  propName="linkText"
                  value={linkText}
                  renderBlock={(props) => <p>{props.children}</p>}
                  placeholder="Link..."
                />
              </div>
              <svg
                viewBox="0 0 14 14"
                width="14px"
                height="14px"
                className={classNames(
                  "w-[10px] h-[10px]",
                  linkTextPlain ? "inline-block" : "hidden"
                )}
              >
                <path
                  fill="currentColor"
                  d="m11.1 7.35-5.5 5.5a.5.5 0 0 1-.7-.7L10.04 7 4.9 1.85a.5.5 0 1 1 .7-.7l5.5 5.5c.2.2.2.5 0 .7Z"
                ></path>
              </svg>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeatureItem;
