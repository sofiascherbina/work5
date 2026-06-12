import SearchList from "./ImageList";
import { Component } from "react";
import axios from "axios";
import css from './images.module.css';
axios.defaults.baseURL='https://pixabay.com/api'
import ModalImage from "./ModalImage";

export default class SearchImages extends Component{
    state={
        images:[],
        loading:false,
        error:null,
        page:1,
        search:"",
        disable:true,
        selectedImage:null
    }
    handleChange=(evt)=>{
        const {name, value} = evt.target
        this.setState({
            [name]:value,
            page:1
        });
    }
    async componentDidUpdate(prevProps, prevState){
        if(prevState.search !== this.state.search || prevState.page !== this.state.page){
            this.setState({loading:true})
            const {page, search} = this.state;
            try{
                const response = await axios.get(`/?q=${search}&page=${page}&key=52031155-91d48f629b7cc6501a4f300a5&image_type=photo&orientation=horizontal&per_page=12`);
                this.setState(prev=>({
                    loading:false,
                    images: page ===1
                    ? response.data.hits
                    : [...prev.images, ...response.data.hits],
                    disable:false
                }))
            }
            catch(error){
                this.setState({error})
            }
        }   
    }
    handleLoadMore=()=>{
        this.setState(prev=>({
            page:prev.page+1
        }))
    }
    openModal=(image)=>{
        this.setState({
            selectedImage:image
        })
    }
     closeModal=()=>{
        this.setState({
            selectedImage:null
        })
    }
    render(){
        const {images, loading, error, search,disable, selectedImage} = this.state;

        return(
            <>
                <input type="text" name="search" value={search} onChange={this.handleChange} className={css.search}/>
                {error && <p>Halepa!</p>}
                <SearchList images={images} openModal={this.openModal}/>
                {loading && <p>Loading...</p>}
                <button onClick={this.handleLoadMore} className={css.loadMore} 
                    style={{display: disable
                     ? 'none'
                     : 'block'       
                }}>Load more</button>
                {selectedImage && <ModalImage imageSrc={selectedImage} onClose={this.closeModal}/>}
            </>
        )
    }
}