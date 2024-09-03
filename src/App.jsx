import Navbar from "./components/Navbar";
import React, { useRef, useState, useEffect } from 'react'
import {PowerBIEmbed} from 'powerbi-client-react';
import {models} from 'powerbi-client';
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Config from "./components/Config";
import { supabase } from "./createClient";


const App = () => {

  const [hover, setHover] = useState(false);
  const navContainerRef = useRef(null);


  // const [users, setUsers] = useState([]);
  // console.log(users);

  // useEffect(() => {
  //   getUsers();
  // }, [])

  // async function getUsers() {
  //   // const {data} = await supabase.from("users").select("*")
  //   const response = await supabase.from("users").select("*")
  //   const data = response.data;
  //   setUsers(data)
    
  // }


  useEffect(() => {
    const navContainer = navContainerRef.current;

    const handleMouseEnter = () => {
      setHover(true);
    }
    const handleMouseLeave = () => {
      setHover(false);
    }

    navContainer.addEventListener('mouseenter', handleMouseEnter);
    navContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      navContainer.removeEventListener('mouseenter', handleMouseEnter);
      navContainer.removeEventListener('mouseleave', handleMouseLeave);
    }
  }, [])


  return (
    <Router>
        <main>
          <div ref={navContainerRef}>
            <Navbar hover={hover} />
          </div>
          <Routes>
            <Route path="/" element={<Home hover={hover} />}/>
            <Route path="/appDataConfig" element={<Config hover={hover} />}/>
          </Routes>
      </main>
    </Router>
  )
}

export default App;