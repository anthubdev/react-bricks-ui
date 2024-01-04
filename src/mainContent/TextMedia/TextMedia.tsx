import classNames from "classnames";
import React from "react";
import { Image, Link, Repeater, RichText, types } from "../../shared";
import { textColors } from "../../colors";
import Container from "../../shared/components/Container";
import Section from "../../shared/components/Section";
import { LayoutProps } from "../../LayoutSideProps";
import Video from "../../shared/components/Video";
import { BadgeProps } from "../../shared/bricks/Badge";
import { TextMediaLogoProps } from "./TextMediaLogo";
import { ButtonProps } from "../../shared/bricks/Button";
import BulletListItem, {
  BulletListItemProps,
} from "../../shared/bricks/BulletListItem";

export interface TextMediaProps extends LayoutProps {
  mediaType: "image" | "multiple-images" | "video-file" | "video-streaming";
  imageSide: "left" | "right";
  bigImage?: boolean;
  mobileImageTop?: boolean;
  mobileIcon?: boolean;
  hasShadow?: boolean;
  isRounded?: boolean;
  extraBoldTitle?: boolean;
  bigText?: boolean;
  heroSizeTitle?: boolean;
  platform?: "youtube" | "vimeo";
  videoId?: string;
  title: string;
  text: string;
  imageSource?: types.IImageSource;
  buttons?: ButtonProps[];
  bulletListItems?: BulletListItemProps[];
  badge?: BadgeProps[];
  logos?: TextMediaLogoProps[];
}

const TextMedia: types.Brick<TextMediaProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  imageSide,
  bigImage,
  mobileImageTop,
  mobileIcon,
  hasShadow,
  isRounded,
  extraBoldTitle,
  bigText,
  heroSizeTitle,
  mediaType,
  platform,
  videoId,
  title,
  text,
  imageSource,
  bulletListItems,
}) => {
  const titleColor = textColors.GRAY_900;
  const textColor = textColors.GRAY_700;

  return (
    <Section
      backgroundColor={backgroundColor}
      borderTop={borderTop}
      borderBottom={borderBottom}
      noOverflowX={!!bigImage}
    >
      <Container paddingTop={paddingTop} paddingBottom={paddingBottom}>
        <div
          className={classNames(
            "flex sm:justify-between items-center",
            mobileImageTop ? "flex-col-reverse" : "flex-col",
            imageSide === "right" ? "md:flex-row" : "md:flex-row-reverse"
          )}
        >
          <div
            className={classNames("w-full md:w-2/5 lg:pr-[5%] flex flex-col")}
          >
            <Repeater
              propName="badge"
              itemProps={{ textAlign: "left" }}
              renderWrapper={(items) => (
                <div className="mb-4 flex justify-center md:justify-start">
                  {items}
                </div>
              )}
            />
            <RichText
              propName="title"
              value={title}
              renderBlock={(props) => (
                <h2
                  className={classNames(
                    "mt-0 text-center md:text-left text-2xl leading-7",
                    heroSizeTitle
                      ? "md:text-[40px] md:leading-tight"
                      : "md:text-[32px] md:leading-tight",
                    extraBoldTitle ? "font-extrabold" : "font-bold",
                    bigText ? "mb-4" : "mb-3",
                    titleColor
                  )}
                  {...props.attributes}
                >
                  {props.children}
                </h2>
              )}
              placeholder="Type a title..."
              allowedFeatures={[types.RichTextFeatures.Highlight]}
            />
            <RichText
              propName="text"
              value={text}
              renderBlock={(props) => (
                <p
                  className={classNames(
                    "leading-7 mb-3 text-center md:text-left",
                    { "md:text-xl md:leading-8": bigText },
                    textColor
                  )}
                  {...props.attributes}
                >
                  {props.children}
                </p>
              )}
              placeholder="Type a text..."
              allowedFeatures={[
                types.RichTextFeatures.Bold,
                types.RichTextFeatures.Link,
              ]}
              renderLink={({ children, href }) => (
                <Link
                  href={href}
                  className="inline-block text-sky-500 hover:text-sky-600 hover:-translate-y-px transition-all ease-out duration-150"
                >
                  {children}
                </Link>
              )}
            />
            <Repeater
              propName="bulletListItems"
              items={bulletListItems}
              itemBuilder={(props) => <BulletListItem {...props} />}
              itemProps={{
                className: bigText ? "text-lg" : "text-base",
              }}
              renderWrapper={(items) => (
                <div className="mt-4 grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-1">
                  {items}
                </div>
              )}
            />
            <Repeater
              propName="buttons"
              renderWrapper={(items) => (
                <div className="flex items-center space-x-4 mt-4">{items}</div>
              )}
            />
          </div>
          {mediaType === "multiple-images" ? (
            <div
              className={classNames(
                "grid grid-cols-3 gap-6",
                mobileImageTop ? "mt-0 mb-10" : "mt-10 mb-0",
                "md:w-1/2 md:mt-0 md:mb-0"
              )}
            >
              <Repeater propName="logos" />
            </div>
          ) : mediaType === "image" ? (
            <div
              className={classNames(
                mobileIcon ? "w-24" : "w-full",
                mobileImageTop ? "mt-0 mb-10" : "mt-10 mb-0",
                "md:w-1/2 md:mt-0 md:mb-0"
              )}
            >
              <Image
                propName="imageSource"
                source={imageSource}
                alt="Image"
                imageClassName={classNames(
                  { "rounded-lg": isRounded },
                  { "shadow-2xl": hasShadow },
                  {
                    "md:h-[500px] md:max-w-none object-cover":
                      bigImage && imageSide === "right",
                  }
                )}
              />
            </div>
          ) : mediaType === "video-file" ? (
            <Video
              type="file"
              className={classNames(
                mobileImageTop ? "mt-0 mb-10" : "mt-10 mb-0",
                "w-full md:w-1/2 md:mt-0 md:mb-0"
              )}
            />
          ) : (
            <Video
              type="streaming"
              platform={platform}
              videoId={videoId}
              className={classNames(
                mobileImageTop ? "mt-0 mb-10" : "mt-10 mb-0",
                "w-full md:w-1/2 md:mt-0 md:mb-0"
              )}
            />
          )}
        </div>
      </Container>
    </Section>
  );
};

export default TextMedia;
