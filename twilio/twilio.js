// This part shoud be in .env file for Security
const twilioParams = {
    authToken: process.env.TWILIO_AUTH_TOKEN,
    accountSid: process.env.TWILIO_ACCOUNT_SID,
    accountNumber: process.env.TWILIO_ACCOUNT_NUMBER
};

const sendTextMessage = (message, to) => {
    const client = require('twilio')(twilioParams.accountSid, twilioParams.authToken);

    return client.messages.create({
        body: `{messageBody}`,
        from: twilioParams.accountNumber,
        to: 13345083982
    }).then(message => message).catch(err => console.log(err));
};

module.exports = { sendTextMessage };