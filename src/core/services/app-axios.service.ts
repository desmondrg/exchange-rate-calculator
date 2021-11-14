import {Axios} from 'axios';

/**
 * An instance of Axios to fetch the data from the server
 * tethered to this App
 */
const axios = new Axios({});

/**
 * An instance of Axios configured to be used throught the app
 */
export const appAxios = axios;