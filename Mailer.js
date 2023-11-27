import nodemailer from "nodemailer";
import "dotenv/config";


class Mailer {
    constructor(){
        this.configs = {
            secure: true,
            service: process.env.SERVICE,
            port: process.env.EMAIL_PORT,
            auth: {
                user: process.env.AUTH_USER,
                pass: process.env.AUTH_PASSWORD
            },
            logger: true,
        }
        console.log(this.configs)
    }

    async message(dest){
        // cria um objeto transporter, contendo as propriedades do nodemailer
        console.log("- Iniciando disparo de email")
        let transporter = nodemailer.createTransport(this.configs)

        const body = {
            from: process.env.AUTH_USER,
            to: dest,
            subject: "Email enviado pelo nodeMailer",
            text: "Teste de envio de email!",
        }

        transporter.sendMail(body, (err, info) => {
            if(err) console.error(err)

            console.log('Message sent successfully as %s', info.messageId)
        })
    }
}
export default Mailer;