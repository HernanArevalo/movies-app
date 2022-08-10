
import { useEffect, useState } from 'react'
import { MoviesGrid } from '../components/MoviesGrid'
// import { useFetchMovies } from '../hooks/useFetchMovies'
import './SearchPage.css'

export const SearchPage = () => {

  const [inputValue, setInputValue] = useState('')

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
            <MoviesGrid 
              inputValue={ inputValue }
            />
          </div>
        </div>

      </div>

    </>

  )
}
