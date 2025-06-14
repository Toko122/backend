const Booking = require('../model/booking');

exports.booking = async (req, res) => {
    const {name, date, lastname, phone, doctor, service} = req.body

    if(!name || !date || !lastname || !phone || !doctor || !service){
        return res.status(400).json({message: "all fields required"})
    }

    try{
       const isTaken = await Booking.findOne({date})
       if (isTaken) {
        return res.status(409).json({ message: 'This slot is already booked' });
      }
      const newAppointment = new Booking({name, date, lastname, phone, doctor, service})
      await newAppointment.save()
      
      res.status(201).json({ message: 'Appointment booked successfully', appointment: newAppointment });
    }catch(err){
        res.status(400).json({message: "Error Appointment", error: err.message})
    }
}