'use client';

import { useEffect } from 'react';
import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

import Script from 'next/script';
/**
 * Props for `BookingWidget`.
 */
export type BookingWidgetProps =
  SliceComponentProps<Content.BookingWidgetSlice>;

/**
 * Component for "BookingWidget" Slices.
 */
const BookingWidget = ({
  slice: {
    primary: {
      panier: idPanier,
      integration: idIntegration,
      language: langue,
      productid: ui,
    },
  },
}: BookingWidgetProps): JSX.Element => {
  const onReady = () => {
    // @ts-ignore
    var widgetProduit = AllianceReseaux.Widget.Instance('Produit', {
      idPanier,
      idIntegration,
      langue,
      ui,
    });

    widgetProduit.Initialise();
  };

  return (
    <>
      <Script
        onReady={onReady}
        src="//gadget.open-system.fr/widgets-libs/rel/noyau-1.0.min.js"
      />
      <div className="mb-12 relative">
        <div id={`widget-produit-OSCH-131661-1`}></div>
      </div>
    </>
  );
};

export default BookingWidget;
