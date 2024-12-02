const nodemailer = require("nodemailer");
const transport = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com", 
  port: 587,
  secure: false,
  auth: {
    user: process.env.NODE_CODE_SENDING_EMAIL_ADDRESS,
    pass: process.env.NODE_CODE_SENDING_EMAIL_PASSWORD
  },
  debug: true // tambahkan untuk cek error detail
});

module.exports = transport;
