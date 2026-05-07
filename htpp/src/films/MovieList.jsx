import css from './movie.module.css';
export default function MovieList({films, openModal}){
    return(
        <>
        <ul className={css.movieList}>
            {films.map(({Poster, Title, Year, imdbID})=>(
                <li key={imdbID} onClick={() => openModal({ Poster, Title, Year, imdbID })}>
                    <img src={Poster} alt={Title} width={300}/>
                    <h2>{Title}</h2>
                    <p>{Year}</p>
                </li>
            ))}
        </ul>
        </>
    )
}