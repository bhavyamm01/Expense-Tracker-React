import React, { useContext, useState } from "react";
import "./AddNewTransaction.css";
import { GlobalContext } from "../../GlobalContext";

const AddNewTransaction = () => {
  const [comment, setComment] = useState("");
  const [amount, setAmount] = useState(0);

  const { add, trans } = useContext(GlobalContext);
  const addTransaction = add;
  const [transactions, setTransactions] = trans;

  const handleSubmit = (e) => {
    e.preventDefault();

    addTransaction({
      comment,
      amount,
    });

    window.localStorage.setItem("transactions", [
      ...transactions,
      {
        comment,
        amount,
      },
    ]);

    setComment("");
    setAmount(0);
  };

  //   console.log(comment, "comment", amount, "amount");

  //   const { comment, amount } = state;

  //   const handleChange = (e) => {
  //     setComment(e.target.value);
  //     setAmount(e.target.value);
  //   };

  return (
    <div className="add_new_transaction">
      <h3>Add new transaction</h3>
      <hr />

      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label>
            <strong>Comment</strong>
          </label>
          <input
            type="text"
            placeholder="Add Comment"
            name="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label>
            <strong>
              Amount <br />
              (negative - expense, positive - income)
            </strong>
          </label>
          <input
            type="number"
            placeholder="Add Amount"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <button type="submit" className="add_transaction">
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default AddNewTransaction;
