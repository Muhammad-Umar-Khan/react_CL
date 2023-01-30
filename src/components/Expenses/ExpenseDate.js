import "./ExpenseDate.css";
import Card from "./Card";
const ExpenseDate = ({ date }) => {
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();
  return (
    <Card className="expense-date">
      <div>{day}</div>
      <div>{month}</div>
      <div>{year}</div> 
    </Card>
  );
};

export default ExpenseDate;
