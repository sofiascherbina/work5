import PropTypes from "prop-types";
export default function GalleryItems({title,price,author,imageUrl, altText, quantity}){
    return (
        <li>
            <img src={imageUrl} alt={altText} width="200px"/>
            <h2>{title}</h2>
            <a href={author.url}>{author.tag}</a>
            <p>Price : {price}</p>
            <p>Quantity : {quantity}</p>
        </li>
    
    )
}