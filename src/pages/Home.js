import React from 'react'
import { FaBars } from 'react-icons/fa';

export default function Home() {
  const { openSidebar } = useGlobalContexts();
  return (
    <main>
      <button onClick={openSidebar} className='sidebar-toggle'>
        <FaBars />
      </button>
      <CocktailList />
    </main>
  )
}