export default function GifGridItem({ id, title, url }) {

    return (
        <div className='card animate__animated animate__slideInDown '>
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
