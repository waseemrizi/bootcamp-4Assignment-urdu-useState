import React,{useReducer} from 'react'

//iitilaize object
const initialState = {
    firstCounter: 0,
    //state as a object secons scenrio 
    secondCounter: 10

}
const reducer = (state, action) =>{
    switch(action.type){
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value}
        case 'decrement':
            return {firstCounter: state.firstCounter - action.value}
            case 'increment2':
                return { ...state, firstCounter: state.firstCounter + action.value}
            case 'decrement2': 
                return { ...state,  firstCounter: state.firstCounter - action.value}
            case 'reset':
            return initialState
        default:
            return  state;
    }
}

 
 
 function CounterTwo() {
 const [count, dispath] =  useReducer(reducer, initialState)

     return (
         <div>
             <div>First Counter {count.firstCounter}
                  Second Counter {CounterTwo.secondCounter}  
             </div>

             <button onClick={ ()=> dispath({type: 'increment', value: 1}) }>increment</button>
             <button onClick={ ()=> dispath({type: 'decrement', value: 1}) }>decrement</button>
             <button onClick={ ()=> dispath({type: 'increment', value: 5}) }>increment 5</button>
             <button onClick={ ()=> dispath({type: 'decrement', value: 5}) }>decrement 5</button>
             <div>
             <button onClick={ ()=> dispath({type: 'increment2', value: 1}) }>increment 2</button>
             <button onClick={ ()=> dispath({type: 'decrement2', value: 1}) }>decrement 2</button>
             </div>
             <button onClick={ ()=> dispath({type:  'reset'}) }>reset</button>
         </div>
     )
 }
 
 export default CounterTwo;
 


