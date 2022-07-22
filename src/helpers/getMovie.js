
export const getMovie = async( id = 290859 ) => {

    const movieUrl = `https://api.themoviedb.org/3/movie/${encodeURI(id)}?api_key=0b8f2d2a77497c17a0f15b1d4edfa0f8&language=en-US`;
    const resp = await fetch(movieUrl);
    const movieData = await resp.json();




    const movie = { id: movieData.id,
                    backdrop: `https://image.tmdb.org/t/p/original${movieData.backdrop_path}`,
                    poster: `https://image.tmdb.org/t/p/original${movieData.poster_path}`,
                    genres: movieData.genres,
                    title: movieData.original_title,
                    story: movieData.overview,
                    tagline: movieData.tagline,
                    year: (movieData.release_date).slice(0,4)
                }


    return movie 
}
