import { useState } from 'react'
import { Routes ,Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from  './pages/Home'
import Login from './pages/Login'
import Singup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import PrivateRoute from './components/PrivateRoute'

function App() {

  const [IsLoggedIn ,setIsLoggedIn] =useState(false)
  return (
    <div className="w-screen h-screen  bg-black flex flex-col text-white ">
      <Navbar IsLoggedIn={IsLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
       
       <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>}></Route>
          <Route path='/signup' element={<Singup setIsLoggedIn={setIsLoggedIn}/>}></Route>
          <Route path='/dashboard' element={
            < PrivateRoute IsLoggedIn={IsLoggedIn}>
            <Dashboard/>
            </PrivateRoute>         
          }></Route>
          
       </Routes>
    </div>
  )
}

export default App
