import React, {useState, useEffect} from 'react'
import { formData } from '../constants/formData'
import { supabase } from '../createClient';

const Form = () => {

    const [users, setUsers] = useState([]);
    console.log(users)

    useEffect(() => {
        getUsers();
    }, [])

    async function getUsers() {
        // const {data} = await supabase.from("users").select("*")
        const response = await supabase.from("users").select("*")
        const data = response.data;
        setUsers(data); 
  }
    
    async function updateUser() {
        const firstRow = users[0];
        await supabase.from('users').update({name: firstRow.name, age: firstRow.age}).eq('id', firstRow.id);
    }

    const handleSubmit = async (event) => {
        event.preventDefault(); 
        await updateUser();
        console.log('successful');
        alert("Updated Successfully!")
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUsers(prevUsers => {
            const updatedUser = { ...prevUsers[0], [name]: value };
            return [updatedUser];
        }); 
    }

  return (
    <div className={`bg-white w-[75%] min-h-full flex flex-col justify-start items-center p-3 rounded-xl shadow-2xl shadow-gray-300`}>
        <div className='flex justify-center items-center mt-3'><p className='text-2xl font-poppins font-medium max-lg:text-xl max-md:text-lg text-green-700 tracking-tight'>Update App Data</p></div>
            <div className='flex flex-col items-center justify-start w-full h-full'>
                <form onSubmit={handleSubmit} className='w-full h-full p-10 flex flex-col items-center justify-start'>
                    {formData.map((input, index) => (
                        <div key={input.id} className='w-full py-2 px-12 max-lg:px-8 max-md:px-5 max-sm:px-1'>
                            <label className='text-searchGreen text-xl max-lg:text-lg max-md:text-md max-sm:text-sm font-medium font-poppins'>{input.label} </label> <br />
                            <input onChange={handleChange} name={input.name} value={users[0] ? users[0][input.name] : ''}  type={input.type} className='bg-bodyBlue border-[0.5px] border-gray-500 outline-none w-full mt-2 min-h-12 rounded-sm text-searchGreen font-poppins text-[0.95rem] p-[0.625rem] max-lg:text-md max-md:text-sm max-sm:text-sm'/>
                        </div>
                    ))}
                    <div className='mt-10 max-md:mr-4'>
                        <button className='border-[1px] border-searchGreen min-w-full min-h-full w-[130%] rounded-full flex justify-center items-center p-1 hover:bg-searchGreen text-lg max-lg:text-lg max-md:text-sm font-medium font-poppins text-searchGreen hover:text-white transition-all duration-200'>Update</button>
                    </div>
                </form>
            </div>
    </div>

  )
}

export default Form


//For example [{ name: 'Alice', age: 25 }], users[0]['age'] would be 25.

