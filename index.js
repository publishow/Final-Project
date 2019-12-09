const express = require('express')
const port = 3000
const app = express()
const closetmodel= require("./model/closet.model")

//app.use(express.static('public'));
//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb+srv://dbuser:G2eFtnOcBGRY7VE6@cluster0-sy5yh.mongodb.net/continent?retryWrites=true&w=majority'
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.set('view engine', 'pug');

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