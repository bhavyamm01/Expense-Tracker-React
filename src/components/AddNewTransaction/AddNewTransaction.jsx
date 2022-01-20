import React, { useContext, useState } from "react";
import "./AddNewTransaction.css";
import { GlobalContext } from "../../GlobalContext";
import { useEffect } from "react/cjs/react.development";
import Swal from "sweetalert2";

const AddNewTransaction = () => {
  const [comment, setComment] = useState("");
  const [amount, setAmount] = useState(0);

  const { add, trans } = useContext(GlobalContext);
  const addTransaction = add;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (comment === "") {
      Swal.fire("Error", "Comment cannot be empty!", "error");
      setAmount(0);
      return;
    }

    addTransaction({
      comment,
      amount,
    });

    setComment("");
    setAmount(0);
  };

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
