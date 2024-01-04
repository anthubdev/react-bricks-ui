import React from "react";
import { Text, types, Link } from "../shared";
import classNames from "classnames";
import { FiChevronRight } from "react-icons/fi";

export interface HeaderMenuSubItemProps {
  linkText?: string;
  linkDescription?: string;
  linkPath?: string;
}

const HeaderMenuSubItem: types.Brick<HeaderMenuSubItemProps> = ({
  linkText,
  linkDescription,
  linkPath,
}) => {
  return (
    <Link href={linkPath!} className="group p-0 mb-3 lg:p-3 flex items-start">
      <div className="text-sky-500 lg:hidden mr-2">
        <FiChevronRight />
      </div>
      <div className="flex-1 overflow-hidden lg:overflow-auto">
        <Text
          propName="linkText"
          value={linkText}
          placeholder="Type a text..."
          renderBlock={({ children }) => (
            <div
              className={classNames(
                "text-sm truncate lg:overflow-auto lg:whitespace-normal lg:font-bold transition-colors ease-out text-gray-900 group-hover:text-sky-600"
              )}
            >
              {children}
            </div>
          )}
        />
        <div className="hidden lg:block">
          <Text
            propName="linkDescription"
            value={linkDescription}
            placeholder="Type a text..."
            renderBlock={({ children }) => (
              <div
                className={classNames(
                  "text-sm transition-colors ease-out text-gray-600"
                )}
              >
                {children}
              </div>
            )}
          />
        </div>
      </div>
    </Link>
  );
};

export default HeaderMenuSubItem;
