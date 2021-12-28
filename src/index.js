'use strict'

const dotenv = require('dotenv')
const express = require('express')
const routes = require('./routes')
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('../swagger.json')

dotenv.config()

const PORT = process.env.PORT || 3000
const app = express()

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(express.json())
app.use(routes)

app.listen(PORT, () => {
  console.log(`[server]: Swagger in http://localhost:${PORT}/doc`)
})