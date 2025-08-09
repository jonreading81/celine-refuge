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
      active,
      max_products,
    },
  },
}: BookingWidgetProps) => {
  const onLoad = () => {
    // @ts-ignore
    var widgetProduit = AllianceReseaux.Widget.Instance('Produit', {
      idPanier,
      idIntegration,
      langue,
      ui,
    });

    if (active) {
      widgetProduit.PreApp('planning.actif', true);
    }

    if (max_products) {
      widgetProduit.PreApp('planning.nbMaxProduits', max_products);
    }

    widgetProduit.Initialise();
  };

  return (
    <>
      <Script
        onReady={onLoad}
        onLoad={onLoad}
        src="//gadget.open-system.fr/widgets-libs/rel/noyau-1.0.min.js"
      />
      <div className="mb-12 relative z-0">
        <div id={`widget-produit-${ui}`}></div>
      </div>
    </>
  );
};

export default BookingWidget;
