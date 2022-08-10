
import React from 'react'
import { Link } from 'react-router-dom'
import { useFetchMovies } from '../hooks/useFetchMovies'

export const MoviesGrid = ( {inputValue} ) => {

  
  const { data:movies, loading } = useFetchMovies( inputValue )


  return (
    <>

        {loading && <span>loading</span>}
        {!loading && movies.map(movie =>(
          <Link to={`/movie/${movie.id}`} key={ movie.id } >
            <div  className='movie-list-item' 
                  style= { movie.image_path != null ? 
                          { backgroundImage: `url(${movie.image})`}: (
                            movie.poster_path != null? 
                            { backgroundImage: `url(${movie.poster})`}: 
                            { backgroundImage: `url()`})
                          }
            >
                <div className='text-movie-list-item'>
                <span>{movie.title}</span>
                <span>{movie.year}</span>

                </div>
            </div>
          </Link>
          ))

        }

    </>
  )
}
