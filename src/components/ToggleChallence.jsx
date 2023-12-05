import React, { useEffect, useState } from 'react'

const ToggleChallence = () => {
    const [toggle,setToggle]=useState(false);

    // const allert=()=>{
    //     if(toggle)
    //     {
    //       setToggle(false);
    //     return
    //     }
    //     setToggle(true);
    // };
    
  return (
    <div>
        <button  onClick={()=>setToggle(!toggle) } className=' mx-10 my-10 p-5 bg-blue-700 items-center rounded-full' >Toggle</button>
        {toggle && <ToggleAlert />}
    </div>
    
  )};
  const ToggleAlert=()=>{
  
    return <h1 className=' bg-red-500 text-white font-bold rounded-t px-4 py-2 mx-10'>Hello World</h1>

    };

    
  

export default ToggleChallence