import React from "react";
import classNames from "classnames";
import { Repeater, types } from "../../shared";
import TableCell, { TableCellProps } from "./TableCell";

export interface TableRowProps {
  index?: number;
  striped?: boolean;
  withHeader?: boolean;
  borders?: "none" | "horizontal" | "all";
  cells?: TableCellProps[];
}

const TableRow: types.Brick<TableRowProps> = ({
  index,
  striped = false,
  withHeader = true,
  borders = "horizontal",
  cells,
}) => {
  if (withHeader && index === 0) {
    return (
      <thead className="text-xs text-gray-700 uppercase tracking-wide bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
        <tr className="align-middle">
          <Repeater
            propName="cells"
            items={cells}
            itemBuilder={(props) => <TableCell {...props} />}
            itemProps={{
              isHeader: true,
              borders,
            }}
          />
        </tr>
      </thead>
    );
  }

  return (
    <tbody>
      <tr
        className={classNames(
          "align-middle",
          {
            "border-b border-black/10 dark:border-white/20":
              borders === "horizontal",
          },
          (striped && index) || 0 % 2 === 0
            ? "bg-gray-50 dark:bg-gray-800"
            : "bg-white dark:bg-gray-900"
        )}
      >
        <Repeater
          propName="cells"
          items={cells}
          itemBuilder={(props) => <TableCell {...props} />}
          itemProps={{ borders }}
        />
      </tr>
    </tbody>
  );
};

export default TableRow;
