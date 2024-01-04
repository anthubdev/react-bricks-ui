import React from "react";
import classNames from "classnames";
import { Image, types, Text } from "../../shared";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { textColors } from "../../colors";

export interface TeamItemProps {
  twitter?: string;
  github?: string;
  linkedin?: string;
  picture?: types.IImageSource;
  memberName?: string;
  jobTitle?: string;
}

const TeamItem: types.Brick<TeamItemProps> = ({
  twitter,
  github,
  linkedin,
  picture,
  memberName,
  jobTitle,
}) => {
  return (
    <div className="flex flex-col items-center">
      <Image
        propName="picture"
        source={picture}
        alt="team-item"
        aspectRatio={1}
        imageClassName={classNames(
          "block w-[72px] h-[72px] object-contain rounded-full mb-1"
        )}
      />

      <Text
        renderBlock={(props) => (
          <div
            className={classNames(
              "text-sm font-bold text-center min-w-[70px]",
              textColors.GRAY_800
            )}
          >
            {props.children}
          </div>
        )}
        placeholder="Name..."
        propName="memberName"
        value={memberName}
      />
      <Text
        renderBlock={(props) => (
          <div className="text-xs text-center text-gray-500 dark:text-white/70 min-w-[70px]">
            {props.children}
          </div>
        )}
        placeholder="Role..."
        propName="jobTitle"
        value={jobTitle}
      />

      {(twitter || linkedin || github) && (
        <div className="flex flex-row justify-center space-x-2 mt-2">
          {twitter && (
            <div className="hover:text-sky-500 hover:-translate-y-px transition-all ease-out duration-150 text-gray-400 dark:text-gray-400 dark:hover:text-gray-200">
              <a
                href={`https://twitter.com/${twitter}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            </div>
          )}
          {linkedin && (
            <div className="hover:text-sky-500 hover:-translate-y-px transition-all ease-out duration-150 text-gray-400 dark:text-gray-400 dark:hover:text-gray-200">
              <a
                href={`https://linkedin.com/${linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          )}
          {github && (
            <div className="hover:text-sky-500 hover:-translate-y-px transition-all ease-out duration-150 text-gray-400 dark:text-gray-400 dark:hover:text-gray-200">
              <a
                href={`https://github.com/${github}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TeamItem;
