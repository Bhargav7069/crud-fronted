import React from 'react'
import {BrowserRouter,Route, Routes} from "react-router-dom"
import UpdateUser from './Components/UpdateUser'
import CreateUser from './Components/CreateUser'
import Users from './Components/Users'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Users/>}/>
        <Route path='/update/:id' element={<UpdateUser/>}/>
        <Route path='/create' element={<CreateUser/>}/>
      </Routes>
      </BrowserRouter>

  
    </div>
  )
}

export default App





