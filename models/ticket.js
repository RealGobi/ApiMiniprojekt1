let mongoose = require('mongoose');

let Schema = mongoose.Schema;

// Skapa ett schema
let ticketSchema = new Schema({
    code: String,
    event: Object,
    used: {
        type: [Boolean, 'ditt booleanhuvud'],
        default: false
    }
});

//Skapa en modell baserat på det schemat
let Ticket = mongoose.model('ticket', ticketSchema);

module.exports = Ticket;