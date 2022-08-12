import { Navigate, useNavigate } from 'react-router-dom'
import './TrailerComponent.css';

export const TrailerComponent = ( {trailer, id} ) => {

  const navigate = useNavigate()

  const goBack = () => {
    navigate(`../movie/${id}`, { replace: true })
  }

  return (
      <section  onClick={ goBack }
                className='trailer-container animate__animated animate__fadeInRight' >
        <iframe 
                className='animate__animated animate__fadeInRight'
                src={ trailer }
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
                
        </iframe>
      </section>


  )
}
