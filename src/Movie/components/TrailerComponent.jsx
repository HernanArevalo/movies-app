import './TrailerComponent.css'

export const TrailerComponent = () => {

  const imagenesLight = document.querySelector('.agregar-imagen')

  const trailerTouched = () => {
    console.log('trailer touched')

  }

  return (
    <section className='trailer-container' onClick={ trailerTouched }>
      <iframe width="80%" 
              height="100vw" 
              src="https://www.youtube.com/embed/UqxnFHoKwzE" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
              
      </iframe>
    </section>
  )
}
