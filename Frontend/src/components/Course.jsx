import React, { useState } from 'react'
import Cards from './Cards'
import {Link} from "react-router-dom"
import { useEffect } from 'react'
import axios from "axios"

function Course() {
    const [book,setBook]=useState([])
    useEffect(()=>{
        const getBook= async()=>{
            try {
                  const res = await axios.get("https://bookstoreapp-l8lu.onrender.com/book");
                  console.log(res.data);
                  setBook(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        getBook();
    },[]);
  return (
  <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
            <h1 className='text-2xl md:text-4xl'>We're delighted to have you{" "}
                <span className='text-pink-500'>Here!  :)</span>
            </h1>
            <p className='mt-12'>
                Our bookstore is a haven for readers, offering a carefully curated collection that spans timeless classics, 
                scholarly works, and inspiring new releases. Each book is chosen to enrich the mind, spark imagination, 
                and provide a journey into worlds both familiar and unknown. Step inside and allow the written word to guide, enlighten, and 
                elevate your reading experience.
            </p>
            <Link to="/">
            <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>
                Back
            </button>
            </Link>
        </div>  
        <div className='mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>  
            {
                book.map((item)=>(
                    <Cards key={item.id} data={item}/>
                ))
            }

        </div>
    </div>
  </>
  )
}

export default Course
