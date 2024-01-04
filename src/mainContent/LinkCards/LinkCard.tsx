import React from "react";
import classNames from "classnames";
import { types } from "../../shared";
import { Text, Image, Link } from "../../shared";
import { textColors } from "../../colors";

export interface LinkCardProps {
  withIcon?: boolean;
  withTitle?: boolean;
  withLink?: boolean;
  linkPath?: string;
  icon?: types.IImageSource;
  title?: string;
  text?: string;
}

const LinkCard: types.Brick<LinkCardProps> = ({
  withIcon,
  withTitle,
  linkPath,
  title,
  text,
  icon,
}) => {
  return (
    <div>
      <Link
        href={linkPath || ""}
        className={classNames(
          "flex items-center border border-black/10 dark:border-white/10 bg-white dark:bg-white/10 p-5 rounded group hover:-translate-y-[3px] hover:border-sky-500/50 hover:shadow-lg hover:text-sky-600 transition-all ease-out duration-150",
          textColors.GRAY_800
        )}
      >
        {withIcon && (
          <Image
            propName="icon"
            source={icon}
            alt="logo"
            imageClassName={`w-10 h-10 object-contain ml-0.5 mr-4`}
          />
        )}

        <div className="w-full">
          {withTitle && (
            <Text
              renderBlock={(props) => (
                <div className="font-bold">{props.children}</div>
              )}
              placeholder="Title..."
              propName="title"
              value={title}
            />
          )}

          <Text
            renderBlock={(props) => <div>{props.children}</div>}
            placeholder="Text..."
            propName="text"
            value={text}
          />
        </div>
      </Link>
    </div>
  );
};

export default LinkCard;
