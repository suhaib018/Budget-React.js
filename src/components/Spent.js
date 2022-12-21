import React ,{useContext} from 'react'
import { AppContext } from '../context/AppContext';

const Spent = () => {
  const {expenses,budget} = useContext(AppContext);
  const totalExpense = expenses.reduce((total,item) =>{
    return (total = parseInt(total)+parseInt(item.price))
  },0)
  return (
    <div className='alert alert-info'>Spent so far:{totalExpense}$</div>
  )
}
export default Spent;