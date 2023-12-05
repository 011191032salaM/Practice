import React, { useState } from 'react'

const UserChallence = () => {
    const [user,setUser]=useState(null);
    const name={"name":"Jhon"}
    const login=(name)=>{
        setUser({"name":"Jhon"});
    }

    const logout=()=>{
        setUser(null)
    }
  return (
    <div>

    login ? 
    :
    </div>
  )
}

export default UserChallence