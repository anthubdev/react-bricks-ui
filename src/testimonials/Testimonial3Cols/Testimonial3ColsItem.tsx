import React from "react";
import { Image, Plain, Text, types } from "../../shared";
import { textColors } from "../../colors";

export interface Testimonial3ColsItemProps {
  authorName?: string;
  authorJobTitle?: string;
  avatarImage?: types.IImageSource;
  logoImage?: types.IImageSource;
  quote?: string;
}

const Testimonial3ColsItem: types.Brick<Testimonial3ColsItemProps> = ({
  authorName,
  authorJobTitle,
  avatarImage,
  quote,
}) => {
  return (
    <div>
      <Text
        renderBlock={(props) => (
          <blockquote className={`leading-7 mb-5 ${textColors.GRAY_700}`}>
            {props.children}
          </blockquote>
        )}
        placeholder="Quote..."
        renderPlaceholder={(props) => {
          return <span>{props.children}</span>;
        }}
        propName="quote"
        value={quote}
      />
      <cite className="flex items-center not-italic">
        <Image
          alt={
            typeof authorName === "string"
              ? authorName
              : Plain.serialize(authorName)
          }
          propName="avatarImage"
          source={avatarImage}
          aspectRatio={1}
          imageClassName="rounded-full w-10 h-10 object-contain"
        />

        <div className="ml-3 dark:text-gray-200 min-w-[90px]">
          <Text
            renderBlock={(props) => (
              <div className={`text-sm font-extrabold ${textColors.GRAY_800}`}>
                {props.children}
              </div>
            )}
            placeholder="Name..."
            propName="authorName"
            value={authorName}
          />
          <Text
            renderBlock={(props) => (
              <div className={`text-xs ${textColors.GRAY_600}`}>
                {props.children}
              </div>
            )}
            placeholder="Job title..."
            propName="authorJobTitle"
            value={authorJobTitle}
          />
        </div>
      </cite>
    </div>
  );
};

export default Testimonial3ColsItem;
