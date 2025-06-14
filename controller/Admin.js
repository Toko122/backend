const {booking} = require('./Booking')

exports.allAppointment = async (req, res) => {

     try{
       const allAppointment = await booking.find()
       res.status(200).json({ appointments: allAppointment });
     }catch(err){
        console.error('Error fetching appointments:', err);
        res.status(500).json({ message: 'Server error' });
     }
}
