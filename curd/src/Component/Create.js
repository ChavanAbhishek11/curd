import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate ,Link} from 'react-router-dom'

function Create() {
    const [name,setName]=useState("")
    const [age,setAge]=useState()
    const [email,setEmail]=useState()
    const [gender,setGender]=useState()
    const navigate=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault(); 
        axios.post("https://6476df159233e82dd53a6dcb.mockapi.io/crud",{
            e_name:name,
            e_age:age,
            e_email:email,
            e_gender:gender
        }).then(()=>{
            navigate("/");
        })

    }
  return (
    <>
<div className='row'>
   
    <div className='mt-2 mb-2'>
      <Link to="/">
      <button className='btn-primary'>Read Data</button>
      </Link>
      </div>
      <div className='col-md-4'>
    <div className=' bg-primary p-4 text-center'>
        <h1>Create Data</h1>
    </div>
    <br/>
    <form onSubmit={handleSubmit}>
        <div className='form-group'>
            <label>Enter Name:</label>
            <input type="text" placeholder='Name'   onChange={(e)=>setName(e.target.value)} className='form-group'/>
        </div>
        <br/>
        <div className='form-group'>
            <label>Enter Age:</label>
            <input type="number" placeholder='Age'  onChange={(e)=>setAge(e.target.value)} className='form-group'/>
        </div>
        <br/>
        <div className='form-group'>
            <label>Enter Email:</label>
            <input type="text" placeholder='Email' onChange={(e)=>setEmail(e.target.value)}  className='form-group'/>
        </div>
        <div className='form-group'>
            <label>Enter Gender:</label>
            <input type="text" placeholder='Gender'  onChange={(e)=>setGender(e.target.value)} className='form-group'/>
        </div>
        <br/>
        <div className='d-grid'>
        <input type="submit" value="submit" className='btn btn-primary'/>
        </div>
    </form>
    {name} <br/>{age}<br/>{email}<br/>{gender}

    </div>
</div>
    </>
    
  )
}

export default Create