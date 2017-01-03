let nodemailer = require('nodemailer');

class EmailSender {
    constructor (userOptions) {
        const {username = null, password = null} = userOptions;
        try {
            // check if all required data is passed
            if (!username || !password) {
                throw new Error('username or password is not passed');
            }

            this.username = username;
            this.password = password;

            this.transporter = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                    user: username,
                    pass: password
                }
            });
        } catch (exception) {
            console.log(exception.message);
            console.log(exception.stack);
        }
    }

    send(messageOptions, callback) {
        this.transporter.sendMail(messageOptions, callback);
    }
}

module.exports = EmailSender;