import { useEffect, useState } from 'react';
import { TransactionService } from '~/services';

export const useTransaction = ({ user, id = '' }) => {
  const [transactions, setTransactions] = useState({});

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      const response = await (await TransactionService.getTransactions({ user, id, controller })).json();

      if (response.value) {
        setTransactions(response.value);
      }
    })().catch(console.error);

    return () => controller.abort();
  }, [user, id]);

  return [transactions, setTransactions];
};
