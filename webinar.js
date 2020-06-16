require('dotenv').config();

const fromNum = "+14012625839";
const toNum=process.env.MY_NUMBER;

const client = require('twilio')(process.env.TWILIO_ACCOUNT, process.env.TWILIO_AUTH_TOKEN);

/*

client.messages.create({
    from: fromNum,
    to:process.env.MY_NUMBER,
    body: "Te envio un mensaje desde Twilio",
}).then(msg => console.log(msg))
.catch(e => console.log(e));


*/


client.calls.create({
    from: fromNum,
    to: process.env.MY_NUMBER,
    url:   "https://handler.twilio.com/twiml/EH42d77ffceddc8c428634b394d4c1e0da", //a prerecorded message --> say and play : TwiML bin!!
}).then(call => console.log(call));