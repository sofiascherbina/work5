import GalleryItems from "./GalleryItems";
export default function Gallery({items}){
    return (
        <ul>
            {items.map( item =>(<GalleryItems 
                key={item.id}
                title={item.title}
                author={item.author}
                price={item.price}
                imageUrl={item.url}
                altText = {item.altText}
                quantity = {item.quantity} />))}
        </ul>
    )
}