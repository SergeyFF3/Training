import axios from "axios";
import {USER_LOCAL_STORAGE_KEY} from "../const/localstorage/items";

export const $api =  axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        autorization: localStorage.getItem(USER_LOCAL_STORAGE_KEY)
    }
})