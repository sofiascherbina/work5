import { Component } from "react";
import axios from "axios";
axios.defaults.baseURL = 'https://www.omdbapi.com';
import css from './movie.module.css';

const CloseBtn =()=>{
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
    )
}

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
            <div className={css.modalContainer}>
                <div className={css.modalContent}>
                     <h1>{movieDetails.Title}</h1>
                    <div className={css.modalInfo}>
                        <img src={movieDetails.Poster} alt={movieDetails.Title}  className={css.modalPoster}/>
                    <div>
                        <ul  className={css.modalList}>
                            <li>Rated : {movieDetails.Rated}</li>
                            <li>Genre : {movieDetails.Genre}</li>
                            <li>Released : {movieDetails.Released}</li>
                            <li>Runtime: {movieDetails.Runtime}</li>
                            <li>Director : {movieDetails.Director}</li>
                            <li>Actors : {movieDetails.Actors}</li>
                            <li>Plot : {movieDetails.Plot}</li>
                        </ul>
                    </div>
                </div>
                <button onClick={this.props.onClose} className={css.closeBtn}><CloseBtn/></button>
                </div>
            </div>
        )
    }
}