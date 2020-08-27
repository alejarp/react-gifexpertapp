import React,{useState} from 'react'
import PropTypes from 'prop-types'

export const AddCatergory = ({setcategorias}) => {
    
    const  [inputValue, setInputValue] = useState('')

    const handleInputChange = (e)=>{
        setInputValue( e.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        
        if(inputValue.trim().length>2)
        {
        setcategorias(cats =>[inputValue,...cats]);
        setInputValue('');
        }
        //console.log('Submit hecho')
    }
    return (
        <form onSubmit={handleSubmit} >

          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}

          ></input>
        </form>
    )
}

AddCatergory.propTypes={
    setcategorias:PropTypes.func.isRequired
}

