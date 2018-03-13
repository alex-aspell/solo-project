const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static('server/public'));

const movieRouter = require('./routers/movie-router');

const port = process.env.PORT || 12345
app.listen(port, function () {
    console.log('Listening on port: ', port);
});