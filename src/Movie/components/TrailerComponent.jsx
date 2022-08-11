import { useEffect, useState } from 'react';
import './TrailerComponent.css';

export const TrailerComponent = ( {trailerState=false, trailer} ) => {

  localStorage.setItem("trailer", "true")
  console.log('trailer')

  const [showTrailer, setShowTrailer] = useState(trailerState)

  useEffect(() => {
    setShowTrailer(trailerState)
    ;
  }, [trailerState])


  const trailerTouched = () => {
    setShowTrailer(false)

  }



  return (
    <section className={showTrailer? 'trailer-container show-trailer':'trailer-container'} onClick={ trailerTouched }>
      <iframe 
              src={ trailer }
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
              
      </iframe>
    </section>
  )
}
