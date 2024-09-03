import React from 'react'
import Navbar2 from './Navbar2'
import Form from './Form'


const Config = ({ hover}) => {
  return (
    <div className={` ${hover ? 'ml-[14.25rem]'  : 'ml-[3.375rem]'} transition-all duration-[650ms] h-screen`}>
        <Navbar2 />
        <div className='w-full h-full flex justify-center items-center'>
            <div className='w-full h-full p-8 flex justify-center items-center'>
                <Form />
            </div>
        </div>
    </div>  
  )
}

export default Config