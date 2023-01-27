import "./ExpenseDate.css";
const ExpenseDate = ({ date }) => {
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();
  return (
    <div className="expense-date">
      <div>{day}</div>
      <div>{month}</div>
      <div>{year}</div> 
    </div>
  );
};

export default ExpenseDate;
