export const getGifs = async (search) =>{
    //const apiKey = 'g3MFycyXkRZCkpvTC92yTOwCEvNMuQ1W';
    const apiKey = 'jV3dff9X2V14W67ybKRU3ms9gXzny5X5';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${ apiKey }&limit=5&q=${ search }`;
    const resp = await fetch( url );
    const { data } = await resp.json();
    
    return data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
}