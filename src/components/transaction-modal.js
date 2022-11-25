import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input, Modal } from '~/components';

export const TransactionModal = ({ visible }) => {
  const [type, setType] = useState('');
  const [amount, setAmount] = useState('');
  const [desc, setDesc] = useState('');
  const [date, setDate] = useState('');

  return (
    <Modal visible={visible}>
      <h3 className='text-lg font-semibold'>New transaction</h3>

      <Input label='Type' value={type} onChange={setType} />
      <Input label='Amount' value={amount} onChange={setAmount} />
      <Input label='Description' value={desc} onChange={setDesc} />
      <Input label='Date' value={date} onChange={setDate} />
    </Modal>
  );
};

TransactionModal.propTypes = { visible: PropTypes.bool };
