import React,{useState} from 'react'
import {AiOutlineMenu,AiOutlineHome,AiOutlineMail,AiOutlineProject} from 'react-icons/ai'
import {GrProjects} from 'react-icons/gr'
import {BsPerson} from 'react-icons/bs'
const Sidenap = () => {
  const [nav,setNav]=useState(0);
  const handlenav=()=>{
    setNav(!nav);
  };

  return (
    <div>
  < AiOutlineMenu onClick={handlenav} className='absolute top-4 right-4 z-50 mx-0 md:block' />
  
{

  nav ? (
    <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
       <a href='#main ' className='w-[75%] flex justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-100 m-2 p-4 cursor-pointer hover:scale-50 '>
    <AiOutlineHome size={20} />
    <span className=' pl-4 '> Home</span>
    </a> <br/>
    <a href='#main ' className='w-[75%] flex justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-100 m-2 p-4 cursor-pointer hover:scale-50 '>
    <GrProjects size={20} />
    <span className=' pl-4 '> Work</span>
    </a><br/>
    <a href='#main ' className='w-[75%] flex justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-100 m-2 p-4 cursor-pointer hover:scale-50'>
    <BsPerson size={20} />
    <span className=' pl-4 '> Resume</span>
    </a><br/>
    <a href='#main ' className='w-[75%] flex justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-100 m-2 p-4 cursor-pointer hover:scale-50'>
    <AiOutlineProject size={20} />
    <span className=' pl-4 '> Project</span>
    </a><br/>
    <a href='#main ' className='w-[75%] flex justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-100 m-2 p-4 cursor-pointer hover:scale-50'>
    <AiOutlineMail size={20} />
    <span className=' pl-4 '> Contact</span>
    </a><br/>
    </div>
    

  ): (

  " "
 )}
<div className="md:block hidden fixed top-[25%] z-10">

  <div className="flex flex-col">
  <a className="rounded-full shadow-lg m-2 p-4 bg-gray-100 shadow-gray-400 cursor-pointer ">
    < AiOutlineHome />
  </a>
  <a className="rounded-full shadow-lg m-2 p-4 bg-gray-100 shadow-gray-400 cursor-pointer ">
    < AiOutlineProject />
  </a>
  <a className="rounded-full shadow-lg m-2 p-4 bg-gray-100 shadow-gray-400 cursor-pointer ">
    < BsPerson />
  </a>
  <a className="rounded-full shadow-lg m-2 p-4 bg-gray-100 shadow-gray-400 cursor-pointer ">
    < GrProjects />
  </a>
  <a className="rounded-full shadow-lg m-2 p-4 bg-gray-100 shadow-gray-400 cursor-pointer ">
    < AiOutlineMail />
  </a>
  </div>


</div>
    </div>
  );
};

export default Sidenap