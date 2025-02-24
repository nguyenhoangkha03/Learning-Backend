const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const facultyRoutes = require('./routes/faculty')
const accountRoutes = require('./routes/account')
const studentRoutes = require('./routes/student')
const classRoutes = require('./routes/class')
const teacherRoutes = require('./routes/teacher')
const managerRoutes = require('./routes/manager')
const roomRoutes = require('./routes/room')
const subjectRoutes = require('./routes/subject')
const semesterRoutes = require('./routes/semester')
const sectionClassRoutes = require('./routes/sectionClass')
const studentStudySectionRoutes = require('./routes/studentStudySection')

const app = express()
const port = 3333

app.use(cors())
app.use(bodyParser.json())

app.use('/api/faculty', facultyRoutes)
app.use('/api/student', studentRoutes)
app.use('/api/class', classRoutes)
app.use('/api/teacher', teacherRoutes)
app.use('/api/account', accountRoutes)
app.use('/api/manager', managerRoutes)
app.use('/api/room', roomRoutes)
app.use('/api/subject', subjectRoutes)
app.use('/api/semester', semesterRoutes)
app.use('/api/sectionClass', sectionClassRoutes)
app.use('/api/studentStudySection', studentStudySectionRoutes)

app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on port ${port}`)
})

