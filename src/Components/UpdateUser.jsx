import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const UpdateUser = () => {

const {id}=useParams()

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phoneno, setPhoneno] = useState()
    const [age, setAge] = useState()

    const navigate = useNavigate()

    // useEffect(()=>{
    //     axios.get('http://localhost:8080/getUser/'+id)
    //     .then(res=>{console.log(res);
    //         setName(res.data.name)
    //         setEmail(res.data.email)
    //         setPhoneno(res.data.phoneno)
    //         setAge(res.data.age)
            
    //     })
    //     .catch((err=>{console.log(err)}))
    //  },[])


    useEffect(() => {
        fetch('http://localhost:8080/users/getUser/'+id)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                setName(data.name);
                setEmail(data.email);
                setPhoneno(data.phoneno);
                setAge(data.age);
            })
            .catch(err => {
                console.log(err);
            });
    }, [id])



    //  const Update=(e)=>{
    //     e.preventDefault();
    //     axios.put("http://localhost:8080/updateUser/"+id,{name,email,phoneno,age})
    //     .then(result=>{
    //      console.log(result)
    // navigate('/')
    //     })
    //     .catch(err=>console.log(err)
    //     )
    // }

    const Update = (e) => {
        e.preventDefault();
        fetch(`http://localhost:8080/users/updateUser/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, phoneno, age })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(result => {
            console.log(result);
            navigate('/');
        })
        .catch(err => console.log(err));
    }


  return (
    <div className='d-flex vh-100 bg-promary justify-content-center align-items-center'>
    <div className='w-50 bg-white rounded p-3'>
        <form action="" onSubmit={Update}>
            <h2>Update User </h2>
                <div className='mb-2'>
                    <label htmlFor="">Name</label>
                    <input type='text ' placeholder='Enter name' className='form-control' value={name}
                    onChange={(e) => { setName(e.target.value) }}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Email</label>
                    <input type='text ' placeholder='Enter Email' className='form-control' value={email}
                      onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div className='mb-2'>
                    <label htmlFor="">phone no</label>
                    <input type='text ' placeholder='Enter Email' className='form-control' value={phoneno}
                     onChange={(e) => { setPhoneno(e.target.value) }}/>
                </div>
    
                <div className='mb-2'>
                    <label htmlFor="">Age</label>
                    <input type='text ' placeholder='Enter Age ' className='form-control' value={age}
                     onChange={(e) => { setAge(e.target.value) }}/>
                </div>
    <button className='btn btn-success'>Update</button>
           
        </form>
    
    </div>
    
       </div>
  )
}

export default UpdateUser