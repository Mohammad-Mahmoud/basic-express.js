const express = require('express')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', async (req, res) => {
    res.send("Hello")
})

app.listen(PORT)
