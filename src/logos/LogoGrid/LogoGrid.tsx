import React from "react";
import { Repeater, types } from "../../shared";
import classNames from "classnames";
import Container from "../../shared/components/Container";
import Section from "../../shared/components/Section";
import { LayoutProps } from "../../LayoutSideProps";
import Badge, { BadgeProps } from "../../shared/bricks/Badge";
import LogoGridItem, { LogoGridItemProps } from "./LogoGridItem";

export interface LogoGridProps extends LayoutProps {
  targetBlank: boolean;
  badge: BadgeProps[];
  logos: LogoGridItemProps[];
}

const LogoGrid: types.Brick<LogoGridProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  width,
  targetBlank,
  badge,
  logos,
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
        <Repeater
          propName="badge"
          items={badge}
          itemBuilder={(props) => <Badge {...props} />}
          itemProps={{
            textAlign: "left",
          }}
          renderWrapper={(items) => (
            <div className="mb-6 flex justify-start">{items}</div>
          )}
        />
        <div
          className={classNames(
            "grid gap-5 auto-rows-auto grid-flow-dense grid-cols-[repeat(auto-fill,_minmax(120px,_1fr))] lg:grid-cols-[repeat(auto-fill,_minmax(180px,_1fr))]"
          )}
        >
          <Repeater
            propName="logos"
            items={logos}
            itemBuilder={(props) => <LogoGridItem {...props} />}
            itemProps={{ targetBlank }}
          />
        </div>
      </Container>
    </Section>
  );
};

export default LogoGrid;
