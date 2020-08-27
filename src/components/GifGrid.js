import React from 'react'
import { useFechGifs } from '../hooks/useFechGifs'
import { GifGridItem } from './GifGridItem';
//import { getGifs } from '../helpers/getGifs';


export const GifGrid = ({category}) => {

const {data:images,loading}=useFechGifs(category);
//console.log(data);
//console.log(loading);



    return (
        <>
         <h3>{category}</h3>  
        {loading && <p>Loading...</p>}
         
        { <div className="car-grid">         
          
          {
                images.map(img =>(
                    <GifGridItem key={img.id}{ ...img} />
                    )
                        
                )}

        </div> }
        </>
    )
}
