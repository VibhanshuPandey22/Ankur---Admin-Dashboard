import React from 'react'
import Navbar2 from './Navbar2'
import PowerBIReport from './PowerBIReport';

const Home = ( { hover } ) => {


    return (

        <div className={` ${hover ? 'ml-[14.25rem]'  : 'ml-[3.375rem]'} transition-all duration-[650ms] h-screen`}>
            <Navbar2 />
            <PowerBIReport/>
        </div>  
    )
}

export default Home