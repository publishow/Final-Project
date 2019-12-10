const express = require('express')
const port = process.env.PORT || 3000
const app = express()
const closetmodel= require("./model/closet.model")
var mongoose = require('mongoose');
require('dotenv').config()

app.use(express.static('public'));
app.set('view engine', 'pug');

var mongoDB = process.env.MONGO_CONNECT_URI
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => {
  // const closet = [
  //   { name: 'TOP'},
  // ];
  closetmodel.find({}).exec((err, closet) => {
    if(err) {
      return console.log(err)
    }
    console.log(closet)
    res.render('index', { closet });
  })

});

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})