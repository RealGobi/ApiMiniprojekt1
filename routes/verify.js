// models
let Ticket = require('../models/ticket');

module.exports.get = async (req, res) => {

    try{
        // verify code
        let resp = await Ticket.find({ code: req.params.code })
        // FindById('*id number*')
        if(resp.length == 1 && !resp[0].used[0]) {
            // valid
            res.status(200).send({msg: `Ticket is valid, you magnificent bastard! Event: ${resp[0].event.name}.`, verified: true})

            await Ticket.findOneAndUpdate({code: req.params.code}, {
                used: true
            })
        } else {
            // not valid
            res.status(200).send({msg: `Ticket is invalid, you worthless theif!!!!`, verified: false })
        }

    } catch(err) {
        res.status(500).send(err)
    }
}