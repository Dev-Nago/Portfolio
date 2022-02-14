import React from 'react'

function Footer() {
  return (
    <div className='bg-black'>
      <div className='text-2xl flex flex-row justify-center'>
        <a href='https://github.com/Dev-Nago' target='blank_' rel="noreferrer">
          <i className="fa-brands fa-github flex m-5 my-16  rounded-lg text-white hover:bg-white hover:text-black"></i>
        </a>
        <a href='https://linkedin.com/in/jean-claude-plaia-b2a454179' target='blank_' rel="noreferrer">
          <i className="fa-brands fa-linkedin flex m-5 my-16 text-white hover:bg-white hover:text-black"></i>
        </a>
      </div>
      <p className='text-xl text-white'>©2022 Plaia Jean-Claude tous droits réservés.</p>
    </div>
  )
}

export default Footer