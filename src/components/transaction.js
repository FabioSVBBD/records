import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { formatter } from '~/utils/formatting';

export const Transaction = ({ id, type, amount, description, date }) => {
  const formattedPrice = useMemo(() => {
    const sign = type === 'Deposit' ? '+' : '-';

    const quant = formatter.format(amount);

    return `${sign} ${quant}`;
  }, [type, amount]);

  return (
    <section className='my-2 grid w-[min(28rem,_100%)] max-w-md grid-cols-2 gap-y-2 rounded-md bg-white/50 px-4 py-2 text-center font-semibold text-black/80 shadow-md'>
      <p className='text-left text-lg text-black/90'>{formattedPrice}</p>
      <p className='text-right'>{new Date(date).toLocaleString()}</p>
      <p className='text-left text-black/70'>{description}</p>
      <p className='col-span-2 text-left text-black/25'>{id}</p>
    </section>
  );
};

Transaction.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.number,
  description: PropTypes.string,
  date: PropTypes.string,
};
