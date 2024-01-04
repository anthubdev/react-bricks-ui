import React from "react";
import classNames from "classnames";
import { Repeater, RichText, types } from "../../shared";
import { LayoutProps } from "../../LayoutSideProps";
import { gradients, textColors } from "../../colors";
import Container from "../../shared/components/Container";
import Section from "../../shared/components/Section";
import Button, { ButtonProps } from "../../shared/bricks/Button";
import Badge, { BadgeProps } from "../../shared/bricks/Badge";

export interface HeroUnitProps extends LayoutProps {
  textGradient: keyof typeof gradients;
  highlightTextColor: { color: string; className: string };
  title:
    | [{ type: string; children: { text: string; highlight?: boolean }[] }]
    | string;
  text: string;
  badge?: BadgeProps[];
  buttons?: ButtonProps[];
}

const HeroUnit2: types.Brick<HeroUnitProps> = ({
  backgroundColor,
  backgroundImage,
  backgroundImageDark,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  textGradient,
  highlightTextColor,
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
        <div className="flex flex-col lg:flex-row items-start space-y-2 lg:space-x-14 lg:space-y-0">
          <div className="flex-1">
            <div className="lg:flex">
              <Repeater
                propName="badge"
                itemBuilder={(props) => <Badge {...props} />}
                items={badge}
                itemProps={{ textAlign: "left" }}
                renderWrapper={(items) => <div className="mb-4">{items}</div>}
              />
            </div>

            <div
              className={classNames(
                titleColor,
                gradients[textGradient]?.className
              )}
              style={titleStyle}
            >
              <RichText
                propName="title"
                value={title}
                renderBlock={(props) => (
                  <h1
                    className={classNames(
                      "text-[28px] leading-8 sm:text-[40px] sm:leading-tight lg:text-[44px] lg:leading-snug text-center lg:text-left font-extrabold mb-4 bg-clip-text bg-gradient-to-r   ",
                      titleColor
                    )}
                    {...props.attributes}
                  >
                    {props.children}
                  </h1>
                )}
                allowedFeatures={[types.RichTextFeatures.Highlight]}
                placeholder="Type a title..."
                renderHighlight={({ children }) => (
                  <span className={highlightTextColor.className}>
                    {children}
                  </span>
                )}
              />
            </div>
          </div>
          <div className="flex-1">
            <RichText
              value={text}
              renderBlock={(props) => (
                <p
                  className={classNames(
                    "text-center lg:text-left text-base leading-6 sm:text-xl sm:leading-8",
                    textColor
                  )}
                  {...props.attributes}
                >
                  {props.children}
                </p>
              )}
              placeholder="Type a text..."
              propName="text"
              allowedFeatures={[types.RichTextFeatures.Bold]}
            />
            <Repeater
              propName="buttons"
              items={buttons}
              itemBuilder={(props) => <Button {...props} />}
              renderWrapper={(items) => (
                <div className="flex flex-row space-x-5 items-center justify-center lg:justify-start mt-6">
                  {items}
                </div>
              )}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default HeroUnit2;
