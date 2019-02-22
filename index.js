const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');



mongoose.connect(`mongodb+srv://Rabbit:${process.env.PASSWORD}@bunnyrabbit-rzsjf.mongodb.net/wia?retryWrites=true`, { useNewUrlParser: true })
.then( () => {
    console.info('You are connected to the hive. We will add your technological distinctivness to our own.');
})
.catch(err => {
    console.log('Game over, man! Game over! ' + err)
})

let events = require('./routes/events');
let tickets = require('./routes/tickets');
let verify = require('./routes/verify');

let app = express();

app.use(express.json());
app.use(cors());

app.route('/events')
.get(events.get)
.post(events.post)

app.route('/tickets')
.post(tickets.post)

app.route('/verify/:code')
.get(verify.get)

app.listen(3000, () => {
    console.info('Den jävla servern körs på portjävel: 3000');
})