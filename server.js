const express = require('express')
const app = express()
const dotent = require('dotenv')
const cors = require('cors')
const mongoose = require('mongoose')
const userRouter = require('./router/UserRouter')
const bookingRouter = require('./router/BookingRouter')

const adminRouter = require('./router/AdminRouter')

dotent.config()

app.use(cors())
app.use(express.json())

app.use('/api/users', userRouter)
app.use('/api/appointments', bookingRouter)

app.get('/api/admin/dashboard', adminRouter)


const PORT = process.env.PORT || 5000
mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("MongoDB Connected Well")
    console.log(`Server Running On ${PORT}`)
}).catch((err) => console.log(err))


