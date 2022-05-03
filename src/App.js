import React,{useState} from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";
function App() {
const DUMMY_EXPENSES = [
  {id:"e1",title:"Car Insurance",amount:94.12,date:new Date(2018,7,14)},
  {id:"e2",title:"Mobile Insurance",amount:94.12,date:new Date(2019,11,12)},
  {id:"e3",title:"Truck Insurance",amount:94.12,date:new Date(2020,10,14)},
  {id:"e4",title:"Home Insurance",amount:94.12,date:new Date(2020,7,15)},
  {id:"e5",title:"Home Insurance",amount:94.12,date:new Date(2022,7,15)},
]

const [expenses,setExpenses] = useState(DUMMY_EXPENSES)

const addExpenseHandler = expense => {
  setExpenses(prevExpesnse =>{
    return [expense,...prevExpesnse]
  })
}

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
