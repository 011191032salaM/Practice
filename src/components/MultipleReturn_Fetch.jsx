// import React, { useEffect, useState } from 'react'

// const MultipleReturn_Fetch = () => {
//     const [isLoading,setIsLoading]=useState(true);
//     const [isError,setIsError]=useState(false);
//     const [user,setUser]=useState(0);
//     const url = 'https://api.github.com/users/QuincyLarson';
//     useEffect(()=>{

//      const fetchUser=async()=>{

//       try {
//         const resp=await fetch(url);
//         const users=await resp.json();
//         console.log(users);
//     } catch (error) {
//       setIsError(true);
//         console.log(error);
//     };

//     setIsLoading(false);

//      }
//        fetchUser();
//     },[])

//     if(isLoading){return <h1 className=' text-center mt-10 font-bold'>Loading.....</h1>}

//     if(isError){return <h1 className=' text-center mt-10 font-bold'>There is an error...</h1>}
//   return (
//     <div>

//     {
//       user.map((u)=>{
//         const {id,avatar_url ,name,company}=u;
//         return <li key={id}>


//         <img src={avatar_url} alt={name} />
//         <h1>Name: {name}</h1>
//         <h2>Works at {company}</h2>
//         </li>
        
//       })

//     };

  
    
      
//     </div>
//   )
// }

// export default MultipleReturn_Fetch


import React, { useEffect, useState } from 'react'

const MultipleReturn_Fetch = () => {
    const [isLoading,setIsLoading]=useState(true);
    const [isError,setIsError]=useState(false);
    const [user,setUser]=useState(0);
    const url = 'https://api.github.com/users/QuincyLarson';

   

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resp = await fetch(url);
        // console.log(resp);
        if (!resp.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }

        const user = await resp.json();
        setUser(user);
      } catch (error) {
        setIsError(true);
        // console.log(error);
      }
      // hide loading
      setIsLoading(false);
    };
    fetchUser();
  }, []);
  // order matters
  // don't place user JSX before loading or error

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>There was an error...</h2>;
  }
  const { avatar_url, name, company, bio } = user;
  return (
    <div className=' ml-11 mt-10  p-10 hover:sm:m-11'>
      <img className=' rounded-full'
       
        src={avatar_url}
        alt={name}
      />
      <h2 className=' font-serif'>{name}</h2>
      <h4>works at {company}</h4>
      <p className=' font-serif'>{bio}</p>
    </div>
  );
};
export default MultipleReturn_Fetch