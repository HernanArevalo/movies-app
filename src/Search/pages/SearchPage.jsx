
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

  const [movies, setMovies] = useState({
    data: [],
    loading: true,

});

  useEffect(()=>{

    if (inputValue != '') {
      getMovies(inputValue )
        .then( movies =>{
  
          setMovies({
            data: movies,
            loading: false,
          }
        )
          
        })
      
    }

    }, [inputValue])
  
  //! SUBMIT
  const handleSubmit = () => {
    e.preventDefault();

  }


  console.log(movies)

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
          <h4>Movies list:</h4>
          <ul>

              {!movies.loading && movies.data.map(movie =>(

                <li key={movie.id}>{movie.title} - {movie.year}</li>

              ))

              }


          </ul>

        </div>


      </div>

    </>

  )
}
