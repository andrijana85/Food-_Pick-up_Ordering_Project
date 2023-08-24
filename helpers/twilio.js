const twilioParams = {
    authToken: process.env.TWILIO_AUTH_TOKEN,
    accountSid: process.env.TWILIO_ACCOUNT_SID,
    accountNumber: process.env.TWILIO_ACCOUNT_NUMBER
};

// We need 2 function, one for sending text message and one for sending order confirmation
const client = require('twilio')(twilioParams.accountSid, twilioParams.authToken);

const sendTextMessage = (messageBody, to) => { // SMS to restaurant
  //const messageBody = `You have a new order. Order number is ${order.id}.`;
  return client.messages.create({
    body: messageBody, //`You have a new order. Order number is ${order.id}.`
    from: twilioParams.accountNumber,
    to: to
  })
    .then(res => {
      return res;
    })
        .then(res => { return res })
        .catch(err => console.log(err));
}


const sendOrderConfirmation = (order) => { // SMS to customer
  const messageBody = `Your order is confirmed. Your order number is ${order.id}. It will be ready in ${order.preparation_time} minutes.`;
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