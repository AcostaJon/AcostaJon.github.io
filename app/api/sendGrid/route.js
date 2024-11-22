// send grid mail object
const sgMail = require('@sendgrid/mail')

export async function POST(data) {

    let key = process.env.API_KEY

    // form data
    const formData = await data.json()

    try {
        sgMail.setApiKey(key);
        
        const msg = {
            to: 'jonacosta86@gmail.com',
            from: 'jonacosta86@gmail.com', // Use the email address or domain you verified above
            subject: `My Portfolio Form  - From: ${formData.name}`,
            html: `<strong>From: ${formData.name},<br> Email: ${formData.email},<br> Message: ${formData.message}</strong>`,
        };

        await sgMail.send(msg);

    } catch (error) {
        console.error(error);
    }

    return Response.json('success')

}