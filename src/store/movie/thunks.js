import { savingMovie, setMovie } from './movieSlice'
import { useParams } from 'react-router-dom'
import { useFetchMovie } from '../../pages/Movie/hooks/useFetchMovie';


export const getMovie = (  ) => {

    return async( dispatch, getState ) =>{
        dispatch( savingMovie() );

        const { movieId, ...rest } = useParams();

        const movie = useFetchMovie( movieId );
    


        dispatch( setMovie( movie ) );
    }


}




