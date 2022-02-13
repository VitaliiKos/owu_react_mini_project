import {axiosServices} from "./axios.services";
import {userKey} from "../config";

export const moviesServices = {

    getMovieById: (id) => axiosServices.get(`movie/${id}?api_key=${userKey}&language=en-US`).then(value =>
        value.data
    ),

}