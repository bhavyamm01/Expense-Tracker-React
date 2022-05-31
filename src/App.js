import React from "react";
import "./App.css";
import AddNewTransaction from "./components/AddNewTransaction/AddNewTransaction";
import Amount from "./components/Amount/Amount";
import History from "./components/History/History";
import { GlobalProvider } from "./GlobalContext";

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <h2>Expense Tracker</h2>
        <Amount />
        <History />
        <AddNewTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
