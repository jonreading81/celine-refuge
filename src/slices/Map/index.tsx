'use client';
import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

/**
 * Props for `Map`.
 */
export type MapProps = SliceComponentProps<Content.MapSlice>;

/**
 * Component for "Map" Slices.
 */
const MapSlice = ({
  slice: {
    primary: {
      position: { latitude: lat, longitude: lng },
      zoom,
    },
  },
}: MapProps): JSX.Element => {
  const position = { lat, lng };
  return (
    <section className="aspect-video">
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API}>
        <Map center={position} zoom={zoom}>
          <Marker position={position} />
        </Map>
      </APIProvider>
    </section>
  );
};

export default MapSlice;
