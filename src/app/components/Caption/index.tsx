import * as React from 'react';

type Props = {
  children: React.ReactNode;
};

const Caption = ({ children }: Props) => (
  <p className="text-white bg-blue-site px-6 pt-8 pb-16">{children}</p>
);

export default Caption;
