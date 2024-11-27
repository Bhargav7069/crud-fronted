import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'


function CreateUser() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phoneno, setPhoneno] = useState()
    const [age, setAge] = useState()
    const [error, setError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');

const navigate = useNavigate()


const Submit=(e)=>{
    e.preventDefault();

    if (!email.endsWith('@gmail.com')) {
            setEmailError('Please enter valid Gmail address');
            return;
        } else {
            setEmailError(''); 
        }
        
        if (phoneno.length !== 10 || isNaN(phoneno)) {
            setPhoneError('Phone number must be 10 digits');
            return;
        }

    if (!name || !email || !phoneno || !age) {
        setError('All fields are required');
        return; 
    }
//     axios.post("http://localhost:8080/createUser",{name,email,phoneno,age})
//     .then(result=>{
//      console.log(result)
// navigate('/')
//     })
//     .catch(err=>console.log(err)
//     )
// }

fetch("http://localhost:8080/users/createUSer", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, phoneno, age }),
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok ' +response.statusText);
    }
    return response.json();
})
.then(result => {
    console.log(result);
    navigate('/');
})
.catch(err => console.log(err));}

  

    return (
        <div className='d-flex vh-100 bg-promary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>

                <form action="" onSubmit={Submit}>
                    <h2>Add User </h2>

                    {error && <div className="alert alert-danger">{error}</div>}
                    {emailError && <div className="alert alert-danger">{emailError}</div>}
                    {phoneError && <div className="alert alert-danger">{phoneError}</div>}


                    <div className='mb-2'>
                        <label htmlFor="">Name</label>
                        <input type='text '
                            placeholder='Enter name' className='form-control'
                            onChange={(e) => { setName(e.target.value) }} />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="">Email</label>
                        <input type='email ' placeholder='Enter Email' className='form-control'
                            onChange={(e) => { setEmail(e.target.value) }} />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="">phone no</label>
                        <input type='number ' placeholder='Enter phoneno' className='form-control'
                            onChange={(e) => { setPhoneno(e.target.value) }} />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="">Age</label>
                        <input type='text ' placeholder='Enter Age ' className='form-control'
                            onChange={(e) => { setAge(e.target.value) }} />
                    </div>


                    <button className='btn btn-success'>Submit</button>

                </form>

            </div>

        </div>
    )
}
// B1YFKuLYwDxX9lQF
export default CreateUser