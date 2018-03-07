const express = require('express');
const app = express();
const port = 3000;


app.get('/', (request, response) => {
    response.send('Express is working');
});

app.listen(port, (err) => {
    if(err){
        return console.log("Error starting application" , err);
    }

    console.log("Express server running on port ${port}");
})