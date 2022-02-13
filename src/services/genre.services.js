import {axiosServices} from "./axios.services";

import {urls} from "../config";

export const genresServices = {

    getAll: () => axiosServices.get(urls.genres).then(value =>
        value.data
    ),
    getByGenre: (page, genre) => axiosServices.get(`${urls.movieByGenre}&page=${page.page}&with_genres=${genre.genre}`).then(value =>
        value.data
    ),

}