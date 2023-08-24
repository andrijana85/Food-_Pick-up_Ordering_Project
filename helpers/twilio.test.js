require('dotenv').config();

const { sendTextMessage } = require('./twilio');
sendTextMessage(messageBody, '+15197290185')
  .then(res => {

    if (res.errorCode) {
      return console.log('message not sending');
    }
    console.log('message sent');
  });
