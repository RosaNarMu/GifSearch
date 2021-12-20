export default function GifGridItem({ title, url }) {

    return (
        <div className='card animate__animated animate__slideInDown '>
            <img src={url} alt={title} />
        </div>
    )
}
