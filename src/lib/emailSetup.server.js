// @ts-nocheck

import nodemailer from "nodemailer";

let transporter = nodemailer.createTransport({
  // service: "Outlook365",
  host: "smtp.office365.com",
  port: 587,
  secure: false,
  auth: {
    user: 'hr@shuert.com',
    pass: 'FallTurkey2023!',
  }
  // tls: {
  //   ciphers: "SSLv3",
  //   rejectUnauthorized: false
  // }

});

transporter.verify(function (error, success) {
  if (error) {
    console.error(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

export default transporter;