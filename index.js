import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

const app = express()

import route from './app/routes/Routes'

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Header', 'Origin, X-reqed-With, Content-Type, Accept')
    next();
})
// set bodyParser sebagai middleware yang akan memparsing body req
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// connect ke database
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/jangkrik', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
})

// set route
app.use('/api', route)

app.get('/', (req, res) => {
    return res.json({
        "status": false,
        "message": "Nothing!"
    })
})

// jika route tidak ditemukan
app.use((req, res, next) => {
    res.status(404).send('<h2 align=center>Page not found!</h2>')
})

const port = 3000
app.listen(port, () => {
    console.log(`server running on port ${port}`)
})