import {axiosServices} from "./axios.services";

import {userKey} from "../config";

export const actorsServices = {

    getActors: (id) => axiosServices.get(`movie/${id}/credits?api_key=${userKey}&language=en-US`).then(value =>
        value.data
    ),
}