const path  = require('path');
const express = require('express');
const hbs = require('express-handlebars');
const places = require('./workfrom/places');
const apiRouter = require('./workfrom/apiRouting');
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

app.use('/api', apiRouter);

app.get('/', (request, response) => {
    response.render('home', {
        name: 'Paul Summers'
    })
});

/* app.get('/api/:zip', (request, response) => {
    places.getPlacesByZipCode(request.params.zip, workFromAppId)
    .then((data) => {
        response.send(data);
    })
    .catch((err) => {
        response.send(err);
    });
}); */

app.listen(port, (err) => {
    if(err){
        return console.log("Error starting application" , err);
    }

    console.log("Express server running on port ${port}");
})

module.exports.app = app;