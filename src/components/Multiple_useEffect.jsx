import React, { useEffect, useState } from 'react'

const Multiple_useEffect = () => {

    const [value,setValue]=useState(0);
    const [Value2,setValue2]=useState(0);

    useEffect(()=>{
        console.log('Hello from UseState-1');
    },[value]);

    useEffect(()=>{
        console.log('Hello from UseState-2');
    },[Value2]);
  return (
<div>
    <div className="value1">
    <h1>value: {value}</h1>
    <button type="button" onClick={()=>setValue(value+1 )}>Increse</button>
    </div>
   <div className="value2">
    <h1>value2: {Value2}</h1>
    <button type="button" onClick={()=>setValue2(Value2 + 1)}>Increse</button>
    </div>
       
        
</div>
  )
}

export default Multiple_useEffect