const http = require('http');
const app = require('./app');

const port = process.env.PORT || 10787;

http.createServer(app)
    .listen(port, () => {
        console.log(`Your Server is running on port ${port}`);
    }); 