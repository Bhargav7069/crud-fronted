import  { useEffect, useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import "../Style/Adminlogin.css"

const Adminlogin = () => {
let [name,setName]=useState()
let [password,setPassword] =useState()
  

let navigate=useNavigate()

useEffect(()=>{
fetch("http://localhost:5000/admin")

.then((res)=>{
    return res.json()
})
.catch((err)=>{
console.log(err);
})
},[])


function login(){
    if(name==="bhargav" && password ==="bk123")
    {
      alert("Loggin Sucessfull..!!")
      navigate('')
    }
    else{
      alert("Invalid Credentials")
    }
  }

  return (
    <div className="container" id="container1">
        
            <form>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" value={name} onChange={(e) => {setName(e.target.value);}} 
                    className="form-control" id="username" placeholder="Enter your username"  required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password"  value={password} onChange={(e) => {setPassword(e.target.value);}}
                    className="form-control" id="password" placeholder="Enter your password" />
                </div>
                <button type="submit" onClick={login} className="btn btn-danger">SignIn</button>
                <span>Do not have an account ? <Link to="/signup" style={{color:'blue'}}>Sign Up</Link></span>
            </form>
        </div>
  )
}

export default Adminlogin
