import { useEffect, useState } from 'react';
import movieAPI from '../api/movieAPI';

const useDetails = (movieId) => {

    // const [isloading, setIsLoading ] = useState(true);
    // const [statedetails, setStateDetails] = useState();
    // const [statecast, setStateCast] = useState();

    const [ state, setState ] = useState({
        isloading: true,
        movieFull: undefined,
        cast: []
    })

    const getMovieDetails = async () => {

        try {
            const responseDetailForId =  movieAPI.get(`/${movieId}`);
            const responseCast =  movieAPI.get(`/${movieId}/credits`);

            const [ detailResp, castResp] = await Promise.all([responseDetailForId, responseCast])

            setState({
                isloading: false,
                movieFull: detailResp.data,
                cast: castResp.data.cast
            })

            // setStateDetails(responseDetailForId.data);
            // setStateCast(responseCast.data)

            // setIsLoading(false)
            
        } catch (error) {
            console.log(`${error} que chimba`);
        }
    };

    useEffect(() => {
        getMovieDetails()
    }, [])
 
    return {
        ...state
    }
};

export default useDetails;
