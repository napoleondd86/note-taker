const express = require('express');
const path = require('path');
const api = require('./routes/index.js');

const PORT = process.env.PORT || 3001;

const app = express();

//middleware for parsing JSON and urlencoded form data  /// boilerplate
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//MODULAR ROUTING, THIS DIRECTS ANY ROUTE - in this case there are not multiple files in /routes so not technically necessary
app.use('/api', api)


app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html')))


// homepage route 
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
