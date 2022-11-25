import React, { useState } from 'react';
import { Button, Transaction, TransactionModal } from '~/components';
import { useTransaction } from '~/hooks';

export const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [transactions] = useTransaction({ user: 'mock' });

  return (
    <article className='flex flex-col items-center p-8'>
      <h1 className='mb-16 flex w-full justify-center whitespace-pre-wrap text-center text-4xl font-bold text-gray-900'>
        Welcome! View and edit your records here
      </h1>

      <section className='mb-2 flex w-[min(28rem,_100%)] justify-between gap-x-4'>
        <Button secondary>Edit</Button>
        <Button primary onClick={() => setShowModal(true)}>
          Add New
        </Button>
      </section>

      <TransactionModal visible={showModal} />

      {Array.isArray(transactions) &&
        transactions.map((transaction, index) => <Transaction key={`Transaction_${index}`} {...transaction} />)}
    </article>
  );
};
