import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { ContactInfo } from '@app/components/ContactInfo';

/**
 * Props for `ContactInfo`.
 */
export type ContactInfoProps = SliceComponentProps<Content.ContactInfoSlice>;

/**
 * Component for "ContactInfo" Slices.
 */
const ContactSlice = ({ slice }: ContactInfoProps): JSX.Element => {
  return <ContactInfo {...slice.primary} />;
};

export default ContactSlice;
