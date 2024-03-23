'use client';
import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

import { Slice } from '@app/components/Slice';

/**
 * Props for `PriceList`.
 */

const TableHeading = ({ children, className = '' }) => (
  <th
    className={`border-b border-blue-gray-100  bg-gray-100 p-4 font-extrabold ${className}`}
  >
    {children}
  </th>
);

const Price = ({ amount, className = '' }) => (
  <td className={`${className}  text-center`}>{price(amount)}</td>
);

const price = (price) => `€${price.toFixed(2)}`;
/**
 * Component for "PriceList" Slices.
 */

const PriceList = ({ slice: { primary, items } }) => (
  <Slice>
    <h2 className="text-center mb-12">{primary.title}</h2>
    <div className="max-w-screen-lg m-auto  text-sm md:text-lg text-gray-700 ">
      <table className="table-fixed w-full text-left overflow-hidden rounded-xl shadow-xl ">
        <thead>
          <tr>
            <TableHeading>{primary.column_heading_1}</TableHeading>
            <TableHeading className="text-center">
              {primary.column_heading_2}
            </TableHeading>
            <TableHeading className="text-center">
              {primary.column_heading_3}
            </TableHeading>
            <TableHeading className="text-center">
              {primary.column_heading_4}
            </TableHeading>
          </tr>
        </thead>
        <tbody>
          {items.map(({ name, price_1, price_2, price_3 }, index) => {
            const isLast = index === items.length - 1;
            const classes = isLast
              ? 'p-4'
              : 'p-4 border-b border-blue-gray-100';
            return (
              <tr key={index}>
                <td className={`${classes} font-bold`}>{name}</td>
                <Price className={classes} amount={price_1} />
                <Price className={classes} amount={price_2} />
                <Price className={classes} amount={price_3} />
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  </Slice>
);

export default PriceList;
