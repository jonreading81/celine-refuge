import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `ContactForm`.
 */
export type ContactFormProps = SliceComponentProps<Content.ContactFormSlice>;

/**
 * Component for "ContactForm" Slices.
 */
const ContactForm = ({ slice }: ContactFormProps): JSX.Element => {
  return (
    <div className="max-w-4xl mx-auto mb-12">
      <form className="border-2 border-blue-site p-8">
        <div className="flex flex-col sm:flex-row sm:gap-12">
          <div className="basis-1/2">
            <label className="text-xs" htmlFor="name">
              First name *
            </label>
            <input
              className="input"
              type="text"
              name="name"
              id="name"
              required={true}
            />
            <label className="text-xs" htmlFor="email">
              Email *
            </label>
            <input
              className="input"
              type="email"
              name="email"
              id="email"
              required={true}
            />
          </div>
          <div className="basis-1/2">
            <label className="text-xs" htmlFor="name">
              Last name
            </label>
            <input className="input" type="text" name="last" id="last" />
            <label className="text-xs" htmlFor="phone">
              Phone
            </label>
            <input className="input" type="tel" name="phone" id="phone" />
          </div>
        </div>
        <label className="text-xs" htmlFor="address">
          Address
        </label>
        <input className="input" type="text" name="address" id="address" />
        <button className="btn-main w-full mt-6 text-xl" type="submit">
          Apply
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
