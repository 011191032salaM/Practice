import React, { useEffect, useState } from 'react'

const MultiReturn = () => {
    const [isLoading,setIsLoading]=useState(true);


    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false);
        },3000)
    },[])
    if(isLoading)
    {
        return <h1 className=' text-center mt-10 font-bold'>Loading.....</h1>
    }
  return (
    <div className=' text-center mt-10 font-semibold'>Multiple Return Basics</div>
  )
}

export default MultiReturn