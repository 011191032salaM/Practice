import { useState } from "react";



const useFetch = (link) => {

    const [isLoading,SetIsLoading]=useState(true);
    const [isError,setIsError]=useState(false);
    const [user,setUser]=useState(0);
  return [isLoading,isError,user];
}

export default useFetch