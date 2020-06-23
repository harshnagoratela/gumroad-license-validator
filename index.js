var express = require('express');
var axios = require('axios');

var app = express();
app.get('/', function (req, res) {
  //res.send('Hello World!');
  //res.json({key:"value"});  
});
app.post('/', function (req, res) {
  
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
app.listen(3000, function () {
  console.log('Validator app listening on port 3000!');
});