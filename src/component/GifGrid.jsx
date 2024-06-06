import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../Hooks/useFetchGifs";


export const GifGrid = ({ category }) => {
    
    const { imagenList, isLoading } = useFetchGifs(category);

    return(
        <>
            <h4>{ category }</h4>
            {
                isLoading && (<h2>Cargando...</h2>)
            }
            <div className="card-grid">
                {
                    imagenList.map( (images) => (
                    <GifGridItem key={ images.id } { ...images }/>
                    ))
                }
            </div>
        </>
    )
}

