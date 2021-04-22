const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
// App init
const app = express()
// Cross origin shizzle
app.use(cors())
// bodyParser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// Mongo - DB connection
const uri = "mongodb+srv://danzilla:hahaTestingDB@hahahquizzy.ftupy.mongodb.net/quizy_db?retryWrites=true&w=majority";
const mongoose = require("mongoose")
// Router
const toDoRouter = require('./routers/toDo')
// App 
mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
	.then(() => {
        console.log('\nConnected to Database')
        // Routers
        app.use('/todo', toDoRouter)
        // App Listening
		app.listen(4000, () => {
            console.log('Server listening on 4000 \n')
        })
    }) 