import { useState } from "react";

const MultipleInputs = () => {
  const [user,setUser]=useState({
    name:'',
    email:'',
    password:''
  })

  const handleChange=(e)=>{

    // console.log(e.target.name);
    // console.log(e.target.value);
    const newUser={...user,[e.target.name]:e.target.value} //...Gather ALl previous value [name]->Accessed :[Value]
    setUser(newUser);
  }

  const handleSubmit=(e)=>{

   e.preventDefault();
   console.log(user);
  }
  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Multiple Inputs</h4>
        {/* name */}
        <div className='form-row'>
          <label htmlFor='name' className='font-semibold mx-3'>
            name
          </label>
          <input type='text' className='h-5 w-100 bg-zinc-200 mx-10 rounded-xl text-justify text-lg' id='name' value={user.name} name="name" onChange={handleChange}/>
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='email' className='font-semibold mx-3' >
            Email
          </label>
          <input type='email' className='h-5 w-150 mx-10 rounded-xl text-justify text-lg bg-zinc-400' id='email' value={user.email} name="email" onChange={handleChange} />
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='password' className='font-semibold mx-3'>
            Password
          </label>
          <input type='password' className='h-5 w-200 mx-10 bg-zinc-200 rounded-xl text-justify text-lg' id='password' value={user.password} name="password" onChange={handleChange} />
        </div>

        

        <button type='submit' className='bg-purple-900 rounded-full p-2 mx-10'>
          submit
        </button>
      </form>
    </div>
  );
};
export default MultipleInputs;
