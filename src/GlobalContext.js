import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([transaction, ...transactions]);

    // window.localStorage.setItem("transactions", [transaction, ...transactions]);
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
