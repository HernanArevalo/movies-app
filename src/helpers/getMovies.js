

export const getMovies = async( querySearch ) => {

    const api_key = '0b8f2d2a77497c17a0f15b1d4edfa0f8'
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${querySearch}&page=1`
    const resp = await fetch(url);
    const { results:data } = await resp.json();

    console.log( data )

  return 
}
