const nodemailer = require("nodemailer");
const { config } = require("dotenv");
config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "013vishalchoudhary@gmail.com",
    pass: "poqutqiohfvppbuc",
  },
});

const sendEmail = (data) => {
  const mailOptions = {
    from: "013vishalchoudhary@gmail.com",
    to: data.email,
    subject: "confirmation email",
    text: `Hello ${data.name}, this is a confirmation email to let you know that your information is collected. Your phone number is ${data.number}`,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("Error in sending email  " + error);
      return true;
    } else {
      console.log("Email sent: " + info.response);
      return false;
    }
  });
};

module.exports = sendEmail;
