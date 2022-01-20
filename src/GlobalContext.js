import React, { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(
    JSON.parse(window.localStorage.getItem("transactions")) || []
  );

  const addTransaction = (transaction) => {
    setTransactions([transaction, ...transactions]);

    // window.localStorage.setItem("transactions", [transaction, ...transactions]);

    // window.localStorage.setItem(
    //   "transactions",
    //   JSON.stringify([...transactions, transaction])
    // );

    // setTransactions(JSON.parse(window.localStorage.getItem("transactions")));
  };

  useEffect(() => {
    window.localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

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
