import {axiosServices} from "./axios.services";

import {urls} from "../config";

export const famousActorServices = {

    getFamousActor: () => axiosServices.get(urls.famous).then(value =>
        value.data
    ),
}