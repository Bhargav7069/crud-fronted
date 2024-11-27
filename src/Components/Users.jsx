import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'



const Users = () => {
   
    const [Users, setUSers] = useState([]);
   
    useEffect(() => {
        fetch('http://localhost:8080/users',{
            method: 'GET'
        })
        
        .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setUSers(data))
            .catch(err => console.log(err));
    }, []);


    // const handleDelete=(id)=>{
    //     axios.delete('http://localhost:8080/deleteUSer/'+id)
    //     .then(res=>{console.log(res);
    // window.location.reload()
    //     })
    //     .catch((err=>{console.log(err)}))
    //  } 

    const handleDelete = (id) => {
        fetch(`http://localhost:8080/users/deleteUser/${id}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); 
        })
        .then(data => {
            console.log(data); 
            window.location.reload(); 
        })
        .catch(err => {
            console.log(err); 
        });
    };

    return (

        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className='w-50 bg-white rounded p-3'>
                <Link to='create' className='btn btn-success'>Add +</Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone no</th>
                            <th>age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                           { Users.map((user) => {
                               return  <tr>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phoneno}</td>
                                    <td>{user.age}</td>
                                    <td>
                                        <Link to={`/update/${user._id}`} className='btn btn-success'>Update</Link>
                                        <button onClick={(e)=>{handleDelete(user._id)}} className='btn btn-danger'>Delete</button>
                                    </td>
                                </tr>
                                })
                                }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Users





// const handleSubmit = (e) => {
//     e.preventDefault();

//     // Check if all fields are filled
//     if (!userData.name || !userData.email || !userData.phoneno || !userData.age) {
//         setError('All fields are required');
//         return;
//     }