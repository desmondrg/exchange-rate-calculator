
// Cross Origin Resource Sharing Config
import {CorsOptions} from 'cors';

// TODO: REMOVE LOCAL HOST FROM THE WHITE LIST WHEN BUILDING THIS APP FOR PRODUCTION PURPOSES AND NOT FOR DEMONSTRATION PURPOSES
export const whitelist = [
    'https://shumba.herokuapp.com',
    'http://localhost:3000' // create react app dev server
];


export const corsOptions: CorsOptions = {
    origin:  (origin, callback) =>
    {
        // TODO: REMEMBER TO REMOVE origin === undefined WHEN YOU FIND A SOLUTION FOR SAME SITE ORGIN NOT BEING DEFINED
        if (whitelist.indexOf(origin ?? '') !== -1 || origin === undefined)
        {
            callback(null, true);
        }
        else {
            callback(new Error(`Not allowed by CORS ${origin}`));
        }
    }
};
