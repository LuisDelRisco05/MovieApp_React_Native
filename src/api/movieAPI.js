import axios from "axios";


const movieAPI = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '2ce9aae9438d23e459d491ef1cfaec12',
        language: 'es-ES'
    }
});

export default movieAPI;