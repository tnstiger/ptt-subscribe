var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport();

module.exports = function(title, link){
  transporter.sendMail({
      from: 'xxx@xxx.xxx',
      to: 'xxx@xxx.xxx',
      subject: 'New Codejob post',
      html: title + '<br><a href="'+ link +'">' + link + '</a>',
  });
};
