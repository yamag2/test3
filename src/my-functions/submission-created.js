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
      user:"GmailのID",
      clientId:"取得したClientID",
      clientSecret:"取得したコード",
      refreshToken:"（リフレッシュトークン）",
      accessToken: "（アクセストークン)"   
    },
  });


  console.log(event.body);

  let mailOptions = {
    from: `"表示する名前"<使用するgmailアドレス>`,
    to: `${email}`,
    subject: 'ありがとうございます。フォームを送信いたしました',
    html: `${name}様　メッセージを送信しました。`,
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