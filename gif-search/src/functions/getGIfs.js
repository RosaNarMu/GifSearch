export default async function getGifs(category) {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=ZQNk3ycp7GilkEZDVfr3v5Q66fBENEOd&q=${encodeURI(category)}&limit=20&rating=g`
    const response = await fetch(url);
    const { data } = await response.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })

    return gifs;
}