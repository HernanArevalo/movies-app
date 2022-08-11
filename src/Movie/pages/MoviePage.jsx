import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useFetchMovie } from "../hooks/useFetchMovie"
import { TrailerComponent } from '../components/TrailerComponent'

import './MoviePage.css'


export const MoviePage = () => {
    
    localStorage.setItem("trailer", "false")

    const { movieId, ...rest } = useParams();
    
    const movie = useFetchMovie( movieId );

    const [trailerState, setTrailerState] = useState( false )

    const changeTrailerState = () =>{ setTrailerState(!trailerState) }

    console.log(localStorage.getItem("trailer"))
    return (
    <>
        <div className="container" style={ { backgroundImage: `url(${movie.backdrop})`} }>
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
                        <div className="directing-content animate__animated animate__fadeInRight">
                            <p> 
                                { movie.director }
                            </p>
                        </div>

                        <div className='multimedia-container trailerActive animate__animated animate__fadeInRight'>
                            <div className="poster">
                                <img src={ movie.poster } alt="" className="poster-img"/>
                            </div>
                            <div className="trailer-text" onClick={ changeTrailerState }>
                                <span>TRAILER</span>
                                <i className='bx bxs-right-arrow'></i>
                                
                            </div>
                        </div>

                    </div>

                </div>

                <div className="tagline-container animate__animated animate__slideInLeft">
                    <h4>{ movie?.tagline }</h4>
                </div>

                <footer className="animate__animated animate__fadeInUp">
                    {movie.actor1}          |          {movie.actor2}          |          {movie.actor3}
                </footer>


            </div>

            <TrailerComponent trailerState={ trailerState } 
                              trailer={ movie.trailer } 

                              className="movie-trrailer"/>


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

*/