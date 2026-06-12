import {useEffect } from "react";
import * as basicLightbox from 'basiclightbox';
import "basiclightbox/dist/basicLightbox.min.css";

const CloseBtn =()=>{
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
    )
}

export default function ModalImage({imageSrc, onClose}){
   useEffect(()=>{
        const instance = basicLightbox.create(`
          <div>
            <img src="${imageSrc}" alt="image"/>
          </div>
        `);
        
        instance.show();
        return() =>{ 
            instance.close()
        };
    }, [imageSrc]) 

   return(
    <>
        <button onClick={onClose}><CloseBtn/></button>
    </> 
   )
}