import React from 'react'

function ContactForm() {
  return (
    <div className='flex flex-row m-48 justify-center'>
      <div className='bg-white rounded-lg shadow-2xl'>
        <h1 className='justify-center text-4xl text-black text my-5 font-bold'>Contact</h1>
        <form method='POST' className='flex flex-col m-10 w-60 sm:w-96'>
          <label name="email" className='text-black flex flex-col'>
            Email
            <input type='email' name='email' required className='m-5 border-2 border-black rounded-lg focus:ring-2 ring-orange-400 ring-offset-4'/>
          </label>
          <label name='message' className='text-black flex flex-col'>
            Message
            <textarea type="text" name='message' required className='h-48 m-5 border-2 border-black rounded-lg focus:ring-2 ring-orange-400 ring-offset-4'/>
          </label>
          <input type='submit' value='Envoyer' className='border-2 border-black rounded-2xl hover:bg-orange-400 hover:border-black hover:text-white hover:cursor-pointer'/>
        </form>
      </div>
      
    </div>
  )
}

export default ContactForm