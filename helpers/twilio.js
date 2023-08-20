const twilioParams = {
    authToken: process.env.TWILIO_AUTH_TOKEN,
    accountSid: process.env.TWILIO_ACCOUNT_SID,
    accountNumber: process.env.TWILIO_ACCOUNT_NUMBER
};

const client = require('twilio')(twilioParams.accountSid, twilioParams.authToken);

const sendTextMessage = (message, to) => {

    return client.messages.create({
        body: message,
        from: twilioParams.accountNumber,
        to: to
    })
        .then(res => { return res })
        .catch(err => console.log(err));
};

module.exports = { sendTextMessage };