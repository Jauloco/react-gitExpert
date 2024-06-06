import { useEffect, useState } from "react";
import { getGifs } from "../Helpers/getGifs";

export const useFetchGifs = ( category) => {
    const [ imagenList, setImagen] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    const getImagene = async () => {
        const newImages = await getGifs( category );
        setImagen(newImages);
        setIsLoading(false);
    }

    useEffect( () =>  {
        getImagene();
    }, [] );

  return {
    imagenList,
    isLoading
  }
}
