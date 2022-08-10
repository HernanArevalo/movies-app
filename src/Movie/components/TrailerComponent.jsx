import './TrailerComponent.css'

export const TrailerComponent = () => {

  const imagenesLight = document.querySelector('.agregar-imagen')




  return (
    <div className='trailer-container'>
      <h1>TrailerComponent</h1> 
      <iframe width="560" 
              height="315" 
              src="https://www.youtube.com/embed/UqxnFHoKwzE" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
              
      </iframe>
    </div>
  )
}
