const Booking = require('../model/booking');

exports.booking = async (req, res) => {
    const {name, date, lastname, phone, service} = req.body

    if(!name || !date || !lastname || !phone || !service){
        return res.status(400).json({message: "all fields required"})
    }

    try{
       const isTaken = await Booking.findOne({date})
       if (isTaken) {
        return res.status(409).json({ message: 'This slot is already booked' });
      }
      const newAppointment = new Booking({name, date, lastname, phone, service})
      await newAppointment.save()
      
      res.status(201).json({ message: 'Appointment booked successfully', appointment: newAppointment });
    }catch(err){
        res.status(400).json({message: "Error Appointment", error: err.message})
    }
}

exports.getBooking = async (req, res) => {
     try{
        const booking = await Booking.find().sort({createdAt: -1})
        res.status(200).json({booking})
     }catch(err){
        res.status(500).json({message: "Error Get Booking", error: err.message})
     }
}
