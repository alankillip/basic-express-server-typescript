import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

const port = 3000;

// Instantiate the server
const app = express();

// Define a folder for static files
app.use('/', express.static(path.join(__dirname, '../public')));

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

// support parsing of application/json type post data
app.use(bodyParser.json());



// Basic route ( get )
app.get('/', (req, res) => {
    res.send('hello');
});

// Basic route ( post )
app.post('/post', (req, res) => {
    console.info('request body received', req.body);
    res.send('ok');
});


// Tell express to listen on port
app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});

