import { useState } from "react"
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";
import InfoLinks from "./components/InfoLinks";



export default function GifApp() {


  const [categories, setCategories] = useState(['']);


  console.log(categories);


  return (
    <>
      <header>

        <h2 className='gifTitle animate__animated animate__pulse'>¿Te apetece un gif?</h2>
        {<span className='small-title'>¡Aquí encontrarás todos los que quieras!</span>}
        <AddCategory setCategories={setCategories}></AddCategory>
      </header>


      <InfoLinks></InfoLinks>

      <ul>
        {
          categories.map(element => (
            <GifGrid
              key={element}
              category={element}></GifGrid>
          ))
        }
      </ul>

    </>
  )
}
