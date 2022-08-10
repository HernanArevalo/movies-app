import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { useFetchMovie } from "../hooks/useFetchMovie"
import { TrailerComponent } from '../components/TrailerComponent'

import './MoviePage.css'

export const MoviePage = () => {
    
    
    const { movieId, ...rest } = useParams();
    
    const movie = useFetchMovie( movieId );


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
                            <div className="trailer-text">
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
            
            <TrailerComponent/>

        </div>
    </>

  )
}

// ? 
// ? COSAS PARA CAMBIAR
// ? 
// ? 1- Titulo. Sacarlo del grid y corregir margenes
// ? 2- Géneros de las peliculas separados
// ? 3- Actores separados