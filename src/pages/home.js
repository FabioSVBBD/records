import React, { useEffect, useState } from 'react';
import { TransactionService } from 'src/services/transaction.service';

export const Home = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      const response = await (
        await TransactionService.getTransactions({ controller })
      ).json();

      if (response.value) {
        setData(response.value);
      }
    })().catch(console.error);

    return () => controller.abort();
  }, []);

  return (
    <article className="p-8">
      <h1 className="flex justify-center w-full text-4xl font-bold text-center mb-16 text-gray-900 whitespace-pre-wrap">
        Home
      </h1>

      <pre className="bg-gray-600/[0.8] text-gray-300 px-8 py-4 rounded-md">
        <code>{JSON.stringify(data, null, 4)}</code>
      </pre>
    </article>
  );
};
