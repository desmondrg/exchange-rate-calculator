// warning: load the environment before doing anything else
import {loadEnv} from './shared/load-env';
loadEnv.load();
import express from 'express';
import path from 'path';
import cors from 'cors';
import helmet from 'helmet';
import {corsOptions} from './config/cors-config';

const app = express();


if(process.env.NODE_ENV === 'development')
{
    // allow resource sharing with all types of clients from everywhere when in development
    app.use(cors());

}else{

    // only allow resource sharing with whitelisted clients when in production
    app.use(cors(corsOptions));
    app.use(helmet());
}

// Serve static files from the React app
app.use(express.static(path.join(process.cwd(), 'dist/browser')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'dist/browser/index.html'));
});

// use a dynamically set port : useful in production
// where the port is only known at run time
const port = process.env.PORT || 3200;
app.listen(port);

console.log(`Server up and listening on port : ${port}`);