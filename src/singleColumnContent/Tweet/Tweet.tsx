import React from "react";
import { useEffect, useRef, useState } from "react";
import { types } from "../../shared";
import { useReactBricksContext } from "../../shared";
import Container from "../../shared/components/Container";
import Section from "../../shared/components/Section";
import { LayoutProps } from "../../LayoutSideProps";

export interface TweetProps extends LayoutProps {
  id: string;
  placeholder: string;
  align: string;
  cards: string;
  conversation: string;
  theme: string;
  position?: string;
}

const Tweet: types.Brick<TweetProps> = ({
  id,
  placeholder,
  align,
  cards,
  conversation,
  theme,
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  width,
}) => {
  const twitterEmbedRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { isDarkColorMode } = useReactBricksContext();

  useEffect(() => {
    const isBlackTheme: boolean =
      theme === "dark" || (theme === "auto" && !!isDarkColorMode);
    const twTheme: string = isBlackTheme ? "dark" : "";

    if (twitterEmbedRef?.current) {
      const currentDocument = twitterEmbedRef?.current.ownerDocument;
      const currentWindow = twitterEmbedRef?.current.ownerDocument.defaultView;

      var script = currentDocument.createElement("script");
      script.setAttribute("src", "https://platform.twitter.com/widgets.js");
      script.onload = () => {
        // @ts-ignore
        const twttr = currentWindow!["twttr"];
        twttr.ready().then(({ widgets }: any) => {
          // Clear previously rendered tweet before rendering the updated tweet id
          if (twitterEmbedRef.current) {
            twitterEmbedRef.current.innerHTML = "";
          }

          // const { options, onTweetLoadSuccess, onTweetLoadError } = props
          widgets
            .createTweetEmbed(id, twitterEmbedRef.current, {
              align,
              cards,
              conversation,
              theme: twTheme,
            })
            .then(() => {
              setIsLoading(false);
            });
        });
      };
      currentDocument.body.appendChild(script);
    }
  }, [
    isLoading,
    id,
    placeholder,
    align,
    cards,
    conversation,
    theme,
    isDarkColorMode,
  ]);

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
        <div ref={twitterEmbedRef}>{isLoading && placeholder}</div>
      </Container>
    </Section>
  );
};

export default Tweet;
