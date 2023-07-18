// import React, { useState, useContext, useEffect } from 'react'
// import { useCallback } from 'react'

// // const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
// const AppContext = React.createContext()

// const AppProvider = ({ children }) => {

//   // const [searchTerm, setSearchTerm] = useState('a')
//   const [cocktails, setCocktails] = useState([
//     {
//       id: 1,
//       name: 'Custom Cocktail 1',
//       image: 'logo192.png',
//       info: 'Custom cocktail description 1',
//       glass: 'Custom glass type 1',
//     },
//     {
//       id: 2,
//       name: 'Custom Cocktail 2',
//       image: 'path_to_image2.jpg',
//       info: 'Custom cocktail description 2',
//       glass: 'Custom glass type 2',
//     },
//   ]);
//       const data = cocktails
//       console.log(data);
//       const { drinks } = data
//           if (drinks) {
//             const newCocktails = drinks.map((item) => {
//               const {
//                 idDrink,
//                 strDrink,
//                 strDrinkThumb,
//                 strAlcoholic,
//                 strGlass,
//               } = item
    
//               return {
//                 id: idDrink,
//                 name: strDrink,
//                 image: strDrinkThumb,
//                 info: strAlcoholic,
//                 glass: strGlass,
//               }
//             })
//             setCocktails(newCocktails)
//           } else {
//             setCocktails([])
//           }
          
       
      


//   // const fetchDrinks = useCallback( async () => {
   
//   //   try {
//   //     const response = await fetch(`${url}${searchTerm}`)
//   //     const data = await response.json()
//   //     console.log(data);
//   //     const { drinks } = data
//   //     if (drinks) {
//   //       const newCocktails = drinks.map((item) => {
//   //         const {
//   //           idDrink,
//   //           strDrink,
//   //           strDrinkThumb,
//   //           strAlcoholic,
//   //           strGlass,
//   //         } = item

//   //         return {
//   //           id: idDrink,
//   //           name: strDrink,
//   //           image: strDrinkThumb,
//   //           info: strAlcoholic,
//   //           glass: strGlass,
//   //         }
//   //       })
//   //       setCocktails(newCocktails)
//   //     } else {
//   //       setCocktails([])
//   //     }
      
//   //   } catch (error) {
//   //     console.log(error)
      
//   //   }
//   // },[searchTerm])
//   // useEffect(() => {
//   //   fetchDrinks()
//   // }, [searchTerm,fetchDrinks])
//   return (
//     <AppContext.Provider
//       value={{  cocktails }}
//     >
//       {children}
//     </AppContext.Provider>
//   )
//   }
// // make sure use
// export const useGlobalContext = () => {
//   return useContext(AppContext)
// }

// export { AppContext, AppProvider }

import React, { useState, useContext } from 'react';

const customItems = [
  {
    id: 1,
    image: '/images/image/restaurant Aida.png',
    name : "Restaurant",
    info :"family Restaurant",
    category: "family Restaurant",
    glass: "family Restaurant",
    instructions :"family Restaurant",
  
    
  },
  {
    id: 2,
    image: '/images/image/GADA.co.png',
    name : "design",
    info :"designt",
    category: "family Restaurant",
    glass: "family Restaurant",
    instructions :"family Restaurant",
   
    
  },
  // Add more items as needed
];

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [cocktails, setCocktails] = useState(customItems);

  // Your other logic here...

  return (
    <AppContext.Provider value={{ cocktails }}>
      {children}                               
                                                 {/* the AppProvider acts as a parent component that provides data to its children components 
                                                   through the AppContext.Provider. The AppContext.Provider is not a child itself, 
                                                  but it wraps the children components to enable them to access the shared data from the context. */}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

