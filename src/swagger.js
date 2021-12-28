'use strict'

const dotenv = require('dotenv')
const swaggerAutogen = require('swagger-autogen')()
const outputFile = './swagger.json'
const endpointsFiles = ['./src/index.js']

dotenv.config()

const doc = {
  info: {
    title: 'My Api',
    description: 'My first api in nodejs.'
  },
  host: `localhost:${process.env.PORT}`,
  schemes: [ 'http' ]
}

swaggerAutogen(outputFile, endpointsFiles, doc)