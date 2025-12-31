import React from 'react'
import Navbar from '../components/Navbar';
import Course from '../components/Course';
import Footer from '../components/Footer';


function Courses() {
  return (
    <>
    <div className='min-h-screen flex flex-col'>
      <Navbar/>
    <div className='flex-1'>
      <Course/>
    </div> 
      <Footer/>
    </div>
    </>
  )
}

export default Courses
