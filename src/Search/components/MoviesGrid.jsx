
import React from 'react'
import { Link } from 'react-router-dom'
import { useFetchMovies } from '../hooks/useFetchMovies'

export const MoviesGrid = ( {inputValue} ) => {

  
  const { data:movies, loading } = useFetchMovies( inputValue )


  return (
    <>
        {loading? 
        <span></span>:
        movies.map(movie =>(
          <Link to={`/movie/${movie.id}`} key={ movie.id } >
            <div  className='movie-list-item 
                             animate__animated animate__fadeIn animate__delay-1s' 
                  style= { movie.image_path != null ? 
                          { backgroundImage: `url(${movie.image})`}: (
                            movie.poster_path != null? 
                            { backgroundImage: `url(${movie.poster})`}: 
                            { backgroundImage: `url()`})
                          }
            >

                <div className='text-movie-list-item'>
                  <span className='movie-grid-title'>{movie.title}</span>
                  <span className='movie-grid-year'>{movie.year}</span>
                </div>

            </div>
          </Link>
          ))

        }

    </>
  )
}
