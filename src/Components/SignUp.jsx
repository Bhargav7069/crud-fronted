import  { useState } from 'react'
import axios from 'axios';
import '../Style/Signup.css'
import { useNavigate } from 'react-router-dom';

const SignUP = () => {
    let[name,setName] = useState("")
    let[password,setPassword] = useState("")
    let[email,setEmail] =useState ("")
    let[phone,setPhone] = useState("")

  
    let navigate=useNavigate()

    let formHandle = (e) => {
      e.preventDefault();
      let data =  {name,password,phone,email}
      axios.post('http://localhost:5000/admin',data)
      .then((res)=>{
          console.log(res);
navigate("/")

      })
      .catch((err)=>{
          console.log(err);
          alert("Invalid Data ")            
      })
  }
  return (
    <div className='adminsignup'>
        <div className="bg_img"></div>

      <form action="" className='form'>

        <label htmlFor="">Name</label>
        <input type="text" value={name} 
        onChange={(e) => {setName(e.target.value);}} 
        placeholder='Enter the name'/>


        <label htmlFor="">Password</label>
        <input type="password" value={password}
        onChange={(e) => {setPassword(e.target.value);}} 
        placeholder='Enter the password'/>

        <label htmlFor="">Email</label>
        <input type="email" value={email} 
        onChange={(e) => {setEmail(e.target.value);}} 
        placeholder='Enter the email'/>


        <label htmlFor="">Phone No</label>
        <input type="tel" pattern="[0-9]{10}" value={phone} 
        onChange={(e) => {setPhone(e.target.value);}}
         placeholder='Enter the Phone No.'/>

        <button type='submit' onClick={(formHandle)}>Submit</button>
        
         {/* <a className="btn btn-primary" href="#" role="button">Link</a> */}
      </form>
    </div>
  )
}

export default  SignUP

