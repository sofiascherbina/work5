export default function MovieInfo({duration,rating,year,genre, FaClock,FaStar,FaCalendarAlt,FaFilm}){
    return (
        <>
        <ul>
            <li><p><FaClock/> Duration : {duration}</p></li>
            <li><p><FaStar/> Rating : 
                {
                rating >= 8.5
                ? 'Popular'
                 : rating >= 8.0
                ? 'Very good'
                : 'Good'
                 }</p></li>
            <li><p><FaCalendarAlt/> Year : {year}</p></li>
            <li><p><FaFilm/> Genre : {genre}</p></li>
        </ul>
        </>
    )
}