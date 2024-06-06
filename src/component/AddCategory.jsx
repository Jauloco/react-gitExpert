import { useState } from "react";

export const AddCategory = ( { setAddCategories } ) => {

    const [ inputValue, setInputValue ] = useState('');
    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }
    const onSubmitform =(event) => {
        event.preventDefault();
        if (inputValue.trim().length > 0){
            setAddCategories(inputValue);
            setInputValue('');
        }
    }
    return(
        <form onSubmit={ onSubmitform }>
            <input type="text" placeholder="Buscar gifs" 
            value={ inputValue } onChange={ onInputChange }
            />
        </form>        
    );

}