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
      

      <button onClick={ 
        ()=> setCount(count +1)
         }>
           Button Update
           </button>

          

          <button onClick={
            ()=> setMorning(!isMorning)
          }>
            Update day
          </button>



    </div>

  );
}


