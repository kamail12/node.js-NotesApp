const express = require("express")
const app = express()
const {port} = require("./config")
const apiRouter = require("./routes/api")
const bodyParser = require("body-parser")
const cors = require("cors")

//db
require("./db/mongoose");

//parsers
app.use(bodyParser.json())

//fix CORS
app.use(cors())

//routes
app.use("/api", apiRouter)

//server
app.listen(port, function(){
    console.log("Server is running on port " + port)
})

