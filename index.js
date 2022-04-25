import express from 'express'
import countriesRoute from './Routes/CountriesRoute.js'
const app = express()

const PORT = 3000
app.use(express.json())

app.use('/api', countriesRoute)

app.get('/', (req, res) => {
  res.send('list of the countries')
})

app.listen(PORT, () =>
  console.log(`server is running at port: http:localhost:${PORT}`)
)
