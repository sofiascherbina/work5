import Movie from "./Movie";
export default function MovieList({movies}){
    return(
        <ul className="cardList">{movies.map(movie => (<Movie movie={movie}/>))}</ul>
    )
}