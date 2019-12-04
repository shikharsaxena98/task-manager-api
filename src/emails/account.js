const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "chauhanshubham089@gmail.com",
    subject: "Thanks for joining in!",
    text: `Hello ${name}, it's so nice to see you around. Let us know how you feel here.`
  });
};
const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "chauhanshubham089@gmail.com",
    subject: "Hope to see you soon!",
    text: `Hey ${name}, leaving so soon? Well let us know if we have something to improve.`
  });
};
module.exports = {
  sendWelcomeEmail,
  sendCancelEmail
};
