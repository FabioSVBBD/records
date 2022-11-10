import React, { useMemo } from 'react';
import PropTypes from 'proptypes';

export const Transaction = ({ id, type, amount, description, date }) => {
  const formatter = new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
    currencyDisplay: 'symbol',
  });

  const formattedPrice = useMemo(() => {
    const sign = type === 'Deposit' ? '+' : '-';

    const quant = formatter.format(amount);

    return `${sign} ${quant}`;
  }, [type, amount]);

  return (
    <section className='grid bg-white/50 rounded-md shadow-md px-4 py-2 my-2 grid-cols-2 text-black/80 text-center font-semibold max-w-md w-[min(28rem,_100%)] gap-y-2'>
      <p className='text-left text-black/90 text-lg'>{formattedPrice}</p>
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
