const path  = require('path');
const express = require('express');
const hbs = require('express-handlebars');
const places = require('./workfrom/places');
const app = express();
const port = 3000;

app.engine('.hbs', hbs({
    defaultLayout: 'main',
    extname: 'hbs',
    layoutsDir: path.join(__dirname,'web/views/layouts')
}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'web/views'));

app.get('/', (request, response) => {
    places.getPlacesByZipCode("01803");
    response.render('home', {
        name: 'Paul Summers'
    });
});

app.listen(port, (err) => {
    if(err){
        return console.log("Error starting application" , err);
    }

    console.log("Express server running on port ${port}");
})

module.exports.app = app;