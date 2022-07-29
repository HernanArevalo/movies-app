
import { setMovieCategory } from '../components/setMovieCategory'
import './SearchPage.css'

export const SearchPage = () => {

  // const { data:movies, loading } = useFetchMovies( inputSearch )

  return (
    <>
      <div className='background-div'></div>

      <div className="search-container">

        <h3>Search a Movie:</h3>

        <div className="input-container">

          <i className='bx bxs-search-alt-2'></i>
          <input 
            type="text"

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
