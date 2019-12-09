const express = require('express');
const bodyParser = require('body-parser');
const yourMusicFunctionHere = require('./yourMusicFunction')

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.raw());

app.use(bodyParser.urlencoded({
  extended: false,
}));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/',  (req, res) => {
    // call you functions here using whatever you sent in req
    // req.body could be anything you want to pass in from the request
    yourMusicFunctionHere(req.body)

  res.send(`Post completed`);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

