const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(process.cwd(), 'dist/browser')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'dist/browser/index.html'));
});

const port = process.env.PORT || 3200;
app.listen(port);

console.log(`Server up and listening on port : ${port}`);