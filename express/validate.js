'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');

const router = express.Router();
router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Welcome to Gumroad License Validator Application!</h1>');
  res.end();
});
//router.post('/', (req, res) => res.json({ postBody: req.body }));
router.post('/', function (req, res) {
  
  console.log(req.params);
	
  axios.post("https://api.gumroad.com/v2/licenses/verify?product_permalink=WHvhf1&license_key=C9B83BEC-DC1A43C1-9CBFF146-7A2277DE")
  .then(response => {
	console.log(response.data)
	res.json(response.data)
  })
  .catch(err => {
	console.log(err.response.data);
	res.json(err.response.data)
  })
});

app.use(bodyParser.json());
app.use('/.netlify/functions/validate', router);  // path must route to lambda
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

module.exports = app;
module.exports.handler = serverless(app);
