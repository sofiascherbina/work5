import { Component } from "react";
import axios from "axios";
axios.defaults.baseURL = 'https://www.omdbapi.com';
import css from './movie.module.css';
export default class ModalMovie extends Component{
    state={
        movieDetails:null,
        isLoading:false
    }
    async componentDidMount(){
        this.setState({isLoading:true})
        const response = await axios.get(`/?apikey=a2946bc&i=${this.props.movieInfo.imdbID}`);
        this.setState({
            movieDetails:response.data,
            isLoading:false
        })
    }
    render(){
        const {isLoading, movieDetails} = this.state;
        if(isLoading || !movieDetails){
            return <p>Loading...</p>
        }
        return(
            <div className={css.modalContainet}>
                <h1>{movieDetails.Title}</h1>
                <img src={movieDetails.Poster} alt={movieDetails.Title} />
                <div>
                    <ul>
                        <li>Rated : {movieDetails.Rated}</li>
                        <li>Genre : {movieDetails.Genre}</li>
                        <li>Released : {movieDetails.Released}</li>
                        <li>Runtime: {movieDetails.Runtime}</li>
                        <li>Director : {movieDetails.Director}</li>
                        <li>Actors : {movieDetails.Actors}</li>
                        <li>Plot : {movieDetails.Plot}</li>
                    </ul>
                </div>
                <button onClick={this.props.onClose}>Close</button>
            </div>
        )
    }
}