import React from "react";
import { Repeater, types } from "../../shared";
import { LayoutProps } from "../../LayoutSideProps";
import Container from "../../shared/components/Container";
import Section from "../../shared/components/Section";
import TableRow, { TableRowProps } from "./TableRow";

export interface TableProps extends LayoutProps {
  striped: boolean;
  withHeader: boolean;
  borders: "none" | "horizontal" | "all";
  rows: TableRowProps[];
}

const Table: types.Brick<TableProps> = ({
  striped,
  withHeader,
  borders,
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  width,
  rows,
}) => {
  return (
    <Section
      backgroundColor={backgroundColor}
      borderTop={borderTop}
      borderBottom={borderBottom}
    >
      <Container
        size={width}
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
      >
        <table className="w-full border-collapse border-spacing-0.5 sm:overflow-x-auto">
          <Repeater
            propName="rows"
            items={rows}
            itemBuilder={(props) => <TableRow {...props} />}
            itemProps={{
              striped,
              withHeader,
              borders,
            }}
          />
        </table>
      </Container>
    </Section>
  );
};

export default Table;
