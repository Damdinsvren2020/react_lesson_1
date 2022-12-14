import "./App.css";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";
// ?Байвал нөхцөл шалгах
// : Байхгүй бол

const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: "August 19, 1975 23:15:30 UTC",
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: "August 19, 1975 23:15:30 UTC",
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: "August 19, 1975 23:15:30 UTC",
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: "August 19, 1975 23:15:30 UTC",
  },
];

function App() {
  return (
    <div className="Bg">
      <NewExpense />

      {/* <h2>test</h2> */}
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
