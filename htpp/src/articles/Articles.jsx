import React, {Component} from "react";
import axios from "axios";
axios.defaults.baseURL = 'https://api.spaceflightnewsapi.net/v4';

const ArticleList=({articles})=>{
    return(
        <>
        <ul>
            {articles.map(({id, title, url, image_url, summary, published_at, news_site})=>(
                <li key={id}>
                    <h2>{title}</h2>
                    <img src={image_url} alt={title} width={'500px'}/>
                    <a href={url}>{url}</a>
                    <p>{summary}</p>
                    <p>Published at: {published_at}</p>
                    <a href={news_site}>news site</a>
                </li>
            ))}
        </ul>
        </>
    )
}
export default class Articles extends Component{
    state={
        articles:[],
        isLoading:false,
        error:null,
        search:''
    }
    handleChange=(evt)=>{
        const {name,value} = evt.target
        this.setState({
            [name]:value
        })
    }
    async componentDidMount(){
        this.getArticles()
    }
    async componentDidUpdate(prevProps, prevState){
        if(prevState.search !== this.state.search){
            this.getArticles();
        }
    }
    async getArticles(){
            this.setState({isLoading:true})
        try{
            if(this.state.search === ""){
                const response = await axios.get("/articles");
                this.setState({
                    articles: response.data.results
                })
            }
            else{
                const response = await axios.get(`/articles/?search=${this.state.search.toLocaleLowerCase()}`);
                this.setState({
                    articles:response.data.results})
            }
        }
        catch(error){
            this.setState({error})
        }
        finally{
            this.setState({isLoading:false})
        }
        }
    render(){
        const {articles, isLoading, error, search} = this.state
        return(
            <>
                <div>
                    <p>Search for an article:</p>
                    <input type="text" name="search" value={search} onChange={this.handleChange}/>
                </div>
                {error && <p>Halepa!</p>}
                {isLoading ? <p>Loading...</p> : <ArticleList articles={articles}/>}
            </>
        )
    }
}