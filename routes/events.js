let Event = require('../models/events');

// GET
module.exports.get = async (req, res) => {

    try {

        res.status(200).send(await Event.find({}));

    } catch (err) {
        res.status(500).send(err);
    }

}
// POST
module.exports.post = async (req, res) => {
    try {
        res.status(200).send( await Event.create(req.body));
    } catch(err) {
        res.status(500).send(err.stack);
    }
}