import React, {useState} from 'react';
import './App.css';
import {Message} from './Message.js'

export default function App() {

let [count , setCount] = useState(1);
let [isMorning, setMorning] = useState(false);

  return (

    <div className={`box ${isMorning ? 'dayLight' : ''}`}>

      <h1> Good {isMorning ? 'Morning' : 'Night'}</h1>

      <Message counter={count}/ >

      <br/>
      

      <button className="btn1" onClick={ 
        ()=> setCount(count+1)
         }>
           Increment
           </button>


           <button className="btn2" onClick={ 
        ()=> setCount(count-1)
         }>
           Decrement
           </button>
      

          

          <button className="btn3" onClick={
            ()=> setMorning(!isMorning)
          }>
            Update day
          </button>

          
          



    </div>

  );
}


