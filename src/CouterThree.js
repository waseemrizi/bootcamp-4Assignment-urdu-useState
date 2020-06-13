import React,{useReducer} from 'react'

const initialState = 0;
const reducer = (state, action) =>{
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return  state;
    }
}

 
 
 function CounterThree() {
 const [count, dispath] =  useReducer(reducer, initialState)
 const [countTwo, dispatchTwo] = useReducer(reducer, initialState)
 
     return (
         <div>
             <div>Counter {count}</div>

             <button onClick={ ()=> dispath('increment') }>increment</button>
             <button onClick={ ()=> dispath('decrement') }>decrement</button>
             <button onClick={ ()=> dispath('reset') }>reset</button>
         

         
         <div>
             <div>Counter Two {countTwo}</div>

             <button onClick={ ()=> dispatchTwo('increment') }>increment</button>
             <button onClick={ ()=> dispatchTwo('decrement') }>decrement</button>
             <button onClick={ ()=> dispatchTwo('reset') }>reset</button>
         </div>
         </div>
     )
 }
 
 export default CounterThree;
 


