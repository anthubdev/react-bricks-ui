import React from "react";
import classNames from "classnames";
import { Text, types } from "../../shared";
import { textColors } from "../../colors";

type TextAlign = "left" | "center" | "right";

export interface TableCellProps {
  isHeader?: boolean;
  textAlign?: TextAlign;
  borders?: "none" | "horizontal" | "all";
  text?: string;
  cellText?: string;
}

const getAlignClass = (textAlign: TextAlign) => {
  switch (textAlign) {
    case "left":
      return "text-left";
    case "center":
      return "text-center";
    case "right":
      return "text-right";
  }
};

const TableCell: types.Brick<TableCellProps> = ({
  isHeader = false,
  textAlign = "left",
  borders,
  cellText,
}) => {
  if (isHeader) {
    return (
      <th
        className={classNames(
          "py-3 px-4",
          { "border border-black/10 dark:border-white/20": borders === "all" },
          getAlignClass(textAlign)
        )}
      >
        <Text
          propName="cellText"
          value={cellText}
          placeholder=""
          renderBlock={({ children }) => (
            <span className={textColors.GRAY_900}>{children}</span>
          )}
        />
      </th>
    );
  }

  return (
    <td
      className={classNames(
        "py-3 px-4",
        { "border border-black/10 dark:border-white/20": borders === "all" },
        textColors.GRAY_600,
        getAlignClass(textAlign)
      )}
    >
      <Text
        propName="cellText"
        value={cellText}
        placeholder=""
        renderBlock={({ children }) => <span>{children}</span>}
      />
    </td>
  );
};

export default TableCell;
