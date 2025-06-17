const {booking} = require('./Booking')
const User = require('../model/user')

exports.allAppointment = async (req, res) => {

     try{
       const allAppointment = await booking.find()
       res.status(200).json({ appointments: allAppointment });
     }catch(err){
        console.error('Error fetching appointments:', err);
        res.status(500).json({ message: 'Server error' });
     }
}

exports.getUserCount = async (req, res) => {
    try{
      const users = await User.countDocuments()
      res.status(200).json({ users });
    }catch(err){
      console.error("შეცდომა userCount-ში:", err);
    res.status(500).json({ message: "შეცდომა მომხმარებლების დათვლაში" });
    }
}
