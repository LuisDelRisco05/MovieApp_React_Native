import { useEffect, useState } from "react";
import movieAPI from "../api/movieAPI";


export const useMovies = () => {


    const [isloading, setIsLoading ] = useState(true);

    const [ moviescurrent, setMoviesCurrent ] = useState([]);
    const [ moviespopular, setMoviesPopular ] = useState([]);
    const [ moviestoprated, setMovieTopRated ] = useState([]);
    const [ moviesupcoming, setMoviesUpcoming ] = useState([]);


    const getMovies = async () => {
        try {
            const responseNowPlaying = await movieAPI.get('/now_playing');
            const responsePopular = await movieAPI.get('/popular');
            const responseTopRated = await movieAPI.get('/top_rated');
            const responseUpcoming = await movieAPI.get('/upcoming');
         
            setMoviesCurrent(responseNowPlaying.data.results);
            setMoviesPopular(responsePopular.data.results);
            setMovieTopRated(responseTopRated.data.results);
            setMoviesUpcoming(responseUpcoming.data.results);
      
            setIsLoading(false);
            
        } catch (error) {
            console.log(error);
        }
        
    }

    
    useEffect(() => {
        getMovies();
        
    }, []);

    return {
        isloading,
        moviescurrent,
        moviespopular,
        moviestoprated,
        moviesupcoming
     
        

    }

}