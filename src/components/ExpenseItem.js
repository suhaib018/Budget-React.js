import React, { useContext } from 'react'
import { TiDelete } from 'react-icons/ti';
import { Badge } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
  const {dispatch} = useContext(AppContext);
  const handleDelete = () =>{
    dispatch({
      type:"DELETE_EXPENSE",
      payload:props.id
    })
  }

  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
              {props.name}
        <div>
            <Badge pill  bg="primary" text="light" className='px-1 mx-3'>
            £{props.cost}
            </Badge>
            <TiDelete size='1.5em' onClick={handleDelete} style={{cursor:"pointer"}}/>
        </div>
    </li>
  )
}

export default ExpenseItem;