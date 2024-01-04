import React from "react";
import classNames from "classnames";
import { Repeater, Text, types } from "../../shared";
import { LayoutProps } from "../../LayoutSideProps";
import { textColors } from "../../colors";
import Container from "../../shared/components/Container";
import Section from "../../shared/components/Section";
import Button, { ButtonProps } from "../../shared/bricks/Button";

export interface CallToActionProps extends LayoutProps {
  text?: string;
  buttons: ButtonProps[];
}

const CallToAction: types.Brick<CallToActionProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  text,
  buttons,
}) => {
  return (
    <Section
      backgroundColor={backgroundColor}
      borderTop={borderTop}
      borderBottom={borderBottom}
    >
      <Container
        size="small"
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        className={classNames(
          "flex flex-col sm:flex-row items-center text-center sm:text-left"
        )}
      >
        <div className="flex-1 sm:pr-14 mb-4 sm:mb-0">
          <Text
            propName="text"
            value={text}
            renderBlock={(props) => (
              <span
                className={classNames(
                  "font-extrabold text-xl leading-6 sm:text-2xl sm:leading-7",
                  textColors.GRAY_800
                )}
                {...props.attributes}
              >
                {props.children}
              </span>
            )}
            placeholder="Call to action text"
          />
        </div>
        <div>
          <Repeater
            propName="buttons"
            items={buttons}
            itemBuilder={(props) => <Button {...props} />}
          />
        </div>
      </Container>
    </Section>
  );
};

export default CallToAction;
