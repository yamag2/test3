require('dotenv').config();

const nodemailer = require('nodemailer');

exports.handler = function(event, context, callback) {
  const { name, email, message } = JSON.parse(event.body).payload.data

  console.log(user);

  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      type:"OAuth2",
      user:"Gmail��ID",
      clientId:"�擾����ClientID",
      clientSecret:"�擾�����R�[�h",
      refreshToken:"�i���t���b�V���g�[�N���j",
      accessToken: "�i�A�N�Z�X�g�[�N��)"   
    },
  });


  console.log(event.body);

  let mailOptions = {
    from: `"�\�����閼�O"<�g�p����gmail�A�h���X>`,
    to: `${email}`,
    subject: '���肪�Ƃ��������܂��B�t�H�[���𑗐M�������܂���',
    html: `${name}�l�@���b�Z�[�W�𑗐M���܂����B`,
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      callback(error);
    } else {
      callback(null, {
        statusCode: 200,
        body: 'Ok',
      });
    }
  });
};