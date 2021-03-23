const express = require("express");
const app = express()
const mongoose = require('mongoose')
const parser = require('body-parser')
app.use(parser.json())
var morgan = require('morgan')
const path = require('path')
const uri = "mongodb+srv://user:uvOyX5UA6I2mjplk@cluster0.azmit.mongodb.net/lms3?retryWrites=true&w=majority"
app.use(morgan('tiny'))
const contestRouter = require('./routers/contest')
const locationRouter = require('./routers/location')
const participantRouter = require('./routers/participant')
const questionRouter = require('./routers/questions')
const history = require('connect-history-api-fallback')
app.use(history({
  verbose: false,
  disableDotRule:false
}));
app.use('/', express.static(path.join(__dirname, '../dist')));
console.log("pass")
app.use('/api/contests',contestRouter)
app.use('/api/locations',locationRouter)
app.use('/api/participants',participantRouter)
app.use('/api/questions',questionRouter)

mongoose.connect(uri, {
    useNewUrlParser: "true",
  })
  mongoose.connection.on("error", err => {
    console.log("err", err)
  })
  mongoose.connection.on("connected", (err, res) => {
    console.log("mongoose is connected")
  })


app.listen(process.env.PORT || 8085, function (err) {
    if (!err) {
      console.log("server is running  ")
    }
  })