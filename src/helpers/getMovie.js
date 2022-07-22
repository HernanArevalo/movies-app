
export const getMovie = async( id = 290859 ) => {

    const movieUrl = `https://api.themoviedb.org/3/movie/${encodeURI(id)}?api_key=0b8f2d2a77497c17a0f15b1d4edfa0f8&language=en-US`;
    const resp = await fetch(movieUrl);
    const movieData = await resp.json();

    const creditsUrl = `https://api.themoviedb.org/3/movie/${encodeURI(id)}/credits?api_key=0b8f2d2a77497c17a0f15b1d4edfa0f8&language=en-US`;
    const resp2 = await fetch(creditsUrl);
    const creditsData = await resp2.json();
    
    const actors = [ creditsData.cast[0].name, creditsData.cast[1].name, creditsData.cast[2].name ]
    const director = creditsData.crew.filter( member => member.known_for_department == "Directing")[0].name


    const movie = { id: movieData.id,
                    backdrop: `https://image.tmdb.org/t/p/original${movieData.backdrop_path}`,
                    poster: `https://image.tmdb.org/t/p/original${movieData.poster_path}`,
                    genres: movieData.genres,
                    title: movieData.original_title,
                    story: movieData.overview,
                    tagline: movieData.tagline,
                    year: (movieData.release_date).slice(0,4),
                    actors: actors,
                    director: director,
                }


    return movie 
}
