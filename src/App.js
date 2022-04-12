import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";
function App() {
const expenses = [
  {id:"e1",title:"Car Insurance",amount:94.12,date:new Date(2020,7,14)},
  {id:"e2",title:"Car Insurance",amount:94.12,date:new Date(2020,7,14)},
  {id:"e3",title:"Car Insurance",amount:94.12,date:new Date(2020,7,14)},
  {id:"e4",title:"Car Insurance",amount:94.12,date:new Date(2020,7,14)},
]

const addExpenseHandler = expense => {
  console.log("In App.js")
  console.log(expense)
}

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
