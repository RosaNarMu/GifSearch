import { useState } from "react"
import AddCategory from "./components/AddCategory";


export default function GifExpertApp() {


  const [categories, setCategories] = useState(['Gatitos', 'Perritos', 'Foquitas']);

  /*  function handleAdd() {
     setCategories(categories => ([...categories, 'patata']));
   } */

  return (
    <>
      <h2>GifExpert</h2>
      <AddCategory></AddCategory>
      <hr />


      {
        <ul>
          {
            categories.map(element => (
              <li key={element}>{element}</li>
            )
            )
          }
        </ul>
      }
    </>
  )
}
