import React from "react";
import { RichText, Image, Repeater, types, Link } from "../shared";
import { textColors } from "../colors";
import { LayoutProps } from "../LayoutSideProps";
import FooterColumn, { FooterColumnProps } from "./FooterColumn";
import Container from "../shared/components/Container";
import Section from "../shared/components/Section";

export interface FooterProps extends LayoutProps {
  siteUrl: string;
  logo: types.IImageSource;
  copyright: string | types.TextElement[];
  columns?: FooterColumnProps[];
}

const Footer: types.Brick<FooterProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  siteUrl,
  logo,
  copyright,
  columns,
}) => {
  return (
    <footer>
      <Section
        backgroundColor={backgroundColor}
        borderTop={borderTop}
        borderBottom={borderBottom}
      >
        <Container
          paddingTop={paddingTop}
          paddingBottom={paddingBottom}
          className="flex justify-between flex-wrap"
        >
          <div className="w-full mb-12 lg:w-auto lg:mb-0 lg:mr-8">
            <Link href={siteUrl} className="block mb-4">
              <Image
                propName="logo"
                source={logo}
                alt="Logo"
                maxWidth={300}
                imageClassName="w-48 h-7 object-contain object-left"
              />
            </Link>
            <RichText
              propName="copyright"
              value={copyright}
              placeholder="Copyright notice"
              renderBlock={({ children }) => (
                <p className={`text-sm ${textColors.GRAY_500}`}>{children}</p>
              )}
              allowedFeatures={[types.RichTextFeatures.Link]}
              renderLink={({ children, href }) => (
                <Link
                  href={href}
                  className="text-sky-500 hover:text-sky-600 hover:-translate-y-px transition-all ease-out duration-150"
                >
                  {children}
                </Link>
              )}
            />
          </div>
          <Repeater
            propName="columns"
            items={columns}
            itemBuilder={(props) => <FooterColumn {...props} />}
          />
        </Container>
      </Section>
    </footer>
  );
};

export default Footer;
