

export const getMovies = async( querySearch = '300' ) => {


    const api_key = '0b8f2d2a77497c17a0f15b1d4edfa0f8'
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${querySearch}&page=1`
    const resp = await fetch(url);
    const { results:data } = await resp.json();

    const movies = data.map( movie => {

      return { poster_path: movie.poster_path,
               image_path: movie.backdrop_path,
               poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
               image: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
               id: movie.id,
               title: movie.original_title,
               year: movie.release_date?.slice(0,4)

      }


    })

  return movies

}
