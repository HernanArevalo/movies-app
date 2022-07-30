import { useState, useLayoutEffect } from "react"
import { getMovie } from "../helpers/getMovie";

export const useFetchMovie = ( id ) => {

    const [state, setState] = useState({});

    useLayoutEffect(()=>{

        getMovie( id )
            .then( movie =>{

                setState(movie);
            });

    }, [ id ])



    return state // { data: [], loading: true }


}
