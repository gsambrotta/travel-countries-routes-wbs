import express from 'express'
import countries from '../countries.js'
const router = express.Router()

router.get('/countries', (req, res) => {
  res.json(JSON.stringify(countries))
})

// POST /api/countries
// This route should accept a new country as JSON
// add the new country to the countries array
router.post('/countries', (req, res) => {
  console.log(req.body)
  if (!req.body) {
    countries.push(req.body)
  }

  res.end()
})
export default router
