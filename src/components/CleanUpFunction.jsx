import React, { useState,useEffect } from 'react'

const CleanUpFunction = () => {
    const [toggle,setToggle]=useState(false)
    
     console.log('Render');
  return (
    <div>

        <button type="button" className=' bg-amber-600 p-3 my-10 mx-14 rounded-full z-10' onClick={()=>setToggle(!toggle)}>
            Toggle Here
        </button>

        {toggle && < SomeComponent />}

      
    </div>

    
  );
};

const SomeComponent = () => {
  useEffect(() => {
    // console.log('hmm, this is interesting');
    const someFunc = () => {
      // some logic here
    };
    window.addEventListener('scroll', someFunc);
    // return () => window.removeEventListener('scroll', someFunc);
   
  }, []);
  return <h1 className='mx-12 bg-cyan-900'>hello there</h1>;

  

};

export default CleanUpFunction