const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const urlencodedParser = bodyParser.urlencoded({extended: false})

app.use(express.static('public'))
app.use(urlencodedParser)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
}) 