import React from "react";
import classNames from "classnames";
import { Text, types } from "../../shared";

export interface BadgeProps {
  text?: string | types.TextElement[];
  badgeColor?: { color: string; className: string };
  textAlign?: "left" | "center";
  className?: string;
}

const Badge: types.Brick<BadgeProps> = ({
  badgeColor,
  textAlign,
  className,
  text,
}) => {
  return (
    <div className="flex justify-center items-center">
      <Text
        value={text}
        renderBlock={(props) => (
          <span
            className={classNames(
              "text-sm font-extrabold uppercase inline-block min-w-[120px]",
              textAlign === "center" ? "text-center" : "text-left",
              badgeColor?.className,
              className
            )}
            style={{ letterSpacing: "0.35em" }}
          >
            {props.children}
          </span>
        )}
        placeholder="Badge..."
        propName="text"
      />
    </div>
  );
};

export default Badge;
