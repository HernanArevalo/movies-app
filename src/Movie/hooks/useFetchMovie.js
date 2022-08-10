import { useState, useLayoutEffect } from "react"
import { getMovieById } from "../helpers/getMovieById";

export const useFetchMovie = ( id ) => {

    const [state, setState] = useState({});

    useLayoutEffect(()=>{

        getMovieById( id )
            .then( movie =>{

                setState(movie);
            });

    }, [ id ])



    return state // { data: [], loading: true }


}
