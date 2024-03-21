import * as React from 'react';

export const SliceWrapper = ({
  children,
  hasIndent,
}: {
  children: React.ReactNode;
  hasIndent?: boolean;
}) => {
  return (
    <div
      className={`max-w-screen-2xl mx-auto ${
        hasIndent ? 'mt-[-88px]' : ''
      } relative bg-white px-4 lg:px-8  pt-12`}
    >
      {children}
    </div>
  );
};
