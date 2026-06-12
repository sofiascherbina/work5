import css from './images.module.css';
export default function SearchList({images, openModal}){
    return(
        <>
        <ul className={css.imagesList}>
            {images.map(({id,webformatURL,largeImageURL})=>(
                <li key={id} onClick={()=>openModal(largeImageURL)}>
                    <img src={webformatURL} alt={id} width={300}/>
                </li>
            ))}
        </ul>
        </>
    )
}