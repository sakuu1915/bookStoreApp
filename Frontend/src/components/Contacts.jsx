import React from 'react'
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom'

function Contacts() {
    const navigate= useNavigate();
    const {
          register,
          handleSubmit,
          reset,
          formState: { errors },
        } = useForm()
      
        const onSubmit = (data) => {
            console.log("Form Data:", data);
            alert("Message sent successfully! -)");
            reset();
          };  
  return (
<>
    <div className="flex h-screen items-center justify-center bg-gray-100">
    <div className=" w-[400px] border-[2px] bg-white shadow-lg p-5 rounded-md relative">
              {/* if there is a button in form, it will close the modal */}
              <button type="button" 
                onClick={()=> navigate("/")}
                className='absolute right-3 top-3 text-lg font-bold'>
                  ✕
              </button>
              <h2 className='text-xl font-bold mb-4 text-center'>Contact Us</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
               {/*Name */}
            <div>
                <span>Name</span>
                <input 
                  type="text" 
                  placeholder='Enter your fullname' 
                  className='w-full px-3 py-2 border border-gray-300 rounded-md outline-none'
                  {...register("name", { required: true })}
                   />
                {errors.name && <span className='text-sm text-red-500'>Name is required</span>}
            </div>
             {/**Email */}
            <div>
                <span>Email</span>
                <input 
                  type="email" 
                  placeholder='Enter your email' 
                  className='w-full px-3 py-2 border border-gray-300 rounded-md outline-none' 
                  {...register("email", { required: true })}
                  />
                  <br />
                  {errors.email && <span className='text-sm text-red-500'>Email is required</span>}
            </div>
             {/*Message */}
            <div>
                <span>Message</span>
                <textarea
                rows="4"
                placeholder='Enter your message'
                className='w-full px-3 py-2 border border-gray-300 rounded-md outline-none'
                 {...register("message", { required: true })}
                />
                <br />
                  {errors.message && <span className='text-sm text-red-500'>Message is required</span>}
            </div>
            
             {/*Button */}
             <div className='flex justify-around mt-4'>
              <button type="submit" className='bg-pink-600 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>
                  Send Message
              </button>
              </div>
            </form>
    </div>
    </div>     
</>
  )
}

export default Contacts
