import { useRef, useState } from "react";

import plus from "./src/img/plus.svg";
import trash from "./src/img/trash.svg";

import "./SimplifiedBudget.scss";

const AddPanel = () => {
  const budgetRef = useRef();
  const expenseRef = useRef();
  const amountRef = useRef();

  const handleAddClick = () => {
    console.log("clicked");
  };

  return (
    <div className="AddPanel">
      <h1>Simplified Budget</h1>
      <div className="field">
        <input ref={budgetRef} type="text" name="income" id="income" />
        <label htmlFor="income">Budget Amount</label>
      </div>
      <div className="add-expense">
        <div className="field">
          <input
            ref={expenseRef}
            type="text"
            name="expense-name"
            id="expense-name"
          />
          <label htmlFor="expense-name">Expense</label>
        </div>
        <div className="field">
          <input
            ref={amountRef}
            type="text"
            name="expense-amount"
            id="expense-amount"
          />
          <label htmlFor="expense-amount">Amount</label>
        </div>
        <button
          onClick={handleAddClick}
          name="add-expense-button"
          id="add-expense-button"
          className="add-expense-button"
        >
          <img src={plus} alt="Plus" />
        </button>
      </div>
    </div>
  );
};

const ExpensesPanel = () => {
  return (
    <div className="ExpensesPanel">
      <h2>Expenses</h2>
      <div className="expense-table">
        <div>Starbucks</div>
        <div>$5.54</div>
        <div className="delete">
          <button name="delete-expense" className="delete-expense">
            <img src={trash} alt="Tash" />
          </button>
        </div>

        <div>Starbucks</div>
        <div>$5.54</div>
        <div className="delete">
          <button name="delete-expense" className="delete-expense">
            <img src={trash} alt="Tash" />
          </button>
        </div>

        <div>Starbucks</div>
        <div>$5.54</div>
        <div className="delete">
          <button name="delete-expense" className="delete-expense">
            <img src={trash} alt="Tash" />
          </button>
        </div>
      </div>
    </div>
  );
};

const SummaryPanel = ({ budget }) => {
  const formatAmount = (amount) => {
    const stringAmount = amount
      ? Math.floor(amount * 100)
          .toString()
          .replace(/(\d{2})^/, ".$1")
      : "0.00";

    const formatedAmount = stringAmount
      .split("")
      .reverse()
      .join("")
      .replace(/(\d{3})(?=\d)/g, "$1,")
      .split("")
      .reverse()
      .join("");
    return "$" + formatedAmount;
  };

  return (
    <div className="SummaryPanel">
      <div className="summary-item">
        <div className="summary-label">Income</div>
        <div className="summary-amount">{formatAmount(budget)}</div>
      </div>

      <div className="summary-item">
        <div className="summary-label">Expenses</div>
        <div className="summary-amount">$42,000.00</div>
      </div>

      <div className="summary-item">
        <div className="summary-label">Balance</div>
        <div className="summary-amount">$42,000.00</div>
      </div>
    </div>
  );
};

const SimplifiedBudget = () => {
  const [budget, setBudget] = useState(0);

  return (
    <div className="SimplifiedBudget">
      <div className="wrapper">
        <AddPanel />
        <ExpensesPanel />
        <SummaryPanel budget={budget} />
      </div>
    </div>
  );
};

export default SimplifiedBudget;
