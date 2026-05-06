import { Component } from "react";
import axios from "axios";
import MovieList from "./MovieList";
axios.defaults.baseURL = 'https://www.omdbapi.com';

export default class  MovieSearch extends Component{
    state={
        films:[],
        isLoading:false,
        error:null,
        search:'batman',
        page:1
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
        // const link = search === ""
        // ? `/?apikey=a2946bc&s=batman&page=${page}`
        // : `/?apikey=a2946bc&s=${search}&page=${page}`
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
    render(){
        const {films, isLoading, error, search} = this.state
        return(
        <>
            <div>
                <input type="text" placeholder="Search" value={search} name="search" onChange={this.handleChange}/>
                <button onClick={() => this.getFilms()}>Search</button>
            </div>
            {error && <p>Nothing found</p>}
            <MovieList films={films}/>
            {isLoading && <p>Loading...</p>}
            <div onClick={this.pageChange}>
                <button type="button" id='prevPage'>Previous</button>
                <button type="button" id='nextPage'>Next</button>
            </div>
        </>
        )
    }
}