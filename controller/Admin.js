const booking = require('../model/booking')
const User = require('../model/user')
const Contact = require('../model/contact')

exports.allAppointment = async (req, res) => {
  try {
    const allAppointment = await booking.countDocuments();
    res.status(200).json({ appointments: allAppointment });
  } catch (err) {
    console.error('Error fetching appointments:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getUserCount = async (req, res) => {
  try {
    const users = await User.countDocuments();
    res.status(200).json({ users });
  } catch (err) {
    console.error("შეცდომა userCount-ში:", err);
    res.status(500).json({ message: "შეცდომა მომხმარებლების დათვლაში" });
  }
};

exports.countContact = async (req, res) => {
  try {
    const contact = await Contact.countDocuments();
    res.status(200).json({ contact });
  } catch (err) {
    console.error("შეცდომა ConnectCount-ში:", err);
    res.status(500).json({ message: "Error Counting Contacts" });
  }
};

