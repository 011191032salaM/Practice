import React, { useState,createContext } from 'react'
import NavLinks from './NavLinks';

export const NavbarContext=createContext();

const Navbar = () => {
    const [user,setUser]= useState({name: 'Bob'});
    const logout=()=>{
        setUser(null);
    };

  return (
  <NavbarContext.Provider value={{user,logout}}>

     <nav className='bg-yellow-500 h-22'>
     <h5>Context API </h5>
     <NavLinks />
     </nav>

  </NavbarContext.Provider>
  );
};

export default Navbar