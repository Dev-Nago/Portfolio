import React from 'react'

function NavBar() {
  return (
    <div className='h-24 bg-black text-white flex flex-row'>
      <h1 className='font-bold text-2xl m-auto'>Plaia Jean-Claude</h1>
      <ul className='space-x-5 m-auto border-2 border-orange-400 p-2 rounded-lg flex flex-row'>
        <li className='list-none'>
          <a href='/' className='hover:text-orange-400'>Infos</a>
        </li>
        <li className='list-none'>
          <a href='/' className='hover:text-orange-400'>Projets</a>
        </li>
        <li className='list-none'>
          <a href='/' className='hover:text-orange-400'>Technologies</a>
        </li>
        <li className='list-none'>
          <a href='/' className='hover:text-orange-400'>Réseaux</a>
        </li>
        <li className='list-none'>
          <a href='/' className='hover:text-orange-400'>Contact</a>
        </li>
      </ul>
      <i className="fa-solid fa-bars m-auto hidden"></i>
    </div>
  )
}

export default NavBar