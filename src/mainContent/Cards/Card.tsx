import React from "react";
import classNames from "classnames";
import { Plain, types } from "../../shared";
import { RichText, Text, Image, Link } from "../../shared";
import { textColors } from "../../colors";

export interface CardProps {
  withIcon?: boolean;
  icon?: types.IImageSource;
  withTitle?: boolean;
  title?: string;
  description?: string | types.TextElement[];
  withLink?: boolean;
  linkText?: string;
  linkPath?: string;
}

const Card: types.Brick<CardProps> = ({
  withIcon,
  icon,
  withTitle,
  title,
  description,
  withLink,
  linkText,
  linkPath,
}) => {
  const linkTextPlain =
    typeof linkText === "string"
      ? linkText
      : Plain.serialize(linkText || ("" as any));

  return (
    <div
      className={`p-7 flex border border-black/10 dark:border-white/10 bg-white dark:bg-white/10 rounded`}
    >
      {withIcon && (
        <Image
          propName="icon"
          source={icon}
          alt="logo"
          imageClassName={`text-left object-contain w-10 h-10 mr-5`}
        />
      )}

      <div className="w-full">
        {withTitle && (
          <Text
            renderBlock={(props) => (
              <div
                className={classNames("font-bold mb-1", textColors.GRAY_800)}
              >
                {props.children}
              </div>
            )}
            placeholder="Title..."
            propName="title"
            value={title}
          />
        )}
        <RichText
          renderBlock={(props) => (
            <div
              className={classNames(
                "text-base font-normal",
                textColors.GRAY_600
              )}
            >
              {props.children}
            </div>
          )}
          placeholder="Description..."
          propName="description"
          value={description}
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
                  renderBlock={(props) => <p>{props.children}</p>}
                  placeholder="Link..."
                  propName="linkText"
                  value={linkText}
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

export default Card;
