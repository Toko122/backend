const Contact = require('../model/contact')

exports.postContacts = async (req, res) => {
    const {email, name, lastname, phone, message} = req.body     
    try{
        if(!name || !lastname || !email || !phone || !message) {
            return res.status(400).json({message: "all fields required"})
        }
        const contact = await Contact.create({
            name, lastname, email, message, phone
        })
        res.status(201).json({message: "message sent successfuly"})
     }catch(err){
        console.error("Error saving contact:", err);
        res.status(500).json({message: "Failed sending message"})
     }
}