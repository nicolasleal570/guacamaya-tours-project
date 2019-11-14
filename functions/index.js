const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();

require('dotenv').config();


const { SENDER_EMAIL, SENDER_PASSWORD } = process.env;

exports.sendEmailNotification = functions.firestore.document('submissions/{docId}')
.onCreate((snap, context) => {

    let testAccount = nodemailer.createTestAccount();

    const data = snap.data();

    let authData = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
            user: testAccount.user,
            pass: testAccount.pass
        }
    });

    authData.sendMail({
        from: 'info@guacamaya.com',
        to: 'lealnicolas96@gmail.com',
        subject: 'Información desde GuacamayaTours',
        text: 'Hola mundo!',
        html: '<h1>Hola mundo!</h1>',
    }).then( res => console.log('Mensaje enviado correctamente') )
    .catch(err => console.log(err) );

});