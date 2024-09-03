import React from 'react'
import Searchbar from './Searchbar'

const Navbar2 = () => {
  return (
    <div className='h-[4.2rem] bg-white rounded-lg border-[1px]'>
      <div className='h-full flex items-center justify-between px-3 max-lg:px-2 max-md:px-2'>
        <div className='pl-5 max-md:pl-1'>
          <p className='text-3xl font-poppins font-medium tracking-tight max-lg:text-2xl max-md:text-xl max-sm:text-lg'>Overview Dashboard</p>
        </div>
        <div>
            <Searchbar/>
        </div>
      </div>
    </div>
  )
}

export default Navbar2