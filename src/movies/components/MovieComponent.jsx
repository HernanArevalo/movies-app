import { getMovie } from "../../helpers/getMovie"


export const MovieComponent = () => {
    

    const pathBackgroundImg = '/jBFxXKCrViA88hhO59fDx0Av4P.jpg'
    const backgroundImg = `https://image.tmdb.org/t/p/original${pathBackgroundImg}`
    
    const data = getMovie()
    

    
    return (
    <>
        <h1>MovieComponent</h1>
        <img src={ backgroundImg } />

    </>

  )
}
