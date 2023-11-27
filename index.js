//TODO: Instanciar email
//TODO: Construir corpo do email
//TODO: Resgatar remetente via parâmetro
//TODO: Enviar email

import Mailer from './Mailer.js';

const to = process.argv[2];

const mailer = new Mailer();

mailer.message(to).catch(err => {
    console.error(err);
    process.exit();
});