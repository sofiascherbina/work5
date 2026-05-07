import { Component } from "react";
import axios from "axios";
import MovieList from "./MovieList";
import ModalMovie from "./Modal";
axios.defaults.baseURL = 'https://www.omdbapi.com';
import css from './movie.module.css';

export default class  MovieSearch extends Component{
    state={
        films:[],
        isLoading:false,
        error:null,
        search:'batman',
        page:1,
        selectedMovie:null
    }
    handleChange=(evt)=>{
        const{value, name} = evt.target
        this.setState({
            [name]:value,
            page:1
        })
    }
    componentDidMount(){
        this.getFilms();
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.page !== this.state.page){
            this.getFilms()
        }
    }
    async getFilms(){
        this.setState({isLoading:true})
        const {search, page} = this.state
       try{
        const response = await axios.get(`/?apikey=a2946bc&s=${search}&page=${page}`);
        
        console.log(response.data);
        const newFilms = response.data.Search || [];
        this.setState(({
            isLoading:false,
            films: newFilms
        }))
       }
       catch(error){
        this.setState({error:response.data.Error})
       }  
    }
    pageChange=(evt)=>{
        if(this.state.page < 1){
            this.setState({page:1})
        }
        if(evt.target.id === 'nextPage'){
            this.setState(prev=>({
                page : prev.page + 1
            }))
        }
        else{
            this.setState(prev=>({
                page : prev.page - 1
            }))
        }
    }
    openModal=(movie)=>{
        this.setState({
            selectedMovie:movie
        })
    }
    closeModal=()=>{
        this.setState({
            selectedMovie:null
        })
    }
    render(){
        const {films, isLoading, error, search, selectedMovie} = this.state
        return(
        <div className={css.container}>
            <div className={css.movieSearch}>
                <input type="text" placeholder="Search" value={search} name="search" onChange={this.handleChange}/>
                <button onClick={() => this.getFilms()}><svg width="100" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35 35L27.75 27.75M31.6667 18.3333C31.6667 25.6971 25.6971 31.6667 18.3333 31.6667C10.9695 31.6667 5 25.6971 5 18.3333C5 10.9695 10.9695 5 18.3333 5C25.6971 5 31.6667 10.9695 31.6667 18.3333Z" stroke="#FBF7F5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </button>
            </div>
            {error && <p>Nothing found</p>}
            {isLoading ? <p>Loading...</p> : <MovieList films={films} openModal={this.openModal}/>}
            <div onClick={this.pageChange} className={css.navBtn}>
                <button type="button" id='prevPage'>Previous</button>
                <button type="button" id='nextPage'>Next</button>
            </div>
            {selectedMovie && <ModalMovie movieInfo={selectedMovie} onClose={this.closeModal}/>}
        </div>
        )
    }
}