import React ,{useContext} from 'react'
import { AppContext } from '../context/AppContext';

const Remaining = () => {
  const {expenses,budget} = useContext(AppContext);
  const totalExpense = expenses.reduce((total,item) =>{
    return (total = parseInt(total)+parseInt(item.price))
  },0)
  return (
    <div className='alert alert-success p-3'>
        Remaning :{budget-totalExpense}$
    </div>
  )
}
export default Remaining;