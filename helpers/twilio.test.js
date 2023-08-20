require('dotenv').config();

const { sendTextMessage } = require('./twilio');
sendTextMessage('hello', '+15197290185')
  .then(res => {
    //Do stuff with res.
    if (res.errorCode) {
      return console.log('message not sending');
    }
    console.log('message sent');
  });