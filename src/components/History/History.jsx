import React, { useContext, useEffect } from "react";
import "./History.css";
import { GlobalContext } from "../../GlobalContext";
import Transaction from "../Transaction/Transaction";

const History = () => {
  const { trans } = useContext(GlobalContext);
  const [transactions, setTransactions] = trans;

  return (
    <div className="history" id="history">
      <h3>History</h3>
      <hr />

      <ul className="transactions" id="transactions">
        {transactions?.map((t) => (
          <Transaction transaction={t} />
        ))}
      </ul>
    </div>
  );
};

export default History;
