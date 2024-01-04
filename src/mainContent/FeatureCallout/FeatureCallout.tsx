import React from "react";
import classNames from "classnames";
import { Text, RichText, Image, types } from "../../shared";
import { textColors } from "../../colors";
import Section from "../../shared/components/Section";
import Container from "../../shared/components/Container";
import { LayoutProps } from "../../LayoutSideProps";

export interface FeatureCalloutProps extends LayoutProps {
  image?: types.IImageSource;
  title?: string;
  text?: string | types.TextElement[];
}

const FeatureCallout: types.Brick<FeatureCalloutProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  image,
  title,
  text,
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
        <div className="sm:mr-10 mb-4 sm:mb-0">
          <Image
            propName="image"
            source={image}
            alt="image"
            imageClassName="w-36 h-36 object-contain"
          />
        </div>
        <div className="flex-1">
          <Text
            propName="title"
            value={title}
            renderBlock={(props) => (
              <div
                className={classNames(
                  "font-extrabold text-xl leading-6 mb-1",
                  textColors.GRAY_900
                )}
                {...props.attributes}
              >
                {props.children}
              </div>
            )}
            placeholder="Title"
          />
          <RichText
            propName="text"
            value={text}
            renderBlock={(props) => (
              <span
                className={classNames("leading-6", textColors.GRAY_700)}
                {...props.attributes}
              >
                {props.children}
              </span>
            )}
            placeholder="Text"
            allowedFeatures={[types.RichTextFeatures.Link]}
          />
        </div>
      </Container>
    </Section>
  );
};

export default FeatureCallout;
