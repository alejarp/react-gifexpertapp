

export const getGifs=async(category)=>{

    const url=`https://api.giphy.com/v1/gifs/search?limit=10&q=${encodeURI(category)}&api_key=TGaIJbo0JcN5yCWfiV3aqKXnlPIeusy4`;

    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs =data.map( img => {
        return {
            id:img.id,
            title:img.title,
            url:img.images?.downsized_medium.url
        }
    })

    //console.log (gifs);
    //setImages(gifs);
    return gifs;
}
  