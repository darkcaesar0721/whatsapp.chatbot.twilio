const express = require('express');
const twilio = require('twilio');

const twilioAccountSid = 'AC12d72f9a7189cf3f3b928b0f63f1ff2d';
const twilioAuthToken = '9a6d669a7a20cee1b156755cf37eca31';

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.post('/incoming', (req, res) => {
    const incomingMessage = req.body;

    const twilioClient = new twilio(twilioAccountSid, twilioAuthToken);

    twilioClient.messages.create({
        body: 'Thank you!',
        from: incomingMessage.To,
        to: incomingMessage.From
    })
        .then(message => console.log(message.sid));
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});