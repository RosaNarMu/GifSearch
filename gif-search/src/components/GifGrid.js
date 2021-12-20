/* import { useState, useEffect } from 'react' */
import getGifs from '../functions/getGIfs';
import useFetchGifs from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

export default function GifGrid({ category }) {


    const { images, loading } = useFetchGifs(category);



    return (
        <>
            <h3>{category}</h3>

            {loading && <p>Cargando...</p>}

            < div className='card-grid'>
                {
                    images.map(element => (
                        <GifGridItem
                            key={element.id}
                            {...element}
                        ></GifGridItem>
                    ))
                }


            </div>
        </>
    )
}

