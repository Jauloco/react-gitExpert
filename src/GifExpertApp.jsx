import { useState } from 'react';
import { AddCategory ,GifGrid } from './component';

export const GifExpertApp = () => {

    const [categorias, setCategorias ] = useState(['One Punch']);

    const onAddCategory = (newValue) => {
        if (!categorias.includes(newValue))
            setCategorias([newValue,...categorias]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory setAddCategories={ onAddCategory }/>

            { 
                categorias.map( (categoria) => (<GifGrid key={ categoria } category={ categoria}/>)) 
            }

        </>
    )
}