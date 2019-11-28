const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");


admin.initializeApp();
require('dotenv').config();

let authData = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'guacamayatours1999@gmail.com',
        pass: 'quewebo2'
    }
});

exports.sendEmail = functions.firestore.document('submissions/{docId}').onCreate((snap, ctx) => {

    const data = snap.data();

    authData.sendMail({
        from: 'info@guacamayatours.com',
        to: data.contactEmail,
        subject: 'Un cliente de Guacamaya Tours te quiere contactar',
        text: data.contactName + data.contactAsunto + data.contactMessage,
        html: data.contactName + data.contactAsunto + data.contactMessage,
    }).then(res => console.log('mandaste esa mierda')).catch(
        err=>console.log(err)
    );
})
