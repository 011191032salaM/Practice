import {useContext} from 'react'

import { NavbarContext } from './Navbar'

const UserContainer = () => {
  

const value= useContext(NavbarContext);
const {user:user,logout:logout}=value;


  return (
  <div>
 <div className='user-container'>
      {user ? (
        <>
          <p>Hello There, {user?.name?.toUpperCase()}</p>
          <button type='button' className='btn' onClick={logout}>
            logout
          </button>
        </>
      ) : (
        <p>Please Login</p>
      )}
    </div>
    </div>
    
    
  )
}


export default UserContainer