import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(
    JSON.parse(window.localStorage.getItem("transactions")) || []
  );

  const addTransaction = (transaction) => {
    window.localStorage.setItem(
      "transactions",
      JSON.stringify([transaction, ...transactions])
    );

    setTransactions([transaction, ...transactions]);
  };

  return (
    <GlobalContext.Provider
      value={{
        trans: [transactions, setTransactions],
        add: addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
