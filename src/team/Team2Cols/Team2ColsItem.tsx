import React from "react";
import classNames from "classnames";
import { Text, Image, types, Plain } from "../../shared";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { textColors } from "../../colors";

export interface Team2ColsItemProps {
  title?: string;
  name?: string;
  twitter?: string;
  linkedin?: string;
  github?: string;
  picture?: types.IImageSource;
  jobTitle?: string;
}

const Team2ColsItem: types.Brick<Team2ColsItemProps> = ({
  title,
  name,
  picture,
  jobTitle,
  twitter,
  linkedin,
  github,
}) => {
  return (
    <li className="flex space-x-4">
      <Image
        source={picture}
        alt={typeof name === "string" ? name : Plain.serialize(name as any)}
        propName="picture"
        aspectRatio={1}
        imageClassName="rounded-full w-12 h-12 object-contain"
      />

      <div className="ml-3 dark:text-gray-200 min-w-[90px]">
        <Text
          renderBlock={(props) => (
            <div className={`font-bold ${textColors.GRAY_800}`}>
              {props.children}
            </div>
          )}
          placeholder="Name..."
          propName="name"
          value={name}
        />
        <Text
          renderBlock={(props) => (
            <div className={`${textColors.GRAY_600} mb-2`}>
              {props.children}
            </div>
          )}
          placeholder="Job title..."
          propName="jobTitle"
          value={jobTitle}
        />
        <div className="flex flex-row items-center space-x-2">
          {twitter && (
            <div>
              <a
                className={classNames(
                  "hover:text-sky-600 transition-all ease-out duration-150 hover:-translate-y-0.5",
                  textColors.GRAY_400
                )}
                href={`https://twitter.com/${twitter}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            </div>
          )}
          {linkedin && (
            <div>
              <a
                className={classNames(
                  "hover:text-sky-600 transition-all ease-out duration-150 hover:-translate-y-0.5",
                  textColors.GRAY_400
                )}
                href={`https://linkedin.com/${linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          )}
          {github && (
            <div>
              <a
                className={classNames(
                  "hover:text-sky-600 transition-all ease-out duration-150 hover:-translate-y-0.5",
                  textColors.GRAY_400
                )}
                href={`https://github.com/${github}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

export default Team2ColsItem;
