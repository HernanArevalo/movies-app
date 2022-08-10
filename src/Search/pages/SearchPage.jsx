
import { useEffect, useState } from 'react'
import { useFetchMovies } from '../hooks/useFetchMovies'
// import { getMovies } from '../helpers/getMovies'
// import { useForm } from '../hooks/useForm'
import './SearchPage.css'

export const SearchPage = () => {

  const [inputValue, setInputValue] = useState('')
  const { data:movies, loading } = useFetchMovies( inputValue )
  

    //! INPUT
    const handleInputChange = ( e ) => {
  
      setInputValue( e.target.value );
    }
  

  //? PARTE NUEVA

  //! SUBMIT
  const handleSubmit = ( e ) => {
    e.preventDefault();

  }


  return (
    <>
      <div className='background-div'></div>

      <div className="search-container">

        <h3>Search a Movie:</h3>

        <div className="input-container">

          <i className='bx bxs-search-alt-2'></i>
          <form onSubmit={ handleSubmit }>
            <input 
              type="text"
              name='inputValue'
              placeholder='Search a Movie'
              onChange={ handleInputChange }
              value={ inputValue }
            />
            
          </form>

        </div>

        <div className="movies-container">
          <div className='movies-list'>

              {!loading && movies.map(movie =>(

                <div key={movie.id} 
                     className='movie-list-item' 
                     style={ movie.image_path != null? 
                            { backgroundImage: `url(${movie.image})`}: (
                                movie.poster_path != null? 
                                { backgroundImage: `url(${movie.poster})`}: 
                                { backgroundImage: `url()`})}
                >
                  <div className='text-movie-list-item'>
                    <span>{movie.title}</span>
                    <span>{movie.year}</span>

                  </div>
                </div>

              ))

              }


          </div>

        </div>


      </div>

    </>

  )
}
