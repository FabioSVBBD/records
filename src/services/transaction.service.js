const baseUrl = 'https://localhost:7291';

export const TransactionService = {
  getTransactions: async ({ user, controller }) =>
    await fetch(`${baseUrl}/${user}/transactions`, {
      signal: controller.signal,
    }),

  addTransaction: async ({ user, transaction, controller }) =>
    await fetch(`${baseUrl}/${user}/transactions`, {
      method: 'POST',
      body: JSON.stringify(transaction),
      signal: controller.signal,
    }),
};
