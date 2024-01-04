import React from "react";
import { types } from "../../shared";
import { LayoutProps } from "../../LayoutSideProps";
import Container from "../../shared/components/Container";
import Section from "../../shared/components/Section";
import Video from "../../shared/components/Video";

interface SingleColumnVideoProps extends LayoutProps {
  videoType: "file" | "streaming";
  platform: "youtube" | "vimeo";
  videoId: string;
}

const SingleColumnVideo: types.Brick<SingleColumnVideoProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  width,
  videoType,
  platform,
  videoId,
}) => {
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
        <Video type={videoType} platform={platform} videoId={videoId} />
      </Container>
    </Section>
  );
};

export default SingleColumnVideo;
