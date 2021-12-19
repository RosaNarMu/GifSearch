/* import { useState, useEffect } from 'react' */
import getGifs from '../functions/getGIfs';
import useFetchGifs from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

export default function GifGrid({ category }) {

    /* const [images, setImages] = useState([])
    

    useEffect(() => {
        getGifs(category)
            .then(setImages);

    }, [category]);
 */

    const { loading } = useFetchGifs();





    return (
        <>
            <h3>{category}</h3>

            {loading ? 'Cargando...' : 'Data cargada'}

            {/* < div className='card-grid'>
                {
                    images.map(element => (
                        <GifGridItem
                            key={element.id}
                            {...element}
                        ></GifGridItem>
                    ))
                }


            </div> */}
        </>
    )
}

