
import {useState } from 'react';

const UseStateGotcha = () => {

    const [value, setValue]=useState(0);
const handleButton=()=>{
  setTimeout(()=>{
    console.log("Button Clicked ");
    setValue((currentState)=>{
return currentState +1;
    });
  },3000)
}
  return (
    <div>
        <h1>{value}</h1>
        <button type='button' className='btn' onClick={handleButton}>Increse</button>
    </div>
  );
};

export default UseStateGotcha