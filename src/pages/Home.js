import React from 'react'
import CocktailList from '../components/CocktailList'
import { FaBars } from 'react-icons/fa';
import { useGlobalContexts } from '../components/contexts';
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
