import React from "react";
import classNames from "classnames";
import { FiCheck } from "react-icons/fi";
import { Text, types } from "../../shared";
import { highlightBgColors } from "../../colors";

export interface BulletListItemProps {
  bulletColor?: { color: string; className: string };
  className?: string;
  attributes?: string;
  text?: string | types.TextElement[];
}

const BulletListItem: types.Brick<BulletListItemProps> = ({
  bulletColor = highlightBgColors.SKY.value,
  className,
  text
}) => {
  return (
    <div
      className={classNames(
        "flex justify-center md:justify-start items-center",
        className
      )}
    >
      <div
        className={classNames(
          "flex-shrink-0 flex justify-center items-center w-5 h-5 rounded-full mr-3 text-sm",
          bulletColor.className
        )}
      >
        <FiCheck />
      </div>
      <div>
        <Text
          propName="text"
          value={text}
          renderBlock={(props) => (
            <span
              className="text-gray-700 dark:text-gray-100 leading-tight inline-block min-w-[120px]"
              {...props.attributes}
            >
              {props.children}
            </span>
          )}
          placeholder="Type..."
        />
      </div>
    </div>
  );
};

export default BulletListItem;
