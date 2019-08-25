let express = require('express');
let app = express(); 

app.use(express.static('public')) 

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

//  direct get call from index.js 
// app.get('/piyush', (req, res) => {
//     res.send('Hello Piyush!')
// });

//  if want to make calls in different page make router object from express.router  and modeule.export that router and call it in here.
let calls = require('../apiCalls/aoiCalls');
app.use(calls); 

const port = process.env.port || 3302
app.listen(port, ()=> console.log(`Server is started on ${port}`))  