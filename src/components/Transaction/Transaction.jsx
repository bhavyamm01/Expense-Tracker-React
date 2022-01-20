import React from "react";
import "./Transaction.css";

const Transaction = ({ transaction }) => {
  return (
    <div className={`transaction ${transaction.amount > 0 ? "green" : "red"}`}>
      <li>
        {transaction.comment}{" "}
        <div>
          {transaction.amount > 0 ? "+" : "-"}Rs{" "}
          {transaction.amount < 0
            ? parseInt(transaction.amount.toString().split("-")[1])
            : transaction.amount}
        </div>
      </li>
    </div>
  );
};

export default Transaction;
