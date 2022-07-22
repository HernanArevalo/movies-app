import { getMovie } from "../../helpers/getMovie"
import './MovieComponent.css'

export const MovieComponent = () => {
    

    const backdropPath = '/aEGiJJP91HsKVTEPy1HhmN0wRLm.jpg'
    const backgroundImg = `https://image.tmdb.org/t/p/original${backdropPath}`
    
    const posterPath = '/rJHC1RUORuUhtfNb4Npclx0xnOf.jpg'
    const posterImg = `https://image.tmdb.org/t/p/original${posterPath}`
    


    const data = getMovie()
    

    
    return (
    <>
        <div className="main-container" 
            style={ { backgroundImage: `url(${backgroundImg})`} }
        > 
            <div className="upper-container">

                <div className="tagline-container">
                    <p>"Welcome to the day after judgement day"</p>
                </div>

                <div className="info-container">
                    <div className="title">
                        <h3>TERMINATOR: DARK FATE</h3>
                    </div>
                    <div className="year-genders">
                        <span>2019 | Suspense, Drama</span>
                    </div>
                    <div className="story-title">
                        <h4>The Story</h4>
                    </div>
                    <div className="story">
                        <p> 
                            Decades after Sarah Connor prevented 
                            Judgment Day,  a lethal new Terminator is 
                            sent to eliminate the future leader of the 
                            resistance. In a fight to save mankind,  
                            battle-hardened Sarah Connor teams up 
                            with an unexpected ally and an enhanced 
                            super soldier to stop the deadliest 
                            Terminator yet.
                        </p>

                    </div>


                    <div className="directing-title">
                        <h4>Directing</h4> 
                    </div>
                    <div className="directing-content">
                        <p> 
                            Tim Miller
                        </p>
                    </div>

                    <div className="poster-container">
                        <img src={posterImg} alt="" className="poster-img"/>
                    </div>

                </div>

            </div>

            <footer>
            Linda Hamilton     |     Arnold Schwarzenegger     |     Mackenzie Davis
            </footer>


            {/* <img src={posterImg} alt="" /> */}
            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/UqxnFHoKwzE?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>       */}
        </div>
    </>

  )
}
