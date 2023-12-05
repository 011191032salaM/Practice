import { useState } from "react";
import { data } from '../../../data';

const UserChallenge = () => {
  const [name,setName]=useState('');
  const [user,setUser]=useState(data);

  const handleButton=(e)=>{
    e.preventDefault();
    if(!name) return
  const id=Date.now();
  const newUSer={id:id,name};
  // const FinalVal=[...user,newUSer];
  setUser([...user,newUSer]);
  setName('');
      console.log('Form Submitted');
  }

  
const removeItem=(id)=>{
  const items=user.filter((itm)=>
    
    (itm.id !== id));
    setUser(items);
}

  return (
    <div className=" bg-emerald-500 h-1000 w-1000   rounded-2xl p-10">
      <form className='form' onSubmit={handleButton}>
        <h4 className="text-white mx-40">Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='text-2xl'>
            name
          </label>
          <input type='text' className="placeholder:'Enter your name' w-100 h-2px px-10  mx-5 rounded-full" value={name} onChange={(e)=>setName(e.target.value)} />
        </div>

        <button  type='submit' className=' bg-blue-700 text-yellow-50 my-10  mx-40 rounded-full w-34 ' onClick={handleButton}>
          submit
        </button>
      </form>
      <h4 className="align-center">
      <div className="mx-24  ">

        <h1 className="mx-22 underline">User List</h1>

  {

    user.map((u)=>{
return <div  key={u.id}>



  <h4>{u.name}</h4>
  <button  type='submit' className=' bg-blue-700 text-yellow-50 my-10  mx-40 rounded-full w-34 ' onClick={()=>removeItem(u.id)}>
          Remove
        </button>
    </div>
    
    })
  }


      </div>
      </h4>

    
    </div>
  );
};
export default UserChallenge;
