const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

const sendgrid = require('sendgrid')

admin.initializeApp();

const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG);
//const SENDGRID_API_KEY = firebaseConfig.sendgrid.key;
const SENDGRID_API_KEY = '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';

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(SENDGRID_API_KEY);

require('dotenv').config();


const { SENDER_EMAIL, SENDER_PASSWORD } = process.env;
exports.sendEmail = functions.https.onRequest((req, res) => {
    req.url();
});

exports.firestoreEmail = functions.firestore.document('contact/{contactId}').onCreate( event => {

        const contactId = event.params.contactId;

        const db = admin.firestore()

        return db.collection('contact').doc(contactId)
                 .get()
                 .then(doc => {

                    const contact = doc.data()

                    const msg = {
                        to: contact.contactEmail,
                        from: 'guacamayatours@admin.com',
                        subject:  'Contacto Nuevo',

                        // custom template
                        templateId: 'd-08736a1a11364266b6e4c5565316e595',
                        substitutionWrappers: ['{{', '}}'],
                        substitutions: {
                          contactName: contact.contactName,
                          contactEmail: contact.contactEmail,
                          contactAsunto: contact.contactAsunto,
                          contactMessage: contact.contactMessage,
                        }
                    };

                    return sgMail.send(msg)
                })
                .then(() => console.log('se mando el fucking email') )
                .catch(err => console.log(err) )
                     

});

