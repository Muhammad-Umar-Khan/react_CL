import { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

const ExpenseItem = ({ expense_date, expense_title, expense_amount }) => {
  const [title, setTitle] = useState(expense_title);
  function clickHandler() {
    return setTitle("Title updated");
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={expense_date} />
      <div className="expense-item__description">
        <h2 className="expense-item h2">{title}</h2>
        <div className="expense-item__price">${expense_amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
