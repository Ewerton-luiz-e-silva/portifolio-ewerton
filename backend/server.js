const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware CORS - Permite requisições de qualquer origem
app.use(cors({
    origin: 'https://portifolio-ewerton.vercel.app', // Permite apenas seu front-end
    methods: ['POST', 'OPTIONS'], // Permite apenas os métodos necessários
    allowedHeaders: ['Content-Type']
}));

// Tratamento para requisições OPTIONS (Preflight)
app.options('/submit', cors());

// Middleware para interpretar JSON e dados de formulários
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configuração do Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Rota para receber os dados do formulário
app.post('/submit', (req, res) => {
    const { nome, telefone, email, mensagem } = req.body;

    // Validar os dados do formulário
    if (!nome || !telefone || !email || !mensagem) {
        return res.status(400).json({ success: false, message: 'Todos os campos são obrigatórios.' });
    }

    // Configuração do e-mail
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: 'Novo contato do formulário',
        html: `
            <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 10px; overflow: hidden;">
                <div style="background-color: #ff9f43; padding: 20px; text-align: center; color: white;">
                    <h1 style="margin: 0; font-size: 24px;">Novo Contato Recebido</h1>
                </div>
                <div style="padding: 20px;">
                    <p style="font-size: 16px; line-height: 1.5;"><strong>Nome:</strong> ${nome}</p>
                    <p style="font-size: 16px; line-height: 1.5;"><strong>Telefone:</strong> ${telefone}</p>
                    <p style="font-size: 16px; line-height: 1.5;"><strong>Email:</strong> ${email}</p>
                    <p style="font-size: 16px; line-height: 1.5;"><strong>Mensagem:</strong></p>
                    <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #ff9f43; margin-top: 10px;">
                        <p style="margin: 0; font-size: 16px; line-height: 1.5;">${mensagem}</p>
                    </div>
                </div>
                <div style="background-color: #ff9f43; padding: 10px; text-align: center; color: white; font-size: 14px;">
                    <p style="margin: 0;">Este é um e-mail automático, por favor não responda diretamente.</p>
                </div>
            </div>
        `
    };

    // Enviar o email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Erro ao enviar o formulário:', error);
            return res.status(500).json({ success: false, message: 'Erro ao enviar o formulário.' });
        } else {
            console.log('Formulário enviado:', info.response);
            return res.json({ success: true, message: 'Formulário recebido e email enviado com sucesso!' });
        }
    });
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta  ${port}`);
});