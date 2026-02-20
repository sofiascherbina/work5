import MovieInfo from "./MovieInfo";
import { FaClock, FaStar, FaCalendarAlt, FaFilm } from "react-icons/fa";
export default function Movie({movie}){
    return (
        <li className="card">
            <h3>{movie.title}</h3>
            <img src={movie.poster} alt={movie.title} width="200px" className="card-img"/>
            <MovieInfo duration={movie.duration} 
            rating={movie.rating} 
            year={movie.year}
            genre={movie.genre}
            FaClock={FaClock}
            FaStar={FaStar}
            FaCalendarAlt={FaCalendarAlt}
            FaFilm={FaFilm}/>
        </li>
    )
}