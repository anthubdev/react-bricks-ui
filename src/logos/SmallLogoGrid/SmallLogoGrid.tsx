import React from "react";
import classNames from "classnames";
import { Repeater, types } from "../../shared";
import Container from "../../shared/components/Container";
import Section from "../../shared/components/Section";
import { LayoutProps } from "../../LayoutSideProps";
import Badge, { BadgeProps } from "../../shared/bricks/Badge";
import SmallLogoGridItem, { SmallLogoGridItemProps } from "./SmallLogoGridItem";

export interface SmallLogoGridProps extends LayoutProps {
  targetBlank: boolean;
  badge: BadgeProps[];
  logos: SmallLogoGridItemProps[];
}

const SmallLogoGrid: types.Brick<SmallLogoGridProps> = ({
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
            "grid gap-5 auto-rows-auto grid-cols-[repeat(auto-fit,_minmax(60px,_60px))]"
          )}
        >
          <Repeater
            propName="logos"
            items={logos}
            itemBuilder={(props) => <SmallLogoGridItem {...props} />}
            itemProps={{ targetBlank }}
          />
        </div>
      </Container>
    </Section>
  );
};

export default SmallLogoGrid;
