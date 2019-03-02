const fs = require('fs')
const express = require('express')
const config = require('./config/index')

// Express mock data
const app = express()
const router = express.Router()
const port = process.env.PORT || config.build.port

router.get("/", function (req, res, next) {
    req.url = './index.html'
    next()
})
router.route('/:apiName').all((req, res) => {
    fs.readFile('./mock/mock-data.json', 'utf8', (err, data) => {
        if (err) {
            throw err
        }
        const jsonData = JSON.parse(data)
        jsonData[req.params.apiName]
            ? res.json(jsonData[req.params.apiName])
            : res.send('no such api name')
    })
})

app.use('/mockApi', router)
app.use(express.static('./dist'))

module.exports = app.listen(port, function (err) {
    if (err) {
        throw err
    }
    console.log('> Express mock Server is Listening on ' + port + '\n')
})
