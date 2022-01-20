import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../GlobalContext";
import "./Amount.css";

const Amount = () => {
  const { trans } = useContext(GlobalContext);
  const [transactions, setTransactions] = trans;

  let total = 0;
  let income = 0;
  let expense = 0;

  for (let i = 0; i < transactions?.length; i++) {
    total += parseInt(transactions[i]?.amount);

    if (parseInt(transactions[i]?.amount) > 0) {
      income += parseInt(transactions[i]?.amount);
    } else {
      expense += parseInt(transactions[i]?.amount);
    }
  }
  console.log(total, "total");
  console.log(parseInt(expense.toString().split("-")[1]), "expense");

  return (
    <div>
      <div className="balance">
        <h3>Your balance</h3>
        <h1>
          {total < 0 && "-"}&#8377;
          {total < 0 ? parseInt(total.toString().split("-")[1]) : total}
        </h1>
      </div>

      <div className="expense-income">
        <div className="income">
          <h3>Income</h3>
          <h5>&#8377;{income}</h5>
        </div>
        <div className="expense">
          <h3>Expense</h3>
          <h5>
            &#8377;{expense && parseInt(expense.toString().split("-")[1])}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Amount;
