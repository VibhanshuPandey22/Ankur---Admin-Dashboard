import React from 'react'
import { navBarData1, navBarData2, navBarData3 } from '../constants/navbarData'
import { Link } from 'react-router-dom'


const Navbar = ( { hover } ) => {

  return (
    <header>
       <nav className={`flex gap-7 flex-col h-screen ${hover ? 'w-[14.25rem]' : 'w-[3.375rem]' } transition-all duration-[650ms] bg-darkGray text-white fixed`}>
        <div className={`flex items-center flex-grow-0 ${hover && 'mr-[10rem]'} transition-all duration-[650ms] justify-center mb-2 mt-5 `}>
            {navBarData1.map((item, index) => (
              <div key={item.id} className={` ml-auto flex items-center bg-transparent rounded-full h-[2.7rem] w-[2.7rem] cursor-pointer`}>
                <div className='flex justify-center items-center h-full'>
                  <item.icon style={{ fontSize: `${item.size}rem`}}/>
                </div>
                <div className={`items-center ${hover ? 'w-full' : 'w-0'}`}>
                  <Link to={item.link} className={`${hover ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-all duration-300  delay-30 ml-3 font-poppins text-sm whitespace-nowrap  hover:text-searchGreen` }>{item.text}</Link>
                </div>
              </div>
            ))}
        </div>

        <div className={`flex items-center flex-grow-[10] flex-col my-2 gap-5 ${hover && 'mr-[10rem]'} transition-all duration-[650ms] `}>
          {navBarData2.map((item, index) => (
            <div key={item.id} className='ml-auto flex items-center bg-transparent rounded-xl h-[2.6rem] w-[2.6rem] cursor-pointer '> 
                <div className='flex justify-center items-center h-full'>
                  <item.icon style={{ fontSize: `${item.size}rem`}}/>
                </div>
                <div className={`items-center ${hover ? 'w-full' : 'w-0'} `}>
                  <Link to={item.link} className={`${hover ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-all duration-300 delay-30 ml-3 font-poppins text-sm whitespace-nowrap hover:text-searchGreen`}>{item.text}</Link>
                </div>
            </div>
          ))}
        </div>

        <div className={`flex items-center flex-grow-[1] gap-5 flex-col my-1 ${hover && 'mr-[10rem]'} transition-all duration-[650ms] `}>
          {navBarData3.map((item, index) => (
              <div key={item.id} className='ml-auto flex items-center bg-transparent rounded-xl h-[2.6rem] w-[2.6rem] cursor-pointer'>
                <div className='flex justify-center items-center h-full'>
                  <item.icon style={{ fontSize: `${item.size}rem`}}/>
                </div>
                <div className={`items-center ${hover ? 'w-full' : 'w-0'}`}>
                  <Link to={item.link} className={`${hover ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-all duration-300 delay-30 ml-3 font-poppins text-sm whitespace-nowrap hover:text-searchGreen`}>{item.text}</Link>
                </div>
              </div>
            ))}
        </div>
    </nav>
    </header>
  )
}

export default Navbar

