var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport();

module.exports = function(title, link){
  transporter.sendMail({
      from: 'tnstiger@gmail.com',
      to: 'tnstiger@gmail.com',
      subject: 'New Codejob post',
      html: title + '<br><a href="'+ link +'">' + link + '</a>',
  });
};
