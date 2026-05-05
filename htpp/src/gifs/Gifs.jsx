import React, {Component} from "react";
import axios from "axios";
import css from "./gifs.module.css";
axios.defaults.baseURL = 'https://api.giphy.com/v1';

const GifList=({gifs})=>{
    return(
        <>
        <ul className={css.gifsList}>
            {gifs.map(({title, id, images})=>(
                <li key={id}>
                    <img src={images.fixed_height.url} alt={title} />
                </li>
            ))}
        </ul>
        </>
    )
}

export default class GifSearch extends Component{
    state={
        gifs:[],
        search:"",
        isLoading:false,
        error:null,
        limit:10,
        offset:0
    }
    handleChange=(evt)=>{
        const {name, value} = evt.target;
        this.setState({
            [name]:value,
            offset:0
        })
    }
    async componentDidMount(){
        this.getGifs()
    }
    async componentDidUpdate(prevProps, prevState){
        if(prevState.search !== this.state.search || prevState.offset !== this.state.offset){
            this.getGifs()
        }
    }
    async getGifs(){
        this.setState({isLoading:true});
        const {limit, offset, search} = this.state
        try{
            const link = search === ""
            ? `/gifs/trending?api_key=KaIW58wCxI5VT1r3OToQUbv3MjUgMlII&limit=${limit}&offset=${offset}`
            : `/gifs/search?api_key=KaIW58wCxI5VT1r3OToQUbv3MjUgMlII&q=${search}&limit=${limit}&offset=${offset}`

            const response = await axios.get(link)
            this.setState(prev=>({
                isLoading:false,
                gifs: offset===0
                ? response.data.data
                : [...prev.gifs, ...response.data.data]
            }))

            // if(search === ""){
            //      const response = await axios.get(`/gifs/trending?api_key=KaIW58wCxI5VT1r3OToQUbv3MjUgMlII&limit=${limit}&offset=${offset}`);
            // this.setState({
            //     gifs:response.data.data,
            //     isLoading:false
            // })
            // }
            // else{
            //     const response = await axios.get(`/gifs/search?api_key=KaIW58wCxI5VT1r3OToQUbv3MjUgMlII&q=${search}&limit=${limit}&offset=${offset}`);
            //     this.setState({
            //         gifs:response.data.data,
            //         isLoading:false
            //     })
            // }
        }
        catch(error){
            this.setState({
                error:error
            })
        }
    }
    handleLoadMore=()=>{
        this.setState(prev=>({
            offset: prev.offset + prev.limit
        }))
    }
    render(){
        const {gifs, search, isLoading,error} = this.state
        return(
            <>
            <div className={css.container}>
                <h1>Gifs Shop</h1>
                <input type="text" name="search" value={search} onChange={this.handleChange} placeholder="Search gif..." className={css.search}/>
                {error && <p>Halepa!</p>}
                <GifList gifs={gifs}/>
                {isLoading && <p>Loading...</p>}
                <button type="button" onClick={this.handleLoadMore} className={css.loadMore}>Load more</button>
            </div>
            </>
        )
    }
}