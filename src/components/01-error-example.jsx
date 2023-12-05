import { useState } from 'react'
const ErrorExample = () => {
    
    const [Count, setCount] = useState(0);
    
    const countHandler=() =>{
      
      setCount((currentState)=>{

        const newState=currentState+1;
        console.log(newState);
        return newState

      
      });
    };


    return (
    
    <div>
    <h2 >useState error example</h2>
  
    <h2>{Count}</h2>
    
    <button type="button"  className="btn" onClick={countHandler} > Count </button>

    
   
    </div>
     
 );

};
  
  export default ErrorExample;
  