const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// ✅ Corrigindo o CORS
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Permite qualquer origem
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    
    // Tratando preflight request (OPTIONS)
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    
    next();
});

// ✅ Body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// 🔹 Sua rota POST
app.post('/submit', (req, res) => {
    const { nome, telefone, email, mensagem } = req.body;
    if (!nome || !telefone || !email || !mensagem) {
        return res.status(400).json({ success: false, message: 'Todos os campos são obrigatórios.' });
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: 'Novo contato do formulário',
        text: `Nome: ${nome}\nTelefone: ${telefone}\nEmail: ${email}\nMensagem: ${mensagem}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Erro ao enviar e-mail:', error);
            return res.status(500).json({ success: false, message: 'Erro ao enviar o formulário.' });
        } else {
            console.log('Email enviado:', info.response);
            return res.json({ success: true, message: 'Formulário enviado com sucesso!' });
        }
    });
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});