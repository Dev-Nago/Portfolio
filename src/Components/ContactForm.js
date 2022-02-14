import React from 'react'

function ContactForm() {
  return (
    <div className='flex flex-row m-48 justify-center'>
      <div className='bg-white bg-opacity-90 rounded-lg shadow-2xl'>
        <h1 className='justify-center text-4xl text-black text my-5 font-bold'>Contact</h1>
        <form method='POST' className='flex flex-col m-10 w-60 sm:w-96'>
          <label name="email" className='text-black flex flex-col'>
            Email
            <input type='email' name='email' className='m-5 border-2 border-black rounded-lg focus:ring-2 ring-blue-400 ring-offset-4'/>
          </label>
          <label name='message' className='text-black flex flex-col'>
            Message
            <textarea type="text" name='message' className='h-48 m-5 border-2 border-black rounded-lg focus:ring-2 ring-blue-400 ring-offset-4'/>
          </label>
          <input type='submit' value='Envoyer' className='border-2 border-black rounded-2xl hover:bg-blue-400 hover:border-white hover:text-white hover:cursor-pointer'/>
        </form>
      </div>
      
    </div>
  )
}

export default ContactForm