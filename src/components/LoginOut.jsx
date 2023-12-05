import { useState } from 'react';

const LoginOut = () => {
  // falsy
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('susan');
  const [user, setUser] = useState({ name: 'john' });
  const [isEditing, setIsEditing] = useState(true);

  const login=()=>{setUser({name:'Track your way of path'})}
const Logout=()=>{
    setUser(null);
}
  // can't use if statements
  return (
    <div>
      <h2 className='mx-10 font-semibold '>{text || name}</h2>
      {text && (
        <div>
          {/* <h2> whatever return</h2>
          <h2>{name}</h2> */}
        </div>
      )}
      {/* more info below */}
      {/* {!text && (
        <div className=' bg-violet-900 mx-10'>
          <h2> whatever return</h2>
          <h2>{name}</h2>
        </div>
      )} */}
      {user && <SomeComponent name={user.name} />}
      {/* <h2 className='font-extralight'>Ternary Operator</h2> */}
      <button className=' bg-violet-900 mx-10'>{isEditing ? 'edit' : 'add'}</button>
      {user ? (
        <div>
          <h4>hello there user {user.name}</h4>
          <button className='mx-10' onClick={Logout}>log out</button>
        </div>
      ) : (
        <div className=' mx-10'>
      <h4 className='mx-0'>Login Here</h4>
      <button className='mx-8' onClick={login}>login</button>
    </div>
      )}
    </div>
  );
};

const SomeComponent = ({ name }) => {
  return (
    <div className=' mx-10'>
      <h4>hello, {name}</h4>
    
    </div>
  );
};
export default LoginOut;