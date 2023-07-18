import React from 'react'
import Cocktail from './Cocktail'

import { useGlobalContext } from '../context'

export default function CocktailList() {
  const { cocktails} = useGlobalContext()
  
  return (
    <section className='section'>
      <h2 className='section-title'>Portfolio</h2>
      <div className='cocktails-center'>
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}
