const express = require('express'); //Express server
const bodyParser = require('body-parser'); //Allows data extraction from request headers, etc
const path = require('path'); //Directory path tool
const http = require('http');
const app = express();

const api = require('./server/routes/api'); // Accesses api

//Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

//Serve static files
app.use(express.static(path.join(__dirname,'dist')));

//Set up our api routes
//mongodb://<dbuser>:<dbpassword>@ds123929.mlab.com:23929/projectgram
app.use('/api', api);

//Return other routes to Angular index file
app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set port
const port = process.env.PORT || '3000';
app.set('port', port);

//Create HTTP server
const server = http.createServer(app);

server.listen(port, () => console.log('Running on localhost:' + port))
