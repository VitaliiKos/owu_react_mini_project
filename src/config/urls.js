const baseURL = 'https://api.themoviedb.org/3';
export const userKey = '38ede48569562a4c614b6d0235a79df7';
export const movieImages = 'https://image.tmdb.org/t/p/original/';
export const actorImages = 'https://image.tmdb.org/t/p/original';

export const urls = {
    genres: `/genre/movie/list?api_key=${userKey}&language=en-US`,
    movieByGenre: `/discover/movie?api_key=${userKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_watch_monetization_types=flatrate`,
    movies: `/discover/movie?api_key=${userKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_watch_monetization_types=flatrate`,
    famous: `/person/2888?api_key=${userKey}&language=en-US`,
}
export default baseURL;