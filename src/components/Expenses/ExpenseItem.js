import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./Expenseltem.css";

function ExpenselItem(props) {
  // const expenseDate = new Date(2022, 10, 29);
  // const expenseTitle = "Car insuranse";
  // const expenseAmount = 294.67;
  const [title, setTitle] = useState(props.title);
  const clickhandler = () => {
    setTitle("updated");
    console.log(title);
  };
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickhandler}>Change title</button>
    </div>
  );
}

export default ExpenselItem;
