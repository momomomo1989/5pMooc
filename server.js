const express = require('express');
const app = express();


const api = require('./server/routing/api');


app.use('/api',api);

app.use(express.static(__dirname+'/views'));

console.log('nasma3 fik 3al 3000');
app.listen(3000);