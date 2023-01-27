import { Fragment } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
const ExpenseItem = ({ date, title, amount }) => {
  return (
    <Fragment>
      <div className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2 className="expense-item h2">{title}</h2>
          <div className="expense-item__price">${amount}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default ExpenseItem;
