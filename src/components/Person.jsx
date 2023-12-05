import React from "react"

import avatar from '../assets/avatar.svg'

    function Person({name,nickName='Shakeend Tahir', images}) {
      // const avatar='src\assets\photo.avif'
      const img =images?.[0]?.small?.url ?? avatar
      return (
      <div className=" m-20">
          <h1>Name: {name}</h1> 
          <h1>Nickname: {nickName}</h1> 
          <img src={img}  alt={name} className=" w-20" />

        </div>);
    }
  export default Person 
  