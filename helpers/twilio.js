const twilioParams = {
  authToken: process.env.TWILIO_AUTH_TOKEN,
  accountSid: process.env.TWILIO_ACCOUNT_SID,
  accountNumber: process.env.TWILIO_ACCOUNT_NUMBER
};

// We need 2 function, one for sending text message and one for sending order confirmation
const client = require('twilio')(twilioParams.accountSid, twilioParams.authToken);

const sendTextMessage = (message, to) => {

  return client.messages.create({
    body: message,
    from: twilioParams.accountNumber,
    to: to
  })
    .then(res => {
      console.log('##2 Res is ', res);
      return res;
    })
    .catch(err => {
      console.log(err)
      return err;
    });
}


const sendOrderConfirmation = (order) => { // SMS to customer
  const messageBody = `Your order is confirmed. Your order number is ${order.id}. It will be ready soon.`;
  return client.messages.create({
    body: messageBody,
    from: twilioParams.accountNumber,
    to: order.phone_number
  })
    .then(res => {
      return res;
    })
    .catch(err => console.log(err));
}
module.exports = { sendTextMessage, sendOrderConfirmation };