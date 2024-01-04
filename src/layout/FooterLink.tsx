import React from "react";
import { Text, types, Link } from "../shared";
import { textColors } from "../colors";

export interface FooterLinkProps {
  linkPath?: string;
  linkText?: string;
}

const FooterLink: types.Brick<FooterLinkProps> = ({ linkText, linkPath }) => {
  return (
    <Link href={linkPath!}>
      <Text
        propName="linkText"
        value={linkText}
        placeholder="Link..."
        renderBlock={({ children }) => (
          <div
            className={`text-sm mb-3 ${textColors.GRAY_500} hover:text-gray-600 dark:hover:text-white transition-all ease-out duration-150 hover:-translate-y-px`}
          >
            {children}
          </div>
        )}
      />
    </Link>
  );
};

export default FooterLink;
