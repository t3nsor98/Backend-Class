var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "geekdigbit@gmail.com",
    pass: "Seecon@1998",
  },
});

var mailOptions = {
  from: "geekdigbit@gmail.com",
  to: "digbijayalenka@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
