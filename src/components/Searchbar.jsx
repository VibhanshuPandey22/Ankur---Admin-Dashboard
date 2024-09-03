import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Searchbar = () => {
  return ( 
    <div className='w-64 max-lg:w-56 max-md:w-40 max-sm:w-32 mr-8 max-lg:mr-5 max-md:mr-3 max-sm:mr-1'>
        <div className='max-w-[25rem] rounded-full px-4 bg-bodyBlue flex flex-nowrap'>
            <SearchOutlinedIcon className=' text-searchGreen' fontSize='large'/>
            <input 
                type="text" 
                className='text-searchGreen font-poppins rounded-full p-1 outline-none bg-bodyBlue max-w-52 max-lg:max-w-48 max-md:max-w-32 max-sm:max-w-10' 
            />
      </div>
    </div>
      
  )
}

export default Searchbar;
