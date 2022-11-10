import { useEffect, useState } from 'react';
import { TransactionService } from 'src/services';

export const useTransaction = ({ user, id = '' }) => {
  const [transactions, setTransactions] = useState({});

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      const response = await (
        await TransactionService.getTransactions({ user: user, id, controller })
      ).json();

      if (response.value) {
        setTransactions(response.value);
      }
    })().catch(console.error);

    return () => controller.abort();
  }, []);

  return [transactions, setTransactions];
};
