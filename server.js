const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const studentRoutes = require('./routes/student')
const accountRoutes = require('./routes/account')

const app = express()
const port = 3333

app.use(cors())
app.use(bodyParser.json())

app.use('/api/student', studentRoutes)
app.use('/api/account', accountRoutes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

