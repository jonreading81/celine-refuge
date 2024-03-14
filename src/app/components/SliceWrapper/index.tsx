import * as React from 'react';

export const SliceWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-screen-2xl mx-auto mt-[-120px] relative bg-white px-4 lg:px-8  pt-12">
      {children}
    </div>
  );
};
