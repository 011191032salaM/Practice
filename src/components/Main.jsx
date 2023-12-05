import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import {FaFacebookF,FaLinkedinIn,FaTwitter,FaInstagram } from 'react-icons/fa'

const Main = () => {
  return (
    <div id='main'>
        <img className=' w-full h-screen object-cover object-right '
         src="src\assets\photo.avif" alt="/" 
         />
           <div id='profile' className="w-full h-screen absolute top-0 left-0 bottom-9 bg-white/50  items-center  flex flex-col justify-center">
             <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start"></div>
             <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">I am Salam Rahaman</h1>
    <h2 className="flex sm:text-5xl text-2xl pt-4 text-gray-800">I am</h2>
          <TypeAnimation
      sequence={[
        'Coder', // Types 'One'
        1000, // Waits 1s
        'Web developer', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'MERN Stack', // Types 'Three' without deleting 'Two'
      //   () => {
      //     console.log('Sequence completed'); // Place optional callbacks anywhere in the array
      //   }
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '1em', paddingLeft: '5px' }}
    />
          
          <div id='social_media' className="flex justify-between pt-6 max-w-[200px] w-full">

            <FaFacebookF className='rounded-full size{20} cursor-pointer hover:scale-50  '/>
            <FaTwitter className='rounded-full size{20} cursor-pointer'/>
            <FaLinkedinIn className='rounded-full size{20} cursor-pointer '/>
            <FaInstagram className='rounded-full size{20} cursor-pointer'/>

          </div>
        </div>
    </div>
  )
}

export default Main