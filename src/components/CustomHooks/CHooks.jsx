import React from 'react'
import useToggle from './useToggle'

const CHooks = () => {

    const {show,toggle}=useToggle(true);
  return (
    <>
    
    
    <h1>Custom Hooks</h1>
    <button className='w-300 h-10 rounded-full bg-pink-700 ' onClick={toggle}>
      Toggle
    </button>

    {show && <h1>Toggle Here</h1>}
    
    
    
    </>
  )
}

export default CHooks