import { useEffect, useRef, useState } from "react";

import plus from "./src/img/plus.svg";
import trash from "./src/img/trash.svg";

import "./SimplifiedBudget.scss";

const formatAmount = (amount) => {
  const stringAmount = amount
    ? Math.floor(amount * 100)
        .toString()
        .replace(/(\d{2})$/, ".$1")
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

const AddPanel = ({ budget, setBudget, expenses, setExpenses }) => {
  const budgetRef = useRef();
  const expenseRef = useRef();
  const amountRef = useRef();

  const handleAddClick = () => {
    const currAmountStr = amountRef.current.value.replace(",", ".");
    const currExpenseStr = expenseRef.current.value;

    // check amount
    if (currAmountStr === "" || /[^\d\.]./.test(currAmountStr)) {
      amountRef.current.style.border = "2px solid var(--negative)";
      return;
    }

    // check expense
    if (currExpenseStr.length === 0) {
      expenseRef.current.style.border = "2px solid var(--negative)";
      return;
    }

    const newExpense = {
      id: Date.now().toString(),
      amount: Number(currAmountStr),
      name: currExpenseStr,
    };

    setExpenses([...expenses, newExpense]);
    expenseRef.current.value = "";
    amountRef.current.value = "";
  };

  const handleAmountBlur = () => {
    if (!/[^\d\.\,]./.test(amountRef.current.value))
      amountRef.current.style.border = "";
  };

  const handleBudgetChange = () => {
    const invalidInput = /[^\d\s\.\,]/.test(budgetRef.current.value);
  };

  const handleBudgetBlur = () => {
    const filledValue = Number(budgetRef.current.value.replace(",", ".")) || -1;

    filledValue < 0
      ? setBudget(0)
      : setBudget(Math.floor(filledValue * 100) / 100);

    budgetRef.current.value = formatAmount(budget);
  };

  const handleExpenseBlur = () => {
    if (expenseRef.current.value.length) expenseRef.current.style.border = "";
  };

  useEffect(() => {
    budgetRef.current.value = formatAmount(budget);
  });

  return (
    <div className="AddPanel">
      <h1>Simplified Budget</h1>
      <div className="field">
        <input
          ref={budgetRef}
          onBlur={handleBudgetBlur}
          onChange={handleBudgetChange}
          type="text"
          name="income"
          id="income"
        />
        <label htmlFor="income">Budget Amount</label>
      </div>
      <div className="add-expense">
        <div className="field">
          <input
            ref={expenseRef}
            onBlur={handleExpenseBlur}
            type="text"
            name="expense-name"
            id="expense-name"
          />
          <label htmlFor="expense-name">Expense</label>
        </div>
        <div className="field">
          <input
            ref={amountRef}
            onBlur={handleAmountBlur}
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

const ExpensesPanel = ({ expenses, setExpenses }) => {
  const handleDeleteItem = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div className="ExpensesPanel">
      <h2>Expenses</h2>
      <ul className="expense-table">
        {expenses.map((expense) => (
          <li key={expense.id}>
            <ExpenseItem
              expense={expense}
              handleDeleteItem={handleDeleteItem}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

const ExpenseItem = ({ expense, handleDeleteItem }) => {
  return (
    <div className="ExpenseItem">
      <div>{expense.name}</div>
      <div>{formatAmount(expense.amount)}</div>
      <div className="delete">
        <button
          name="delete-expense"
          className="delete-expense"
          onClick={() => handleDeleteItem(expense.id)}
        >
          <img src={trash} alt="Tash" />
        </button>
      </div>
    </div>
  );
};

const SummaryPanel = ({ budget, totalExpenses }) => {
  const balanceRef = useRef();
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    setBalance(budget - totalExpenses);
  }, [budget, totalExpenses]);

  useEffect(() => {
    balanceRef.current.style.color = balance < 0 ? "#df1414" : "inherit";
  }, [balance]);

  return (
    <div className="SummaryPanel">
      <div className="summary-item">
        <div className="summary-label">Income</div>
        <div className="summary-amount">{formatAmount(budget)}</div>
      </div>

      <div className="summary-item">
        <div className="summary-label">Expenses</div>
        <div className="summary-amount">{formatAmount(totalExpenses)}</div>
      </div>

      <div className="summary-item">
        <div className="summary-label">Balance</div>
        <div ref={balanceRef} className="summary-amount">
          {formatAmount(balance)}
        </div>
      </div>
    </div>
  );
};

const SimplifiedBudget = () => {
  const [budget, setBudget] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [totalExpenses, setTotalExpenses] = useState(0);

  useEffect(() => {
    setTotalExpenses(expenses.reduce((sum, exp) => sum + exp.amount, 0));
  }, [expenses]);

  return (
    <div className="SimplifiedBudget">
      <div className="wrapper">
        <AddPanel
          budget={budget}
          setBudget={setBudget}
          expenses={expenses}
          setExpenses={setExpenses}
        />
        <ExpensesPanel expenses={expenses} setExpenses={setExpenses} />
        <SummaryPanel budget={budget} totalExpenses={totalExpenses} />
      </div>
    </div>
  );
};

export default SimplifiedBudget;
