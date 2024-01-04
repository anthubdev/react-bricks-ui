import React from "react";
import classNames from "classnames";
import { Text, Link, useAdminContext, types } from "../../shared";
import { buttonColors } from "../../colors";

export interface ButtonProps {
  id?: string;
  type?: "button" | "link";
  text?: string | types.TextElement[];
  href?: string;
  isTargetBlank?: boolean;
  buttonType?: "submit" | "button" | "reset";
  buttonColor?: {
    color: string;
    classNameSolid: string;
    classNameOutline: string;
    classNameGhost: string;
  };
  variant?: "solid" | "outline" | "ghost";
  padding?: "normal" | "small";
  className?: string;
  simpleAnchorLink?: boolean;
}

const Button: types.Brick<ButtonProps> = ({
  type,
  href,
  isTargetBlank,
  buttonType,
  buttonColor = buttonColors.SKY.value,
  variant,
  padding,
  className,
  simpleAnchorLink = false,
  text,
}) => {
  const { isAdmin, previewMode } = useAdminContext();

  const target = isTargetBlank
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  if (type === "link") {
    return (
      <Link
        href={href || ""}
        {...target}
        className={classNames(
          "inline-block whitespace-nowrap text-center rounded-full font-bold leading-none hover:shadow-lg transition-all ease-out duration-150 hover:-translate-y-0.5",
          padding === "small"
            ? "py-2 px-4 text-sm min-w-[75px]"
            : "py-3 px-5 min-w-[120px]",
          {
            [buttonColor.classNameSolid]: variant === "solid",
          },
          {
            [buttonColor.classNameOutline]: variant === "outline",
          },
          {
            [buttonColor.classNameGhost]: variant === "ghost",
          },
          className
        )}
        simpleAnchor={simpleAnchorLink}
      >
        <Text
          propName="text"
          value={text}
          placeholder="Action"
          renderBlock={({ children }) => <span>{children}</span>}
        />
      </Link>
    );
  }

  // Button

  return (
    <button
      type={isAdmin && !previewMode ? "button" : buttonType}
      //disabled={isAdmin && !previewMode}
      className={classNames(
        "inline-block whitespace-nowrap text-center rounded-full font-bold leading-none hover:shadow-lg transition-all ease-out duration-150 hover:-translate-y-0.5",
        padding === "small"
          ? "py-2 px-4 text-sm min-w-[75px]"
          : "py-3 px-5 min-w-[120px]",
        {
          [buttonColor?.classNameSolid]: variant === "solid",
        },
        {
          [buttonColor?.classNameOutline]: variant === "outline",
        },
        {
          [buttonColor?.classNameGhost]: variant === "ghost",
        },
        className
      )}
    >
      <Text
        propName="text"
        value={text}
        placeholder="Action"
        renderBlock={({ children }) => <span>{children}</span>}
      />
    </button>
  );
};

export default Button;
