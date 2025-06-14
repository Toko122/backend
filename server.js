const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const userRouter = require('./router/UserRouter');
const bookingRouter = require('./router/BookingRouter');
const adminRouter = require('./router/AdminRouter');

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

app.use('/api/users', userRouter);
app.use('/api/appointments', bookingRouter);
app.use('/api/admin/dashboard', adminRouter);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("MongoDB Connected Well");
    app.listen(PORT, () => {
        console.log(`Server Running On http://localhost:${PORT}`);
    });
}).catch((err) => console.log(err));
