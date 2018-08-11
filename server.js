const express = require('express')
const logger = require('morgan')

const app = express()

app.use(logger('dev'))
app.use(express.static(`${__dirname}/public`))

app.listen(3000, () => console.log('listening on port 3000'))