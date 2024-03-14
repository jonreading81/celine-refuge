'use client';
import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import { Slice } from '@app/components/Slice';
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
      position: { longitude: lng, latitude: lat },
      zoom,
    },
  },
}: MapProps): JSX.Element => {
  if (!lng || !lng) {
    return (
      <h3 className="p-6 my-6 text-center bg-red-300 text-black">
        Please Provide a postion for the map in the format long, lat e.g.
        45.2069172126908, 6.845786626984114
      </h3>
    );
  }

  const position = { lng, lat };

  return (
    <Slice>
      <div className="aspect-video rounded-xl overflow-hidden">
        <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API}>
          <Map defaultCenter={position} defaultZoom={zoom ?? 12}>
            <Marker position={position} />
          </Map>
        </APIProvider>
      </div>
    </Slice>
  );
};

export default MapSlice;
