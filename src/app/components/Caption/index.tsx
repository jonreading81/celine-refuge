import * as React from 'react';

type Props = {
  children: React.Node;
};

const Caption = ({ children }: Prop) => (
  <p className="text-sm bg-gray-100 p-6">{children}</p>
);

export default Caption;
