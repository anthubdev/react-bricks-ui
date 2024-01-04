import React, { useState } from "react";
import { Image, Text, types, RichText, Link } from "../../shared";
import { FaTwitter } from "react-icons/fa";
import Section from "../../shared/components/Section";
import Container from "../../shared/components/Container";
import { LayoutProps } from "../../LayoutSideProps";

export interface TweetLightProps extends LayoutProps {
  tweetLink: string;
  authorLink: string;
  author?: types.IImageSource;
  authorName?: string;
  authorTwitterHandle?: string;
  tweetContent?: string | types.TextElement[];
  date?: string;
}

const TweetLight: types.Brick<TweetLightProps> = ({
  tweetLink,
  authorLink,
  author,
  authorName,
  authorTwitterHandle,
  tweetContent,
  date,
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  width,
}) => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleClick = (tweetLink: string) => (event: React.MouseEvent) => {
    if (typeof window !== undefined) {
      window.open(tweetLink);
    }
  };

  return (
    <Section
      backgroundColor={backgroundColor}
      borderTop={borderTop}
      borderBottom={borderBottom}
    >
      <Container
        size={width}
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
      >
        <div className="mx-auto max-w-lg px-6">
          <div
            onClick={handleClick(tweetLink)}
            className="block font-sans p-4 bg-white hover:bg-gray-50 border dark:bg-black border-gray-300 dark:border-gray-800 hover:shadow-lg transition-shadow duration-200 rounded-xl"
            style={{
              fontFamily:
                'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
            }}
          >
            <div className="flex items-start justify-between mb-3">
              <a
                href={authorLink}
                rel="noopener noreferrer"
                target="_blank"
                className="flex items-center"
                onClick={(event: React.MouseEvent) => event.stopPropagation()}
              >
                <div className="mr-2 w-12 h-12">
                  <Image
                    propName="author"
                    source={author}
                    alt="author-name"
                    imageClassName="rounded-full filter hover:brightness-90"
                  />
                </div>
                <div className="group">
                  <Text
                    propName="authorName"
                    value={authorName}
                    placeholder="Author Name"
                    renderBlock={({ children }) => (
                      <div className="text-md text-gray-900 font-bold leading-tight group-hover:underline dark:text-neutral-300">
                        {children}
                      </div>
                    )}
                  />
                  <Text
                    propName="authorTwitterHandle"
                    value={authorTwitterHandle}
                    placeholder="Author @"
                    renderBlock={({ children }) => (
                      <div className="text-sm text-gray-500 font-medium tracking-tight">
                        {children}
                      </div>
                    )}
                  />
                </div>
              </a>
              <div
                className="text-2xl dark:text-neutral-300"
                style={{ color: "#1d9bf0" }}
              >
                <FaTwitter />
              </div>
            </div>
            <RichText
              propName="tweetContent"
              value={tweetContent}
              placeholder="tweet content"
              renderBlock={({ children }) => (
                <div className="mb-2 text-xl font-medium leading-tight dark:text-neutral-300">
                  {children}
                </div>
              )}
              allowedFeatures={[types.RichTextFeatures.Link]}
              renderLink={({ children, href }) => (
                <Link
                  href={href}
                  onClick={(event: React.MouseEvent) => event.stopPropagation()}
                  className="hover:text-sky-600"
                  onMouseEnter={() => setIsMouseOver(true)}
                  onMouseLeave={() => setIsMouseOver(false)}
                  style={{ color: isMouseOver ? "#1a8cd8" : "#1d9bf0" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {children}
                </Link>
              )}
            />

            <Text
              propName="date"
              value={date}
              placeholder="Date"
              renderBlock={({ children }) => (
                <div className="inline-block font-normal text-gray-500 tracking-tight hover:underline">
                  {children}
                </div>
              )}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default TweetLight;
