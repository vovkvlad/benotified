let EmailSender = require('./mail-service');

let userOptions = {
    username: '',
    password: ''
};

let emailSender = new EmailSender(userOptions);

let email = {
    from: emailSender.username, // sender address
    to: emailSender.username, // list of receivers
    subject: 'Email Test', // Subject line
    html: '<b>Hello world ✔</b>' //, // plaintext body
    // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
};

emailSender.send(email, function (error, info) {
    if (error) {
        debugger;
        console.log(error);
    } else {
        debugger;
        console.log(info);
    }
});