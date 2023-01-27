import { Fragment } from "react";
import "./ExpenseItem.css";
const ExpenseItem = ({date, title, amount}) => {
  return (
    <Fragment>
      <div className="expense-item">
      {/* {expenseDate} will give you error of can't return objects as JSX element  */}
        <div>{date.toISOString()}</div> 
        <div className="expense-item__description">
          <h2 className="expense-item h2">{title}</h2>
          <div className="expense-item__price">${amount}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default ExpenseItem;
