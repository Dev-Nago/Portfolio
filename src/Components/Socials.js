import React from 'react'

function Socials() {
  return (
    <div className='bg-black' id='Socials'>
      <div className='text-5xl flex flex-col justify-center md:flex-row'>
        <a href='https://github.com/Dev-Nago' target='blank_' rel="noreferrer">
          <i className="fa-brands fa-github flex flex-col m-5 my-16 text-white hover:text-orange-400"></i>
        </a>
        <a href='https://linkedin.com/in/jean-claude-plaia-b2a454179' target='blank_' rel="noreferrer">
          <i className="fa-brands fa-linkedin flex flex-col m-5 my-16 text-white hover:text-orange-400"></i>
        </a>
        <a href='mailto:pro.plaiajc@gmail.com' target='blank_' rel="noreferrer">
        <i className="fa-solid fa-envelope flex flex-col m-5 my-16 text-white hover:text-orange-400"></i>
        </a>
      </div>
  </div>
  )
}

export default Socials