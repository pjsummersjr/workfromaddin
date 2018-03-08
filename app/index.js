const path  = require('path');
const express = require('express');
const https = require('https');
const fs = require('fs');
const hbs = require('express-handlebars');
const places = require('./workfrom/places');
const apiRouter = require('./workfrom/apiRouting');

const Logger = require('bunyan');
const log = new Logger({name:'server-log'});

const app = express();
const port = 3000;
const workFromAppId = 'p9Q03LK3GbnwVQGL';

app.engine('.hbs', hbs({
    defaultLayout: 'main',
    extname: 'hbs',
    layoutsDir: path.join(__dirname,'web/views/layouts')
}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'web/views'));

app.use(express.static(__dirname + '/web/public'));
app.use('/api', apiRouter);

app.get('/', (request, response) => {
    response.render('home', {
        loggedIn: false
    })
});

const httpsOptions = {
    key: fs.readFileSync('./cert/key.pem'),
    cert: fs.readFileSync('./cert/cert.pem')
}

const server = https.createServer(httpsOptions, app).listen(port, (err) => {
    if(err){
        return log.error("Error starting application" , err);
    }

    log.info("Express server running on port ${port}");
});

module.exports.app = app;