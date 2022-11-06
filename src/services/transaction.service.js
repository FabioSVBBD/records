export const TransactionService = {
  getTransactions: async ({ userid, controller }) =>
    await fetch('https://localhost:7291/mock/transactions', {
      signal: controller.signal,
    }),
};
