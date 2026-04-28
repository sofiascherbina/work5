import React, {Component} from "react";
import axios from "axios";
// axios.defaults.baseURL = 'https://hn.algolia.com/api/v1';
const api = axios.create({
    baseURL: 'https://hn.algolia.com/api/v1'
});
const ArticleList = ({articles}) =>{
    return (
        <>
         <ul>
        {
            articles.map( ({objectID, url, title}) => ( <li key={objectID}>
                <a href={url} target="_blank">{title}</a>
            </li>))
        }
        </ul>
        </>
    )
}

export default class Article extends Component{
    state={
        articles:[],
        isLoading:false,
        error:null
    }
    async componentDidMount(){
        this.setState({
            isLoading:true
        });
        try{
            const response = await api.get('/search?query=react');
            this.setState({
                articles:response.data.hits,
                isLoading:false
            }) 
        }
        catch(error){
            this.setState({error})
        }
        finally{
            this.setState({isLoading:false})
        }
    }
    render(){
        const {articles, isLoading,error} = this.state;
        return(
            <>
            <div>
            {error && <p>Halepa</p>}
           { isLoading ? <p>Loading...</p> : <ArticleList articles = {articles}/>}
            </div>
        </>
        )
    }
}