'use strict'

const db = require('../database/models/')

exports.get = async (req, res, next) => {
  // return res.send('hello world')
  try {
    const results = await db.user.findAll()
    return res.status(200).json(results)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

exports.post = async (req, res, next) => {
  try {
    const { name, email } = req.body
    const result = await db.user.create({ name, email })
    return res.status(201).json(result)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

exports.put = async (req, res, next) => {
  try {
    const id = req.params.id
    const { name, email } = req.body
    const entity = await db.user.findOne({ where: { id } })
    entity.name = name
    entity.email = email
    await entity.save()
    return res.status(202).json(entity)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

exports.delete = async (req, res, next) => {
  try {
    const id = req.params.id
    await db.user.destroy({ where: { id } })
    return res.status(202)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}