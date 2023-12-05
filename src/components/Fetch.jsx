import React, { useState, useEffect } from 'react';

const Fetch = () => {
 
  const [users, setUsers] = useState([ ]);
  const [isLoading,setIsLoading]=useState(true);

  const url = 'https://api.github.com/users';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);


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
    <section>
    
  <h3>Github User</h3>
  <ul className='users'>
    
    {
      users.map((user)=>{
       const {id,avatar_url,html_url,login}=user;
        return <li key={id}>

<img  className="rounded-full shadow-lg m-2 p-4 bg-gray-100 shadow-gray-400 cursor-pointer" src={avatar_url} alt={login} />
<h5 className='rounded-full shadow-lg m-2 p-4 bg-gray-100 shadow-gray-400 cursor-pointer'>Login</h5>
<a href={html_url} className='rounded-full shadow-lg m-2 p-4 bg-gray-100 shadow-gray-400 cursor-pointer'>Profile</a>

        </li>
       
      })
    }
  </ul>

    
 

    </section>

  )
}
    

export default Fetch
