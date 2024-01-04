import React from "react";
import { Text, Repeater, types } from "../shared";
import { textColors } from "../colors";
import FooterLink, { FooterLinkProps } from "./FooterLink";

export interface FooterColumnProps {
  title?: string;
  links?: FooterLinkProps[];
}

const FooterColumn: types.Brick<FooterColumnProps> = ({ title, links }) => {
  return (
    <div className="w-1/2 sm:w-auto sm:mr-8 mb-8">
      <Text
        propName="title"
        value={title}
        placeholder="Title..."
        renderBlock={({ children }) => (
          <div
            className={`mb-3 text-xs font-extrabold uppercase tracking-[0.35em] min-w-[120px] ${textColors.GRAY_400}`}
          >
            {children}
          </div>
        )}
      />
      <Repeater
        propName="links"
        items={links}
        itemBuilder={(props) => <FooterLink {...props} />}
      />
    </div>
  );
};

export default FooterColumn;
