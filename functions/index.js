const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');

admin.initializeApp();

const API_KEY = 'SG.tkUfLNEtTC6cONGe7qE0eA.wFMCGehztxxN2PAFdRvj4aQ7Zl';
const TEMPLATE_ID = functions.config().sendgrid.template;
sgMail.setApiKey(API_KEY);

require('dotenv').config();


let authData = nodemailer.createTransport({
    sercvice: 'gmail',
    auth: {
        user: 'elena.7moya@gmail.com',
        pass: 'Esetontoatun'
    }
});

exports.sendEmailNotification = functions.firestore.document('submissions/{docId}').onCreate((snap,context) => {
    const data = snap.data();

    const msg = {
        to: data.contactEmail,
        from: 'info@guacamayatours.com',
        templateId: TEMPLATE_ID,
        dynamic_template_data: {
            contactName: data.contactName,
            contactEmail: data.contactEmail,
            contactAsunto: data.contactAsunto,
            contactMessage: data.contactMessage,
        }
    }

    return sgMail.send(msg);

});