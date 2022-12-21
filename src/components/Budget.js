import React ,{useContext}from 'react'
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const {budget} =useContext(AppContext)

  return (
    <div className='alert alert-secondary p-3'>
        Budget :{budget}$
    </div>
  )
}
export default Budget;