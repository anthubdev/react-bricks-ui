import React from "react";
import classNames from "classnames";
import { Repeater, types } from "../shared";
import Container from "../shared/components/Container";
import Section from "../shared/components/Section";
import { LayoutProps } from "../LayoutSideProps";
import Document, { DocumentProps } from "./Document";

export interface DocumentsProps extends LayoutProps {
  documents: DocumentProps[];
}

const Documents: types.Brick<DocumentsProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  width,
  documents,
}) => {
  return (
    <Section
      backgroundColor={backgroundColor}
      borderTop={borderTop}
      borderBottom={borderBottom}
    >
      <Container
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        size={width}
        className={classNames(
          "grid gap-[30px] grid-cols-1",
          width === "small" ? "lg:grid-cols-2" : "md:grid-cols-2"
        )}
      >
        <Repeater
          propName="documents"
          items={documents}
          itemBuilder={(props) => <Document {...props} />}
        />
      </Container>
    </Section>
  );
};

export default Documents;
