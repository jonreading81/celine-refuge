import * as React from 'react';

type Props = {
  children: React.ReactNode;
};

const Caption = ({ children }: Props) => (
  <p className="text-sm bg-gray-100 p-6">{children}</p>
);

export default Caption;
