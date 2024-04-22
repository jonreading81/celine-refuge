import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Slice } from '@app/components/Slice';
import { PrismicNextLink } from '@prismicio/next';

import {
  faBed,
  faTent,
  faUtensils,
  faShower,
  faCreditCard,
  faWifi,
  faCircle,
  faKitchenSet,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

import {
  faInstagram,
  faFacebook,
  faFacebookF,
} from '@fortawesome/free-brands-svg-icons';

const icons = {
  faBed,
  faTent,
  faUtensils,
  faShower,
  faCreditCard,
  faWifi,
  faCircle,
  faInstagram,
  faFacebook,
  faFacebookF,
  faKitchenSet,
  faPhone,
};

const Icon = ({ icon, text, disabled }) => (
  <div className="mb-8 transition-transform hover:scale-110">
    <FontAwesomeIcon
      className={`w-16 h-16 sm:w-18 sm:h-18 m-auto block ${
        disabled ? 'opacity-20' : ''
      }`}
      size="sm"
      color="white"
      icon={icons[icon] ?? faCircle}
      mask={faCircle}
      transform="shrink-10 up-.5"
    />

    <p className="text-sm font-secondary-bold lg:text-base text-white text-center mt-4">
      {text}
    </p>
  </div>
);

const IconLink = ({ link, ...props }) =>
  link.url ? (
    <PrismicNextLink field={link}>
      <Icon {...props} />{' '}
    </PrismicNextLink>
  ) : (
    <Icon {...props} />
  );

/**
 * Component for "IconBar" Slices.
 */
const cols = [
  'grid-cols-0',
  'grid-cols-1',
  'grid-cols-2',
  'grid-cols-3',
  'grid-cols-2 md:grid-cols-4',
  'grid-cols-2 md:grid-cols-4 lg:grid-cols-5',
  'grid-cols-2 md:grid-cols-4 lg:grid-cols-6',
  'grid-cols-2 md:grid-cols-4 lg:grid-cols-7',
  'grid-cols-2 md:grid-cols-4 lg:grid-cols-8',
];

const IconBar = ({ slice: { primary, items } }) => {
  const index = Math.min(items.length, cols.length - 1);
  const col = cols[index];

  return (
    <Slice>
      <section className="bg-blue-site rounded-xl shadow-lg overflow-hidden m-auto max-w-screen-lg">
        <h2 className="text-white text-center  mt-10 mb-12">{primary.title}</h2>
        <div className={`px-8 lg:px-16 grid   ${col} gap-8  mb-8`}>
          {items.map((icon) => (
            <IconLink key={icon.icon} {...icon} />
          ))}
        </div>
      </section>
    </Slice>
  );
};

export default IconBar;
