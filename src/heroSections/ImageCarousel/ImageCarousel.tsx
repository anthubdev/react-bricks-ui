import React, { useEffect, useState } from "react";
import { Repeater, types } from "../../shared";
import Slider from "react-slick";
import Container from "../../shared/components/Container";
import Section from "../../shared/components/Section";
import CarouselStyles from "./CarouselStyles";
import { LayoutProps } from "../../LayoutSideProps";
import ImageCarouselItem from "./ImageCarouselItem";

export interface ImageCarouselProps extends LayoutProps {
  slidesToShow: string;
  slidesToScroll: string;
  adaptAspectRatio: boolean;
  autoplay: boolean;
  speed: string;
  className?: string;
  gap: string;
  images: {
    image: types.IImageSource;
  }[];
}

const CarouselBrick: types.Brick<ImageCarouselProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  width,
  slidesToShow,
  slidesToScroll,
  adaptAspectRatio,
  autoplay,
  speed,
  gap,
  images,
}) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    draggable: true,
    autoplay: !!autoplay,
    autoplaySpeed: speed ? parseInt(speed) * 1000 : 3000,
    touchThreshold: 1000,
    slidesToShow: slidesToShow ? parseInt(slidesToShow) : 1,
    slidesToScroll: slidesToScroll ? parseInt(slidesToScroll) : 1,
    accessibility: true,
  };

  const repeaterElement = Repeater({
    propName: "images",
    items: images,
    itemBuilder: (props) => <ImageCarouselItem {...props} />,
    itemProps: {
      adaptAspectRatio,
      slidesToShow: slidesToShow ? parseInt(slidesToShow) : 1,
    },
  });
  const [hasMount, setHasMount] = useState(false);
  useEffect(() => {
    setHasMount(true);
  }, []);

  if (!hasMount) {
    // Client only
    return null;
  }

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
        <CarouselStyles />
        <style>{`
       
        .slick-track {
          display:flex;
          gap:${gap};
        }
    `}</style>

        <Slider {...settings}>
          {/*@ts-ignore*/}
          {repeaterElement?.props?.children?.map((child, index) => {
            return (
              <div key={index} className="p-0 overflow-hidden">
                {child}
              </div>
            );
          })}
        </Slider>
      </Container>
    </Section>
  );
};

export default CarouselBrick;
