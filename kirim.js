import nodemailer from "nodemailer";

export const kirimEmail = dataEmail => {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: 'admiinganteng123@gmail.com',
            pass: 'qetr pzdx gjvz mwvr'
        }
    })
    return(
        transporter.sendMail(dataEmail)
        .then(info => console.log(`Email Terkirim: ${info.messageId}`))
        .catch(err => console.log(`Terjadi Kesalahan: ${err}`))
    )
}