import { useFetchMovie } from "../hooks/useFetchMovie"
import './MoviePage.css'

export const MoviePage = () => {
    
    const movie = useFetchMovie( 11631 )
    
    return (
    <>
        <div className="container" style={ { backgroundImage: `url(${movie.backdrop})`} }>

            <div className="main-container"> 
                <div className="upper-container">

                    <div className="tagline-container animate__animated animate__fadeInLeft">
                        <p>{ movie?.tagline }</p>
                    </div>

                    <div className="info-container animate__animated animate__fadeInRight">
                        <div className="title">
                            <h3>{ movie.title?.toUpperCase() }</h3>
                        </div>
                        <div className="year-genders animate__animated animate__fadeInRight">
                            <span>{ movie.year }     |     Suspense, Drama</span>
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

                        <div className="poster-container animate__animated animate__fadeInRight">
                            <img src={ movie.poster } alt="" className="poster-img"/>
                        </div>

                    </div>

                </div>

                <footer className="animate__animated animate__fadeInUp">
                {movie.actors}     |     Arnold Schwarzenegger     |     Mackenzie Davis
                </footer>
            </div>


            {/* <img src={posterImg} alt="" /> */}
            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/UqxnFHoKwzE?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>       */}
        </div>
    </>

  )
}
