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

exports.sendReservation = functions.firestore.document('reserva/{docId}').onCreate((snap, ctx) => {

  const data = snap.data();

  var texto = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
  <html data-editor-version="2" class="sg-campaigns" xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" /><!--[if !mso]><!-->
      <meta http-equiv="X-UA-Compatible" content="IE=Edge" /><!--<![endif]-->
      <!--[if (gte mso 9)|(IE)]>
      <xml>
      <o:OfficeDocumentSettings>
      <o:AllowPNG/>
      <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
      </xml>
      <![endif]-->
      <!--[if (gte mso 9)|(IE)]>
      <style type="text/css">
        body {width: 600px;margin: 0 auto;}
        table {border-collapse: collapse;}
        table, td {mso-table-lspace: 0pt;mso-table-rspace: 0pt;}
        img {-ms-interpolation-mode: bicubic;}
      </style>
      <![endif]-->
  
      <style type="text/css">
        body, p, div {
          font-family: arial;
          font-size: 14px;
        }
        body {
          color: #000000;
        }
        body a {
          color: #d73925;
          text-decoration: none;
        }
        p { margin: 0; padding: 0; }
        table.wrapper {
          width:100% !important;
          table-layout: fixed;
          -webkit-font-smoothing: antialiased;
          -webkit-text-size-adjust: 100%;
          -moz-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
        }
        img.max-width {
          max-width: 100% !important;
        }
        .column.of-2 {
          width: 50%;
        }
        .column.of-3 {
          width: 33.333%;
        }
        .column.of-4 {
          width: 25%;
        }
        @media screen and (max-width:480px) {
          .preheader .rightColumnContent,
          .footer .rightColumnContent {
              text-align: left !important;
          }
          .preheader .rightColumnContent div,
          .preheader .rightColumnContent span,
          .footer .rightColumnContent div,
          .footer .rightColumnContent span {
            text-align: left !important;
          }
          .preheader .rightColumnContent,
          .preheader .leftColumnContent {
            font-size: 80% !important;
            padding: 5px 0;
          }
          table.wrapper-mobile {
            width: 100% !important;
            table-layout: fixed;
          }
          img.max-width {
            height: auto !important;
            max-width: 480px !important;
          }
          a.bulletproof-button {
            display: block !important;
            width: auto !important;
            font-size: 80%;
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
          .columns {
            width: 100% !important;
          }
          .column {
            display: block !important;
            width: 100% !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
          }
        }
      </style>
      <!--user entered Head Start-->
      
       <!--End Head user entered-->
    </head>
    <body>
      <center class="wrapper" data-link-color="#d73925" data-body-style="font-size: 14px; font-family: arial; color: #000000; background-color: #262626;">
        <div class="webkit">
          <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#262626">
            <tr>
              <td valign="top" bgcolor="#262626" width="100%">
                <table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td width="100%">
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                        <tr>
                          <td>
                            <!--[if mso]>
                            <center>
                            <table><tr><td width="600">
                            <![endif]-->
                            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width: 100%; max-width:600px;" align="center">
                              <tr>
                                <td role="modules-container" style="padding: 0px 0px 0px 0px; color: #000000; text-align: left;" bgcolor="#ffffff" width="100%" align="left">
                                  
      <table class="module preheader preheader-hide" role="module" data-type="preheader" border="0" cellpadding="0" cellspacing="0" width="100%"
             style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;">
        <tr>
          <td role="module-content">
            <p>Itinerario Guacamaya Tours</p>
          </td>
        </tr>
      </table>
    
      <table  border="0"
              cellpadding="0"
              cellspacing="0"
              align="center"
              width="100%"
              role="module"
              data-type="columns"
              data-version="2"
              style="padding:0px 0px 0px 0px;"
              bgcolor="">
        <tr role='module-content'>
          <td height="100%" valign="top">
              <!--[if (gte mso 9)|(IE)]>
                <center>
                  <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-spacing:0;border-collapse:collapse;table-layout: fixed;" >
                    <tr>
              <![endif]-->
            
      <!--[if (gte mso 9)|(IE)]>
        <td width="300.000px" valign="top" style="padding: 0px 0px 0px 0px;border-collapse: collapse;" >
      <![endif]-->
  
      <table  width="300.000"
              style="width:300.000px;border-spacing:0;border-collapse:collapse;margin:0px 0px 0px 0px;"
              cellpadding="0"
              cellspacing="0"
              align="left"
              border="0"
              bgcolor=""
              class="column column-0 of-2
                    empty"
        >
        <tr>
          <td style="padding:0px;margin:0px;border-spacing:0;">
              
      <table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;">
        <tr>
          <td style="font-size:6px;line-height:10px;padding:0px 0px 0px 0px;" valign="top" align="center">
            <img class="max-width" border="0" style="display:block;color:#000000;text-decoration:none;font-family:Helvetica, arial, sans-serif;font-size:16px;max-width:50% !important;width:50%;height:auto !important;" src="https://marketing-image-production.s3.amazonaws.com/uploads/a0b85843186a723bfc0e1a1006dfa58e357972838aac019c12ab2b7bf7219a1bbe33f593c5a6ab086ea29da64fbfbccac58d59751f9e5f49b7197abab76d0738.jpg" alt="" width="150">
          </td>
        </tr>
      </table>
    
          </td>
        </tr>
      </table>
  
      <!--[if (gte mso 9)|(IE)]>
        </td>
      <![endif]-->
      <!--[if (gte mso 9)|(IE)]>
        <td width="300.000px" valign="top" style="padding: 0px 0px 0px 0px;border-collapse: collapse;" >
      <![endif]-->
  
      <table  width="300.000"
              style="width:300.000px;border-spacing:0;border-collapse:collapse;margin:0px 0px 0px 0px;"
              cellpadding="0"
              cellspacing="0"
              align="left"
              border="0"
              bgcolor=""
              class="column column-1 of-2
                    empty"
        >
        <tr>
          <td style="padding:0px;margin:0px;border-spacing:0;">
              
      <table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;">
        <tr>
          <td style="padding:18px 0px 18px 0px;line-height:22px;text-align:inherit;"
              height="100%"
              valign="top"
              bgcolor="">
              <div>&nbsp;</div>
  
  <div>Reservaci&oacute;n # &{this.data.id}</div>
  
  <div><span style="color: rgb(0, 0, 0); font-family: arial; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; text-align: center;">Revisalo&nbsp;</span><a href="https://guacamaya-tours-a3903.firebaseapp.com/itinerario/ver" style="background-color: rgb(255, 255, 255); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; font-family: arial; font-size: 14px; text-align: center;">aqui</a><span style="color: rgb(0, 0, 0); font-family: arial; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; text-align: center;">&nbsp;con el numero</span></div>
  
          </td>
        </tr>
      </table>
    
          </td>
        </tr>
      </table>
  
      <!--[if (gte mso 9)|(IE)]>
        </td>
      <![endif]-->
              <!--[if (gte mso 9)|(IE)]>
                    <tr>
                  </table>
                </center>
              <![endif]-->
          </td>
        </tr>
      </table>
    
      <table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;">
        <tr>
          <td style="padding:18px 0px 18px 0px;line-height:22px;text-align:inherit;"
              height="100%"
              valign="top"
              bgcolor="">
              <div>&nbsp; &nbsp; Este es tu itinerario:</div>
  
  <div>&nbsp; &nbsp; & {this.data.hotel.name} &nbsp;- &nbsp;destinoName&nbsp;</div>
  
  <div>&nbsp; &nbsp; numHab&nbsp;</div>
  
  <div>&nbsp; &nbsp; checkInDay&nbsp;/&nbsp;checkInMonth&nbsp;/ checkInYear&nbsp;</div>
  
  <div><span style="color: rgb(0, 0, 0); font-family: arial; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400;">&nbsp; &nbsp; checkOutDay</span><span style="color: rgb(0, 0, 0); font-family: arial; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400;">&nbsp;/ checkOutMonth&nbsp;/&nbsp;checkOutYear</span></div>
  
  <div>&nbsp;</div>
  
  <div><span style="color: rgb(0, 0, 0); font-family: arial; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400;">&nbsp; &nbsp; &nbsp;total</span></div>
  
          </td>
        </tr>
      </table>
    
      <table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;">
        <tr>
          <td style="background-color:#d73925;padding:18px 0px 18px 0px;line-height:22px;text-align:inherit;"
              height="100%"
              valign="top"
              bgcolor="#d73925">
              <div style="text-align: center;"><span style="color:#FFFFFF;">Guacamaya Tours</span></div>
  
          </td>
        </tr>
      </table>
    
                                </td>
                              </tr>
                            </table>
                            <!--[if mso]>
                            </td></tr></table>
                            </center>
                            <![endif]-->
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
      </center>
    </body>
  </html>`;

  authData.sendMail({
      from: 'info@guacamayatours.com',
      to: data.contactEmail,
      subject: 'Un cliente de Guacamaya Tours te quiere contactar',
      text: texto,
      html: texto,
  }).then(res => console.log('mandaste esa mierda')).catch(
      err=>console.log(err)
  );
})

exports.sendEmail = functions.firestore.document('submissions/{docId}').onCreate((snap, ctx) => {

    const data = snap.data();

    var texto = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
    <html data-editor-version="2" class="sg-campaigns" xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" /><!--[if !mso]><!-->
        <meta http-equiv="X-UA-Compatible" content="IE=Edge" /><!--<![endif]-->
        <!--[if (gte mso 9)|(IE)]>
        <xml>
        <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
        <!--[if (gte mso 9)|(IE)]>
        <style type="text/css">
          body {width: 600px;margin: 0 auto;}
          table {border-collapse: collapse;}
          table, td {mso-table-lspace: 0pt;mso-table-rspace: 0pt;}
          img {-ms-interpolation-mode: bicubic;}
        </style>
        <![endif]-->
    
        <style type="text/css">
          body, p, div {
            font-family: arial;
            font-size: 14px;
          }
          body {
            color: #000000;
          }
          body a {
            color: #1188E6;
            text-decoration: none;
          }
          p { margin: 0; padding: 0; }
          table.wrapper {
            width:100% !important;
            table-layout: fixed;
            -webkit-font-smoothing: antialiased;
            -webkit-text-size-adjust: 100%;
            -moz-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
          }
          img.max-width {
            max-width: 100% !important;
          }
          .column.of-2 {
            width: 50%;
          }
          .column.of-3 {
            width: 33.333%;
          }
          .column.of-4 {
            width: 25%;
          }
          @media screen and (max-width:480px) {
            .preheader .rightColumnContent,
            .footer .rightColumnContent {
                text-align: left !important;
            }
            .preheader .rightColumnContent div,
            .preheader .rightColumnContent span,
            .footer .rightColumnContent div,
            .footer .rightColumnContent span {
              text-align: left !important;
            }
            .preheader .rightColumnContent,
            .preheader .leftColumnContent {
              font-size: 80% !important;
              padding: 5px 0;
            }
            table.wrapper-mobile {
              width: 100% !important;
              table-layout: fixed;
            }
            img.max-width {
              height: auto !important;
              max-width: 480px !important;
            }
            a.bulletproof-button {
              display: block !important;
              width: auto !important;
              font-size: 80%;
              padding-left: 0 !important;
              padding-right: 0 !important;
            }
            .columns {
              width: 100% !important;
            }
            .column {
              display: block !important;
              width: 100% !important;
              padding-left: 0 !important;
              padding-right: 0 !important;
              margin-left: 0 !important;
              margin-right: 0 !important;
            }
          }
        </style>
        <!--user entered Head Start-->
        
         <!--End Head user entered-->
      </head>
      <body>
        <center class="wrapper" data-link-color="#1188E6" data-body-style="font-size: 14px; font-family: arial; color: #000000; background-color: #262626;">
          <div class="webkit">
            <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#262626">
              <tr>
                <td valign="top" bgcolor="#262626" width="100%">
                  <table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td width="100%">
                        <table width="100%" cellpadding="0" cellspacing="0" border="0">
                          <tr>
                            <td>
                              <!--[if mso]>
                              <center>
                              <table><tr><td width="600">
                              <![endif]-->
                              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width: 100%; max-width:600px;" align="center">
                                <tr>
                                  <td role="modules-container" style="padding: 0px 0px 0px 0px; color: #000000; text-align: left;" bgcolor="#ffffff" width="100%" align="left">
                                    
        <table class="module preheader preheader-hide" role="module" data-type="preheader" border="0" cellpadding="0" cellspacing="0" width="100%"
               style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;">
          <tr>
            <td role="module-content">
              <p>Un cliente te quiere contactar</p>
            </td>
          </tr>
        </table>
      
        <table class="module"
               role="module"
               data-type="divider"
               border="0"
               cellpadding="0"
               cellspacing="0"
               width="100%"
               style="table-layout: fixed;">
          <tr>
            <td style="padding:0px 0px 0px 0px;"
                role="module-content"
                height="100%"
                valign="top"
                bgcolor="">
              <table border="0"
                     cellpadding="0"
                     cellspacing="0"
                     align="center"
                     width="100%"
                     height="10px"
                     style="line-height:10px; font-size:10px;">
                <tr>
                  <td
                    style="padding: 0px 0px 10px 0px;"
                    bgcolor="#262626"></td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      
        <table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;">
          <tr>
            <td style="font-size:6px;line-height:10px;padding:0px 0px 0px 0px;" valign="top" align="center">
              <img class="max-width" border="0" style="display:block;color:#000000;text-decoration:none;font-family:Helvetica, arial, sans-serif;font-size:16px;max-width:30% !important;width:30%;height:auto !important;" src="https://marketing-image-production.s3.amazonaws.com/uploads/a0b85843186a723bfc0e1a1006dfa58e357972838aac019c12ab2b7bf7219a1bbe33f593c5a6ab086ea29da64fbfbccac58d59751f9e5f49b7197abab76d0738.jpg" alt="" width="180">
            </td>
          </tr>
        </table>
      
        <table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;">
          <tr>
            <td style="padding:18px 0px 18px 0px;line-height:22px;text-align:inherit;"
                height="100%"
                valign="top"
                bgcolor="">
                <div style="text-align: center;"><span style="font-size:36px;"><span style="font-family:impact,sans-serif;">GUACAMAYA TOURS</span></span></div>
            </td>
          </tr>
        </table>
      
        <table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;">
          <tr>
            <td style="padding:18px 0px 18px 0px;line-height:22px;text-align:inherit;"
                height="100%"
                valign="top"
                bgcolor="">
                <div style="text-align: center;"><span style="font-family:tahoma,geneva,sans-serif;">Un cliente de Guacamaya Tours te quiere contactar a través de la página web. Dejo su información de contacto y un mensaje:&nbsp;</span></div>
            </td>
          </tr>
        </table>
      
        <table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;">
          <tr>
            <td style="padding:18px 0px 18px 0px;line-height:22px;text-align:inherit;"
                height="100%"
                valign="top"
                bgcolor="">
                <div style="text-align: center;"><span style="font-family:tahoma,geneva,sans-serif;">Nombre: ${data.contactName}</span></div>
    
    <div style="text-align: center;"><span style="font-family:tahoma,geneva,sans-serif;">Email: ${data.contactEmail}</span></div>
    
    <div style="text-align: center;"><span style="font-family:tahoma,geneva,sans-serif;">Asunto: ${data.contactAsunto}&nbsp;</span></div>
    
    <div style="text-align: center;"><span style="font-family:tahoma,geneva,sans-serif;">Mensaje: ${data.contactMessage}</span></div>
            </td>
          </tr>
        </table>
      
        <table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;">
          <tr>
            <td style="background-color:#ff5252;padding:18px 0px 18px 0px;line-height:22px;text-align:inherit;"
                height="100%"
                valign="top"
                bgcolor="#ff5252">
                <div style="text-align: center;"><span style="font-family:tahoma,geneva,sans-serif;"><span style="color:#FFFFFF;"><span style="font-size:9px;">Administrador de Guacamaya Tours</span></span></span></div>
            </td>
          </tr>
        </table>
      
        <table class="module"
               role="module"
               data-type="divider"
               border="0"
               cellpadding="0"
               cellspacing="0"
               width="100%"
               style="table-layout: fixed;">
          <tr>
            <td style="padding:0px 0px 0px 0px;"
                role="module-content"
                height="100%"
                valign="top"
                bgcolor="">
              <table border="0"
                     cellpadding="0"
                     cellspacing="0"
                     align="center"
                     width="100%"
                     height="10px"
                     style="line-height:10px; font-size:10px;">
                <tr>
                  <td
                    style="padding: 0px 0px 10px 0px;"
                    bgcolor="#262626"></td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      
                                  </td>
                                </tr>
                              </table>
                              <!--[if mso]>
                              </td></tr></table>
                              </center>
                              <![endif]-->
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </div>
        </center>
      </body>
    </html>`;

    authData.sendMail({
        from: 'info@guacamayatours.com',
        to: data.contactEmail,
        subject: 'Un cliente de Guacamaya Tours te quiere contactar',
        text: texto,
        html: texto,
    }).then(res => console.log('mandaste esa mierda')).catch(
        err=>console.log(err)
    );
})
