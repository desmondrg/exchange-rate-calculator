
// Cross Origin Resource Sharing Config
export const whitelist = [
    'https://shumba.herokuapp.com'
];


export const corsOptions = {
    origin:  (origin, callback) =>
    {
        // TODO: REMEMBER TO REMOVE origin === undefined WHEN YOU FIND A SOLUTION FOR SAME SITE ORGIN NOT BEING DEFINED
        if (whitelist.indexOf(origin) !== -1 || origin === undefined)
        {
            callback(null, true);
        }
        else {
            callback(new Error(`Not allowed by CORS ${origin}`));
        }
    }
};
