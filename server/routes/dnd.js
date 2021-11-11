const express = require('express')
const request = require('superagent')

const router = express.Router()

const baseURL = 'https://www.dnd5eapi.co/api/'

router.get('/races', (req, res) => {
  return request.get(`${baseURL}/races`)
    .then(response => {
      return res.json(response.body.races)
    })
})

module.exports = router
