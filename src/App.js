import { Button } from "react-bootstrap";
import Budget from "./components/Budget"
import Remaining from "./components/Remaining";
import Spent from "./components/Spent";
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm";
function App() {
  return (
    <div className="container">
     <h1 className="mt-3">My Budget Planner</h1>
     <div className="row mt-3">
      <div className="col-sm">
        <Budget/>
      </div>
      <div className="col-sm">
        <Remaining/>
      </div>
      <div className="col-sm">
        <Spent/>
      </div>
     </div>
     <h3 className="mt-3">Expenses</h3>
     <div className="row mt-3">
        <div className="col-sm"> 
          <ExpenseList/>
        </div>
     </div>
     <h3 className="mt-3">Add Form</h3>
     <div className="row mt-3">
        <div className="col-sm"> 
          <AddExpenseForm/>
        </div>
     </div>
    </div>
  );
}

export default App;
