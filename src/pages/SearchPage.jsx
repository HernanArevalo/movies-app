
import { useEffect, useState } from 'react'
import { getMovies } from '../helpers/getMovies'
import './SearchPage.css'

export const SearchPage = () => {

  // const { data:movies, loading } = useFetchMovies( inputSearch )

  const [inputValue, setInputValue] = useState('')
  //! INPUT
  const handleInputChange = ( e ) => {

    setInputValue( e.target.value );

  }

  useEffect(() => {
    console.log(inputValue)
  
    return () => {
      
    }
  }, [inputValue])
  
  //! SUBMIT
  const handleSubmit = () => {
    e.preventDefault();

  }
  if (inputValue.length > 2) {
    getMovies(inputValue)
  }

  return (
    <>
      <div className='background-div'></div>

      <div className="search-container">

        <h3>Search a Movie:</h3>

        <div className="input-container">

          <i className='bx bxs-search-alt-2'></i>
          <input 
            type="text"
            onChange={ handleInputChange }
            value={ inputValue }
          />

        </div>

        <div className="movies-container">
          <ul>



          </ul>

        </div>


      </div>

    </>

  )
}
