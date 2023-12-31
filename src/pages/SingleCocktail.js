import React from 'react'

import { useParams, Link } from 'react-router-dom'
import { useGlobalContext } from '../context'

export default function SingleCocktail() {
  const { id } = useParams()
  const { cocktails } = useGlobalContext();

  if (!cocktails) {
    return <h2 className='section-title'>Loading...</h2>;
  }
  const cocktail = cocktails.find((item) => item.id === parseInt(id));
 
  // const [cocktail, setCocktail] = React.useState(null)

  // React.useEffect(() => {
   
  //   async function getCocktail() {
  //     try {
  //       const response = await fetch(
  //         `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  //       )
  //       const data = await response.json()
  //       if (data.drinks) {
  //         const {
  //           strDrink: name,
  //           strDrinkThumb: image,
  //           strAlcoholic: info,
  //           strCategory: category,
  //           strGlass: glass,
  //           strInstructions: instructions,
  //           strIngredient1,
  //           strIngredient2,
  //           strIngredient3,
  //           strIngredient4,
  //           strIngredient5,
  //         } = data.drinks[0]
  //         const ingredients = [
  //           strIngredient1,
  //           strIngredient2,
  //           strIngredient3,
  //           strIngredient4,
  //           strIngredient5,
  //         ]
  //         const newCocktail = {
  //           name,
  //           image,
  //           info,
  //           category,
  //           glass,
  //           instructions,
  //           ingredients,
  //         }
  //         setCocktail(newCocktail)
  //       } else {
  //         setCocktail(null)
  //       }
  //     } catch (error) {
  //       console.log(error)
  //     }
      
  //   }
  //   getCocktail()
  // }, [id])
 
  if (!cocktail) {
    return <h2 className='section-title'>no cocktail to display</h2>
  } else {
    const {
      name,
      image,
      category,
      info,
      glass,
      instructions,
   
    } = cocktail
    return (
      <section className='section cocktail-section'>
        <Link to='/' className='btn btn-primary'>
          back home
        </Link>
        <h2 className='section-title'>{name}</h2>
        <div className='drink'>
          <img src={image} alt={name}></img>
          <div className='drink-info'>
            <p>
              <span className='drink-data'>name :</span> {name}
            </p>
            <p>
              <span className='drink-data'>category :</span> {category}
            </p>
            <p>
              <span className='drink-data'>info :</span> {info}
            </p>
            <p>
              <span className='drink-data'>glass :</span> {glass}
            </p>
            <p>
              <span className='drink-data'>instructons :</span> {instructions}
            </p>
          </div>
        </div>
      </section>
    )
  }
}


