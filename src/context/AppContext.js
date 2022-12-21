import React,{createContext,useReducer} from "react";
import { v4 as uuidv4 } from 'uuid';

export const AppReducer = (state, action) => {    
    switch(action.type){
        case 'ADD_EXPENSE':
            return{

                ...state,
                expenses:[action.payload,]
            }
        case 'DELETE_EXPENSE':
            return{
                ...state,
                expenses:state.expenses.filter(item => {
                    return (item.id !==action.payload)
                })
            }
        default :
        return state;
    }
}

const initialState = {
    budget:2000,
    expenses:[
        {id:uuidv4(),name:"Shopping",price:200},
        {id:uuidv4(),name:"Holiday",price:500},
        {id:uuidv4(),name:"Fuel",price:100},
        {id:uuidv4(),name:"Child care",price:40},
    ]
}

export const AppContext = createContext(initialState);

export const AppProvide = ({children}) =>{
    const [state,dispatch] = useReducer(AppReducer,initialState)

    return (
		<AppContext.Provider
			value={{
				expenses: state.expenses,
				budget: state.budget,
				dispatch,
			}}
		>
			{children}
		</AppContext.Provider>
	);

} 