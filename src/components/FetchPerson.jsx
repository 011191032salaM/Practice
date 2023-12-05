import useFetch from "./useFetchPerson";

import React from 'react'
const url = 'https://api.github.com/users/QuincyLarson';

const FetchPerson = () => {
    const {isLoading,isError,data:user}=useFetch(url);
    if(isLoading)
    {
        return <h2>Loading.........</h2>
    }

    if(isError){
        return <h2 >There is an Error...</h2>
    }

    const {name,avatar_url,company,bio}=user
  
    return (
        <div>
          <img
            style={{ width: '100px', borderRadius: '25px' }}
            src={avatar_url}
            alt={name}
          />
          <h2>{name}</h2>
          <h4>works at {company}</h4>
          <p>{bio}</p>
        </div>
      );
  
}

export default FetchPerson