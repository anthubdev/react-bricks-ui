import React from "react";
import classNames from "classnames";
import { Repeater, RichText, types } from "../../shared";
import { LayoutProps } from "../../LayoutSideProps";
import { gradients, highlightTextColors, textColors } from "../../colors";
import Container from "../../shared/components/Container";
import Section from "../../shared/components/Section";
import Button, { ButtonProps } from "../../shared/bricks/Button";
import Badge, { BadgeProps } from "../../shared/bricks/Badge";

export interface HeroUnitProps extends LayoutProps {
  size: "medium" | "large";
  textGradient: keyof typeof gradients;
  highlightTextColor: { color: string; className: string };
  title:
    | [{ type: string; children: { text: string; highlight?: boolean }[] }]
    | string;
  text: string;
  badge?: BadgeProps[];
  buttons: ButtonProps[];
}

const HeroUnit: types.Brick<HeroUnitProps> = ({
  backgroundColor,
  backgroundImage,
  backgroundImageDark,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  size = "large",
  textGradient = gradients.NONE.value,
  highlightTextColor = highlightTextColors.LIME.value,
  badge,
  title,
  text,
  buttons,
}: HeroUnitProps) => {
  const titleColor = textColors.GRAY_800;
  const textColor = textColors.GRAY_700;
  const titleStyle =
    textGradient !== gradients.NONE.value
      ? { WebkitTextFillColor: "transparent" }
      : {};

  return (
    <Section
      backgroundColor={backgroundColor}
      backgroundImage={backgroundImage}
      backgroundImageDark={backgroundImageDark}
      borderTop={borderTop}
      borderBottom={borderBottom}
    >
      <Container paddingTop={paddingTop} paddingBottom={paddingBottom}>
        <div className="max-w-xl mx-auto px-5">
          <Repeater
            propName="badge"
            items={badge}
            itemBuilder={(props) => <Badge {...props} />}
            renderWrapper={(items) => <div className="mb-4">{items}</div>}
          />

          <div
            className={classNames(
              titleColor,
              gradients[textGradient]?.className
            )}
            style={titleStyle}
          >
            <RichText
              renderBlock={(props) => (
                <h1
                  className={classNames(
                    "text-[28px] leading-8 sm:text-[40px] sm:leading-tight text-center font-extrabold mb-4 pb-1 bg-clip-text bg-gradient-to-r",
                    { "lg:text-5xl lg:leading-snug": size === "large" },
                    titleColor
                  )}
                  {...props.attributes}
                >
                  {props.children}
                </h1>
              )}
              allowedFeatures={[types.RichTextFeatures.Highlight]}
              placeholder="Type a title..."
              propName="title"
              value={title}
              renderHighlight={({ children }) => (
                <span className={highlightTextColor.className}>{children}</span>
              )}
            />
          </div>

          <RichText
            renderBlock={(props) => (
              <p
                className={classNames(
                  "text-base leading-6 sm:text-xl sm:leading-8 text-center",
                  textColor
                )}
                {...props.attributes}
              >
                {props.children}
              </p>
            )}
            placeholder="Type a text..."
            propName="text"
            value={text}
            allowedFeatures={[
              types.RichTextFeatures.Bold,
              types.RichTextFeatures.Link,
            ]}
          />
          <Repeater
            propName="buttons"
            items={buttons}
            itemBuilder={(props) => <Button {...props} />}
            renderWrapper={(items) => (
              <div className="flex flex-row space-x-5 items-center justify-center mt-6">
                {items}
              </div>
            )}
          />
        </div>
      </Container>
    </Section>
  );
};

export default HeroUnit;
