import React, { useState,useContext } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { AppContext } from '../context/AppContext';

const AddExpenseForm = () => {
	const {dispatch} = useContext(AppContext);
	const [name,setName] = useState('');
	const [cost,setCost] = useState(0);

	const onSubmit = (event) =>{
		event.preventDefault();
		const newExpense= {
			id:uuidv4(),
			name:name,
			price:cost
		}

		dispatch({
			type:"ADD_EXPENSE",
			payload:newExpense,
			})
	}
  return (
    <form onSubmit={onSubmit}>
			<div className='row'>
				<div className='col-sm col-lg-4'>
					<label htmlFor='name'>Name</label>
					<input
						required='required'
						type='text'
						className='form-control'
						id='name'
						value={name}
						onChange={(event) => setName(event.target.value)}
					/>
				</div>
				<div className='col-sm col-lg-4'>
					<label htmlFor='cost'>Cost</label>
					<input
						required='required'
						type='number'
						className='form-control'
						id='cost'
						value={cost}
						onChange={(event) => setCost(event.target.value)}
					/>
				</div>
			</div>
			<div className='row mt-3'>
				<div className='col-sm'>
					<button type='submit' className='btn btn-primary'>
						Save
					</button>
				</div>
			</div>
		</form>

  )
}
export default AddExpenseForm;