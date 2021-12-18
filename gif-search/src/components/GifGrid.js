

export default function GifGrid({ category }) {

    /*  async function getGifs() {
         const url = 'https://api.giphy.com/v1/gifs/search?api_key=ZQNk3ycp7GilkEZDVfr3v5Q66fBENEOd&q=Gatito&limit=10'
         const response = await fetch(url);
         const { data } = await response.json();
 
         const gifs = data.map(img => {
             return {
                 id: img.id,
                 title: img.title,
                 url: img.images.downsized_medium.url
             }
         })
         console.log(gifs);
     }
 
     getGifs(); */

    return (
        <>
            <h3>{category}</h3>
        </>
    )
}
