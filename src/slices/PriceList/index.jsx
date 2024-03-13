'use client';
import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { Card, Typography } from '@material-tailwind/react';

/**
 * Props for `PriceList`.
 */

const TableHeading = ({ children }) => (
  <th className="border-b border-blue-gray-100  bg-gray-100 p-4 font-extrabold">
    {children}
  </th>
);
/**
 * Component for "PriceList" Slices.
 */

const PriceList = ({ slice: { primary, items } }) => {
  return (
    <>
      <h3 className="text-3xl text-center mb-8">{primary.title}</h3>
      <Card className="h-full w-full overflow-scroll mb-12 text-lg">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              <TableHeading>{primary.column_one_heading}</TableHeading>
              <TableHeading>{primary.column_two_heading}</TableHeading>
            </tr>
          </thead>
          <tbody>
            {items.map(({ name, price }, index) => {
              const isLast = index === items.length - 1;
              const classes = isLast
                ? 'p-4'
                : 'p-4 border-b border-blue-gray-100';
              return (
                <tr key={index}>
                  <td className={classes}>{name}</td>
                  <td className={classes}>&euro;{price.toFixed(2)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </>
  );
};

export default PriceList;
