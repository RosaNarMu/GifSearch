import { useState } from "react"
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";


export default function GifExpertApp() {


  const [categories, setCategories] = useState(['Gatitos']);


  return (
    <>
      <header>

        <h2 className='gifTitle'>¿Te apetece un gif?</h2>
        <span>¡Aquí encontrarás todos los que quieras!</span>
        <AddCategory setCategories={setCategories}></AddCategory>
      </header>




      {
        <ul>
          {
            categories.map(element => (
              <GifGrid
                key={element}
                category={element}></GifGrid>
            ))
          }
        </ul>
      }
    </>
  )
}
