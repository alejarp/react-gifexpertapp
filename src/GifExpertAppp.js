import React ,{useState} from 'react';
import{AddCatergory} from './components/AddCatergory'
import {GifGrid } from './components/GifGrid.js'


export const GifExpertApp= ()=>{

//const categorias= ['One Punch','Samurai X','Dragon Ball'];
const [categorias, setcategorias] = useState(['One Punch'])

/*
const handleAdd=()=>{
    setcategorias([...categorias],  'HunterXHunter');
}
*/
const nombre ='GifExpertApp';
return (
    <>
        <h2>AddCatergory</h2>
        <AddCatergory setcategorias={setcategorias} />    
        <hr></hr>

        
        <ol>
            {
                categorias.map(category =>
                    <GifGrid 
                        key ={category}
                        category={category}></GifGrid>
                )}
        </ol>
    </>
)

}
