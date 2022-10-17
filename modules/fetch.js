import axios from 'axios'

const api_url = "https://api.themoviedb.org/3";
const api_key = "4d8aa15e2551b4d3a51bf0064361cfa8";

const getUrl = ($url) => {
    return api_url+$url+"?api_key="+api_key+"&language=zh-TW&region=tw";
}

const getTopRateMovie = async() => {
    return await axios.get(getUrl("/movie/popular"))
}


const getMovieGenre = async() => {
    return await axios.get(getUrl("/genre/movie/list"))
}





export {
    getTopRateMovie,
    getMovieGenre
}