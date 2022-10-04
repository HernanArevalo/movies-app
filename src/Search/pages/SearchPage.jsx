
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'

import { MoviesGrid } from '../components/MoviesGrid'

import './SearchPage.css'

export const SearchPage = () => {

  const navigate = useNavigate()
  const location = useLocation();

  const {q = ''} = queryString.parse(location.search)
  const [inputValue, setInputValue] = useState(q)

  
    //! INPUT
    const handleInputChange = ( e ) => {
  
      setInputValue( e.target.value );
      navigate(`?q=${ e.target.value.toLocaleLowerCase().trim() }`)

    }
  

  //? NEW

  //! SUBMIT
  const handleSubmit = ( e ) => {
    e.preventDefault();

    navigate(`?q=${ inputValue.toLocaleLowerCase().trim() }`)

  }

  return (
    <>
      <div className='background-div'></div>

      <div className="search-page-container">

        <div className="search-head">
          
          <h3 className='search-h3 animate__animated animate__fadeInDown'>Search a Movie:</h3>

          <div className="input-container">

            <i className='bx bxs-search-alt-2'></i>
            <form onSubmit={ handleSubmit }>
              <input 
                type="text"
                name='inputValue'
                placeholder=''
                onChange={ handleInputChange }
                value={ inputValue }
                autoComplete="off"
              />
              
            </form>

          </div>
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
