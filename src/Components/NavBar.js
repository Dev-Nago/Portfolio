import React, { useState } from 'react'

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className='h-24 bg-black text-white flex flex-row'>
      <a href='/' className='font-bold text-2xl m-auto z-40'>Plaia Jean-Claude</a>
      <i className={isOpen ? 'fa-solid fa-x text-2xl m-auto hover:cursor-pointer' : 'fa-solid fa-bars m-auto text-2xl hover:cursor-pointer'} onClick={toggle}></i>
        <ul className={isOpen ? 'z-40 h-screen w-screen bg-black fixed left-0 flex flex-col ease-in-out duration-500 sm:w-96' : 'h-screen w-screen bg-black fixed flex flex-col -left-full ease-in-out duration-500 sm:w-96'} onClick={toggle}>
          <div className='m-auto h-1/2 w-1/2 flex flex-col space-y-12'>
          <i className='fa-solid fa-x text-2xl hover:cursor-pointer' onClick={toggle}></i>
          <li className='list-none'>
            <a href='#Infos' className='hover:text-orange-400 border-2 border-orange-400 m-3 p-2 rounded-lg' onClick={toggle}>Infos</a>
          </li>
          <li className='list-none'>
            <a href='#Projects' className='hover:text-orange-400 border-2 border-orange-400 m-3 p-2 rounded-lg' onClick={toggle}>Projets</a>
          </li>
          <li className='list-none'>
            <a href='#Technos' className='hover:text-orange-400 border-2 border-orange-400 m-3 p-2 rounded-lg' onClick={toggle}>Technologies</a>
          </li>
          <li className='list-none'>
            <a href='#Socials' className='hover:text-orange-400 border-2 border-orange-400 m-3 p-2 rounded-lg' onClick={toggle}>Réseaux</a>
          </li>
          <li className='list-none'>
            <a href='#Contact' className='hover:text-orange-400 border-2 border-orange-400 m-3 p-2 rounded-lg'onClick={toggle}>Contact</a>
          </li>
          </div>
        </ul> 
    </div>
  )
}

export default NavBar