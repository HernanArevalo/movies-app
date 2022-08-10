import { useEffect, useState } from "react";
import { getMovies } from "../helpers/getMovies";


export const useFetchMovies = ( value ) => {

    const [state, setState] = useState({
        data: [],
        loading: true,
      });
    
      
      useEffect(()=>{
        
        if (value != '') {
          getMovies( value )
          .then( movies =>{
            setState({
                data: movies,
                loading: false,
              }
              )
              
            })
            
          }
          
        }, [value])
    

  return state
}
