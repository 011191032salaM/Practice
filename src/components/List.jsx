import React from 'react'
import { people } from '../../data'
import Person from './Person'

const List = () => {
  return (
    <> 
        
        {people.map((p)=>{
        return (<Person   key={p.name} {...p}  /> 

    )})}
    
     </>
  )
}

export default List