export default function MovieList({films}){
    return(
        <>
        <ul>
            {films.map(({Poster, Title, Year, imdbID})=>(
                <li key={imdbID}>
                    <img src={Poster} alt={Title} />
                    <h2>{Title}</h2>
                    <p>{Year}</p>
                </li>
            ))}
        </ul>
        </>
    )
}