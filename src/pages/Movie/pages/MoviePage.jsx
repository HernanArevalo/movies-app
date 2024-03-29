import { useState } from 'react'
import { useDispatch} from 'react-redux'
import { Link, useLocation, useParams, Navigate } from 'react-router-dom'
import { useFetchMovie } from "../hooks/useFetchMovie"
import { TrailerComponent } from '../components/TrailerComponent'

import './MoviePage.css'
import { getMovie } from '../../../store/movie/thunks'


export const MoviePage = () => {
    
    const dispatch = useDispatch()

    const { movieId, ...rest } = useParams();

    dispatch( getMovie() );

    const location = useLocation();

    const movie = useFetchMovie( movieId );

    const [trailerState, setTrailerState] = useState( false )

    const changeTrailerState = () =>{ setTrailerState(!trailerState) }

    return (
    <>
        <div className="movie-container animate__animated animate__fadeIn " style={ { backgroundImage: `url(${movie.backdrop})`} }>
            <div className="main-container"> 

                
                <div className="upper-container">

                

                    <div className="title animate__animated animate__fadeInRight">
                        <h3>{ movie.title?.toUpperCase() }</h3>
                    </div>

                    <div className="info-container animate__animated animate__fadeInRight">

                        <div className="year-genders animate__animated animate__fadeInRight">
                            {
                                movie != null &&
                                (<span>{ movie.year }     |     {movie.genre1}, {movie.genre2}</span>)
                            }
                        </div>
                        <div className="story-title">
                            <h4>The Story</h4>
                        </div>
                        <div className="story animate__animated animate__fadeInRight">
                            <p> 
                                { movie.story }
                            </p>
                        </div>

                        <div className="directing-title">
                            <h4>Directing</h4> 
                        </div>
                        <div className="director animate__animated animate__fadeInRight">
                            <p> 
                                { movie.director }
                            </p>
                        </div>

                        <div className='multimedia-container trailerActive animate__animated animate__fadeInRight'>
                            <div className="poster">
                                <img src={ movie.poster } alt="" className="poster-img"/>
                            </div>
                            <Link to={"trailer" }>
                                <div className="trailer-text" onClick={ changeTrailerState }>
                                    <span>TRAILER</span>
                                    <i className='bx bxs-right-arrow'></i>
                                </div>
                            </Link>
                        </div>

                    </div>
                    
                    <div className="tagline-container animate__animated animate__slideInLeft">
                        <h4>{ movie?.tagline }</h4>
                    </div>

                </div>

                <footer className="footer animate__animated animate__fadeInUp">
                    <div className='footer'>
                        {movie.actor1}          |          {movie.actor2}          |          {movie.actor3}

                    </div>
                </footer>


            </div>

            { location.pathname.includes('trailer') &&
                <TrailerComponent 
                              trailer={ movie.trailer }
                              id={ movie.id }/>
            }


            <Link to={`/search`}>
                <div className='search-icon'>
                    <i className='bx bx-search-alt-2' ></i>
                </div>
            </Link>

        </div>
    </>

  )
}


/**
* TODO 
* 
* ! 1- background de peliculas sin poster (SearchPage)
* * 2- getMovieById que también aporte el trailer
* ! 3- X en el TrailerComponent
* * 4- Agrupar actores y generos en el getMovieById
* ! 5- SearchPage: que las peliculas sin toda la data no aparezcan 
* ! 6- SearchPage: que muestre las peliculas populares si no hay busqueda
* ! 7- Hacer el modo responsive para celulares (MovieList en columna)
* ! 8- Icono de page 

*/