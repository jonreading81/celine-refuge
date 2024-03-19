import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Slice } from '@app/components/Slice';

import {
  faBed,
  faTent,
  faUtensils,
  faShower,
  faCreditCard,
  faWifi,
  faCircle,
} from '@fortawesome/free-solid-svg-icons';

const icons = {
  faBed,
  faTent,
  faUtensils,
  faShower,
  faCreditCard,
  faWifi,
  faCircle,
};

const Icon = ({ icon, text }) => (
  <div className="w-20 lg:w-30  mb-8">
    <FontAwesomeIcon
      className="w-10 h-10 lg:w-20 lg:h-20 m-auto"
      size="sm"
      color="white"
      icon={icons[icon] ?? faCircle}
      mask={faCircle}
      transform="shrink-10 up-.5"
    />
    <p className="text-xs lg:text-sm text-white text-center mt-4">{text}</p>
  </div>
);

/**
 * Component for "IconBar" Slices.
 */
const IconBar = ({ slice: { primary, items } }) => {
  return (
    <Slice>
      <section className="bg-blue-site rounded-xl shadow-lg overflow-hidden">
        <h3 className="text-white text-4xl text-center  mt-10 mb-12">
          {primary.title}
        </h3>
        <div className="px-8 lg:px-16 flex justify-between flex-wrap mb-8">
          {items.map((icon) => (
            <Icon key={icon} {...icon} />
          ))}
        </div>
      </section>
    </Slice>
  );
};

export default IconBar;
