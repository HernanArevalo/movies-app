
export const getMovie = async() => {

    const url = `https://api.themoviedb.org/3/movie/597?api_key=0b8f2d2a77497c17a0f15b1d4edfa0f8&language=en-US`;
    const resp = await fetch(url);
    const data = await resp.json();

    console.log(data)

    // const gifs = data.map( img => {
    //     return { id: img.id,
    //                 title: img.title,
    //                 url: img.images?.downsized_medium.url
    //             }
    // })

    return data 
}
