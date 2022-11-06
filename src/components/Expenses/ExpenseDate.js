import React from "react";
import Card from "../Ui/Card";
import "./ExpenseDate.css";
function ExpenseDate(props) {
  //   const month = props.date.toLocaleString("en-US", { month: "long" });
  //   const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  //   const year = props.date.getFullYear();
  const d = new Date();

  let year = d.getFullYear();
  return (
    <Card className="expense_date">
      {/* <div className="expense_date__month">{month}</div>
      <div className="expense_date__day">{day}</div> */}
      <div className="expense_date__year">{year}</div>
    </Card>
  );
}

export default ExpenseDate;
