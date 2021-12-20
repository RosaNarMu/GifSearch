import useFetchGifs from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

export default function GifGrid({ category }) {


    const { images, loading } = useFetchGifs(category);



    return (
        <>
            <h3>You searched for: {category}</h3>

            {loading && <p>Loading...</p>}

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

