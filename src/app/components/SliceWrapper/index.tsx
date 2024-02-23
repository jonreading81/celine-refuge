import * as React from 'react';

export const SliceWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-7xl mx-auto mt-[-120px] relative bg-white px-8 sm:px-20 pt-6">
      {children}
    </div>
  );
};
