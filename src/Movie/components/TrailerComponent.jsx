import { useEffect, useState } from 'react';
import './TrailerComponent.css';

export const TrailerComponent = ( {trailerState=false, movieId} ) => {

  const [showTrailer, setShowTrailer] = useState(trailerState)

  useEffect(() => {
    setShowTrailer(trailerState)
    ;
  }, [trailerState])


  const trailerTouched = () => {
    setShowTrailer(false)

  }

  const getTrailerById = async(id) => {

    const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=0b8f2d2a77497c17a0f15b1d4edfa0f8&language=en-US`
    const resp = await fetch(url);
    const movieVideos = await resp.json();
  
    const {key:movieTrailerId} = movieVideos.results.find(movie => movie.type === 'Trailer');
    const trailerUrl = `https://www.youtube.com/embed/UqxnFHoKwzE`

    return trailerUrl;
  }

  const idTrailer = `https://www.youtube.com/embed/UqxnFHoKwzE`


  return (
    <section className={showTrailer? 'trailer-container show-trailer':'trailer-container'} onClick={ trailerTouched }>
      <iframe 
              src={ idTrailer }
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
              
      </iframe>
    </section>
  )
}
