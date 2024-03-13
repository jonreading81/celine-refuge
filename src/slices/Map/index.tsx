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
      position: { longitude: lat, longitude: lng },
      zoom,
    },
  },
}: MapProps): JSX.Element => {
  if (!lng || !lng) {
    return (
      <h3 className="p-6 my-6 text-center bg-red-300 text-black">
        Please Provide a postion for the map in the format long, lat e.g.
        45.206191545441555, 6.8458295423283415
      </h3>
    );
  }

  const position = { lng, lat };

  return (
    <section className="aspect-video mb-12">
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API}>
        <Map center={position} zoom={zoom}>
          <Marker position={position} />
        </Map>
      </APIProvider>
    </section>
  );
};

export default MapSlice;
