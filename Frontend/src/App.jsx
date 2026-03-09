import React from 'react'
import Home from './home/Home'
import { Navigate, Route, Routes } from "react-router-dom"
import Courses from './courses/Courses'
import Signup from './components/Signup'
import Contact from './components/contact/Contact'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'
import Login from './components/Login'
import UserProfile from './components/UserProfile'

function App() {
  const [authUser,setAuthUser]=useAuth();
  console.log(authUser);
  return (
    <>
      {/*<Home />
      <Course />*/}
      <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<UserProfile />} />
        <Route path='/course' element={authUser?<Courses />:<Navigate to="/signup" />} />
        <Route path='/signup' element={<Signup />} /> 
        <Route path='/contact' element={<Contact />} /> 
        <Route path='/login' element={<Login />} />
      </Routes>
       <Toaster />
      </div>
    </>
  )
}

export default App

