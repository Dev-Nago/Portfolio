import React, { useState } from 'react'

function NavBar() {
  
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
    setIsOpen(!isOpen);
  }

  const NavbarItemStyle = 'hover:text-orange-400 border-2 border-orange-400 m-3 p-2 rounded-lg';

  return (
    <div className='h-24 bg-black text-white flex flex-row'>
      <h1 className='font-bold text-2xl m-auto z-40'>Plaia Jean-Claude</h1>
      <i className={isOpen ? 'fa-solid fa-x text-2xl m-auto hover:cursor-pointer' : 'fa-solid fa-bars m-auto text-2xl hover:cursor-pointer'} onClick={toggle}></i>
        <div className={isOpen ? 'z-40 h-full w-full bg-black fixed left-0 flex flex-col ease-in-out duration-500 sm:w-96' : 'h-screen w-screen bg-black fixed flex flex-col -left-full ease-in-out duration-500 sm:w-96'} onClick={toggle}>
          <div className='m-5 flex flex-col space-y-8'>
            <i className='fa-solid fa-x text-2xl hover:cursor-pointer' onClick={toggle}></i>
            <a href='#Infos' className={NavbarItemStyle} onClick={toggle}>Infos</a>
            <a href='#Projects' className={NavbarItemStyle} onClick={toggle}>Projets</a>
            <a href='#Technos' className={NavbarItemStyle} onClick={toggle}>Technologies</a>
            <a href='#Socials' className={NavbarItemStyle} onClick={toggle}>Réseaux</a>
            <a href='#Contact' className={NavbarItemStyle} onClick={toggle}>Contact</a>
          </div>
        </div> 
    </div>
  )
}

export default NavBar