import css from './images.module.css';
export default function SearchList({images}){
    return(
        <>
        <ul className={css.imagesList}>
            {images.map(({id,webformatURL})=>(
                <li key={id}>
                    <img src={webformatURL} alt={id} width={300}/>
                </li>
            ))}
        </ul>
        </>
    )
}