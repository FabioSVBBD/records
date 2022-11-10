import React, { useState } from 'react';
import { Button, Input, Modal, Transaction } from 'src/components';
import { useTransaction } from 'src/hooks';

export const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [transactions] = useTransaction({ user: 'mock' });

  return (
    <article className='p-8 flex flex-col items-center'>
      <h1 className='flex justify-center w-full text-4xl font-bold text-center mb-16 text-gray-900 whitespace-pre-wrap'>
        Welcome! View and edit your records here
      </h1>

      <section className='flex justify-between gap-x-4 w-[min(28rem,_100%)] mb-2'>
        <Button secondary>Edit</Button>
        <Button primary onClick={() => setShowModal(true)}>
          Add New
        </Button>
      </section>

      <Modal visible={showModal}>
        <h3>new Transaction:</h3>

        <Input label='Type' />
        <Input label='Amount' />
        <Input label='Description' />
        <Input label='Date' />
      </Modal>

      {Array.isArray(transactions) &&
        transactions.map((transaction, index) => (
          <Transaction key={`Transaction_${index}`} {...transaction} />
        ))}
    </article>
  );
};
