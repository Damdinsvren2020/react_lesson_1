import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./Expenseltem.css";

function ExpenselItem(props) {
  // const expenseDate = new Date(2022, 10, 29);
  // const expenseTitle = "Car insuranse";
  // const expenseAmount = 294.67;
  return (
    
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenselItem;
