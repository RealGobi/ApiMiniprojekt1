let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let eventSchema = new Schema({
    name: String,
    where: String,
    when: {
        from: String,
        to: String
    },
    date: {
        month: String,
        day: String
    },
    price: Number,
    tickets: {
        available: Number,
        sold:Number
    }
});

let Event = mongoose.model('event', eventSchema);

module.exports = Event;