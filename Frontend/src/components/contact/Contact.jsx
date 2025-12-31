import React from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';
import Contacts from '../Contacts';


function Contact() {
  
  return (
    <>
    <div className='min-h-screen flex flex-col'>
      <Navbar/>
    <div>
      <Contacts/>
    </div> 
      <Footer/>
    </div>
    </>
  )
}

export default Contact
