import { useState } from 'react'
import { useFetchMovie } from "../hooks/useFetchMovie"
import './MoviePage.css'

export const MoviePage = () => {
    
    const movie = useFetchMovie( 22 )
    

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
                                    <span>TRAILER <i className='bx bx-chevron-right'></i><i className='bx bx-chevron-right'></i><i className='bx bx-chevron-right'></i></span>
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


            {/* <img src={posterImg} alt="" /> */}
            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/UqxnFHoKwzE?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>       */}
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