import axios from 'axios'

const api_url = "https://api.themoviedb.org/3";
const api_key = "4d8aa15e2551b4d3a51bf0064361cfa8";

const getUrl = ($url,$parms = []) => {
    let $parms_text = "";
    Object.entries($parms).forEach(([$key, $item])=>{
        $parms_text = $parms_text+("&"+$key+"="+$item);
    });
    
    return api_url+$url+"?api_key="+api_key+"&language=zh-TW&region=tw"+$parms_text;
}

const getMovie = async($movie_id) => {
    const $parms = Array();
    $parms['append_to_response'] = 'videos,keywords,watch/providers,recommendations,reviews,credits';

    return await axios.get(getUrl("/movie/"+$movie_id,$parms))
}

const getDrama = async($drama_id) => {
    const $parms = Array();
    $parms['append_to_response'] = 'videos,keywords,watch/providers,recommendations,reviews,credits';


    return await axios.get(getUrl("/tv/"+$drama_id,$parms))
}


const getTopRateMovie = async() => {
    return await axios.get(getUrl("/movie/popular"))
}

const getMovieGenre = async() => {
    return await axios.get(getUrl("/genre/movie/list"))
}

const getDramaGenre = async() => {
    return await axios.get(getUrl("/genre/tv/list"))
}

const getDiscoverMovie = async($genre_ids,$year = 0,$page = 1,$sort='popularity') => {
    const $parms = Array();
    $parms['with_genres'] = $genre_ids;
    if($year > 0){
        $parms['year'] = $year;
    }

    if($page > 1){
        $parms['page'] = $page;
    }

    if($sort){
        $parms['sort_by'] = $sort+".desc";
    }

    return await axios.get(getUrl("/discover/movie",$parms))
}


const getProviderMovie = async($provider) => {
    const $parms = Array();
    $parms['with_watch_providers'] = $provider;

    return await axios.get(getUrl("/discover/movie",$parms))
}


const getDiscoverDrama = async($genre_ids,$year = 0,$page = 1,$sort='popularity') => {
    const $parms = Array();
    $parms['with_genres'] = $genre_ids;
    if($year > 0){
        $parms['first_air_date_year'] = $year;
    }

    if($page > 1){
        $parms['page'] = $page;
    }

    if($sort){
        $parms['sort_by'] = $sort+".desc";
    }
    
    return await axios.get(getUrl("/discover/tv",$parms))
}

/**
 * 熱門電影
 */
const getPopularMovie = async() => {
    const $parms = Array();
    $parms['sort_by'] = "popularity.desc";

    return await axios.get(getUrl("/discover/movie",$parms))
}

/**
 * 熱門劇
 */
const getPopularDrama = async($language) => {
    const $parms = Array();
    $parms['sort_by'] = "popularity.desc";

    if($language){
        $parms['with_original_language'] = $language;
    }

    return await axios.get(getUrl("/discover/tv",$parms))
}

const getSearchAll = async($query,$page = 1) => {
    const $parms = Array();
    $parms['query'] = $query;

    if($page > 1){
        $parms['page'] = $page;
    }

    return await axios.get(getUrl("/search/multi", $parms))
}

const getSearchMovie = async($query,$page = 1) => {
    const $parms = Array();
    $parms['query'] = $query;

    if($page > 1){
        $parms['page'] = $page;
    }

    return await axios.get(getUrl("/search/movie", $parms))
}

const getSearchDrama = async($query,$page = 1) => {
    const $parms = Array();
    $parms['query'] = $query;

    if($page > 1){
        $parms['page'] = $page;
    }

    return await axios.get(getUrl("/search/tv", $parms))
}

const getProvider = async() => {

    return await axios.get(getUrl("/watch/providers/movie"))
}





export {
    getMovie,
    getDrama,
    getTopRateMovie,
    getMovieGenre,
    getDramaGenre,
    getDiscoverMovie,
    getDiscoverDrama,
    getPopularMovie,
    getPopularDrama,
    getSearchAll,
    getSearchMovie,
    getSearchDrama,
    getProvider,
    getProviderMovie
}