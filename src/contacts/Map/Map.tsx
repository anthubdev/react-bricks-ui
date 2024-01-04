import React from "react";
import { types } from "../../shared";
import { Map, Marker } from "pigeon-maps";
import { maptiler } from "pigeon-maps/providers";
import Section from "../../shared/components/Section";
import Container from "../../shared/components/Container";
import { LayoutProps } from "../../LayoutSideProps";

const MAPTILER_ACCESS_TOKEN = "zGVHxdSZR3rlLBsL6hUv#0.5";
const mapTilerProvider = maptiler(MAPTILER_ACCESS_TOKEN, "streets");

export interface MapProps extends LayoutProps {
  zoom: string;
  lat: string;
  lng: string;
}

// const mapTilerProvider = (x: number, y: number, z: number, dpr?: number) => {
//   return `https://api.maptiler.com/maps/${MAP_ID}/256/${z}/${x}/${y}${
//     dpr && dpr >= 2 ? '@2x' : ''
//   }.png?key=${MAPTILER_ACCESS_TOKEN}`
// }

export const MapBrick: types.Brick<MapProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  width,
  lat = "45.6782509",
  lng = "9.5669407",
  zoom = "10",
}) => {
  let mapTilerProviderProp = {};
  if (MAPTILER_ACCESS_TOKEN) {
    mapTilerProviderProp = {
      provider: mapTilerProvider,
    };
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
        <Map
          center={[parseFloat(lat), parseFloat(lng)]}
          height={350}
          metaWheelZoom
          zoom={parseInt(zoom, 10)}
          {...mapTilerProviderProp}
          dprs={[1, 2]}
          metaWheelZoomWarning="Use ctrl + wheel to zoom!"
          attribution={false}
          //attributionPrefix=""
        >
          <Marker anchor={[parseFloat(lat), parseFloat(lng)]} />
        </Map>
      </Container>
    </Section>
  );
};

export default MapBrick;
