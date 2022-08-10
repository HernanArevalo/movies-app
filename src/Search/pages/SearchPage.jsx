
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'

import { MoviesGrid } from '../components/MoviesGrid'

import './SearchPage.css'

export const SearchPage = () => {

  const navigate = useNavigate()
  const location = useLocation();

  const {q = ''} = queryString.parse(location.search)

  console.log( q )

  const [inputValue, setInputValue] = useState(q)

    //! INPUT
    const handleInputChange = ( e ) => {
  
      setInputValue( e.target.value );
    }
  

  //? PARTE NUEVA

  //! SUBMIT
  const handleSubmit = ( e ) => {
    e.preventDefault();

    navigate(`?q=${ inputValue.toLocaleLowerCase().trim() }`)

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
