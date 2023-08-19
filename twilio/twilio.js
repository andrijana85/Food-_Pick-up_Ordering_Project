// This part shoud be in .env file for Security
const twilioParams = {
    authToken: ACf57c7c0561436df3daa1940325bf3281,
    accountSid: ACf57c7c0561436df3daa1940325bf3281,
    accountNumber: 13345083982
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