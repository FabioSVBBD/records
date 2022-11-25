const baseUrl = 'https://localhost:5001';

export const TransactionService = {
  getTransactions: async ({ user, controller }) => {
    try {
      return await fetch(`${baseUrl}/${user}/transactions`, { signal: controller.signal });
    } catch (error) {
      // Publish to logs
    }
  },

  addTransaction: async ({ user, transaction, controller }) => {
    try {
      await fetch(`${baseUrl}/${user}/transactions`, {
        method: 'POST',
        body: JSON.stringify(transaction),
        signal: controller.signal,
      });
    } catch (error) {
      // Publish to logs
    }
  },
};
