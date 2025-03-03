const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Configuração do CORS
app.use(cors({
    origin: process.env.FRONTEND_URL || '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Verifica variáveis de ambiente
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('Erro: Variáveis de ambiente EMAIL_USER e EMAIL_PASS são obrigatórias.');
    process.exit(1);
}

// Configuração do Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Testa a conexão do Nodemailer
transporter.verify((error) => {
    if (error) {
        console.error('Erro ao verificar transporte do Nodemailer:', error);
        process.exit(1);
    } else {
        console.log('Transporte do Nodemailer configurado com sucesso!');
    }
});

// Simulação de banco de dados em memória
let recomendacoes = [];

// Rota para receber dados do formulário de contato
app.post('/submit', (req, res) => {
    const { nome, telefone, email, mensagem } = req.body;

    if (!nome || !telefone || !email || !mensagem) {
        return res.status(400).json({ success: false, message: 'Todos os campos são obrigatórios.' });
    }

    const adminMailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: 'Novo contato do formulário',
        html: `
            <div style="background-color: #1a1a1a; padding: 20px; font-family: Arial, sans-serif; color: #ffffff;">
                <div style="max-width: 600px; margin: 0 auto; background-color: #2a2a2a; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);">
                    <h1 style="color: #4CAF50; text-align: center; font-size: 24px; margin-bottom: 20px;">Novo Contato Recebido</h1>
                    <div style="background-color: #333; padding: 15px; border-radius: 5px; margin-bottom: 15px;">
                        <p style="margin: 0; color: #ffffff;"><strong>Nome:</strong> ${nome}</p>
                    </div>
                    <div style="background-color: #333; padding: 15px; border-radius: 5px; margin-bottom: 15px;">
                        <p style="margin: 0; color: #ffffff;"><strong>Telefone:</strong> ${telefone}</p>
                    </div>
                    <div style="background-color: #333; padding: 15px; border-radius: 5px; margin-bottom: 15px;">
                        <p style="margin: 0; color: #ffffff;"><strong>Email:</strong> ${email}</p>
                    </div>
                    <div style="background-color: #333; padding: 15px; border-radius: 5px; margin-bottom: 15px;">
                        <p style="margin: 0; color: #ffffff;"><strong>Mensagem:</strong> ${mensagem}</p>
                    </div>
                </div>
            </div>
        `
    };
    
    const userMailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Obrigado pelo contato!',
        html: `
            <div style="background-color: #1a1a1a; padding: 20px; font-family: Arial, sans-serif; color: #ffffff;">
                <div style="max-width: 600px; margin: 0 auto; background-color: #2a2a2a; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);">
                    <h1 style="color: #4CAF50; text-align: center; font-size: 24px; margin-bottom: 20px;">Obrigado pelo contato!</h1>
                    <p style="text-align: center; color: #ffffff;">Olá, ${nome}, sua mensagem foi recebida com sucesso.</p>
                    <p style="text-align: center; color: #ffffff; font-size: 14px;">Em breve entraremos em contato com você.</p>
                </div>
            </div>
        `
    };

    transporter.sendMail(adminMailOptions, (adminError) => {
        if (adminError) {
            console.error('Erro ao enviar e-mail para o administrador:', adminError);
            return res.status(500).json({ success: false, message: 'Erro ao enviar o formulário.' });
        }

        transporter.sendMail(userMailOptions, (userError) => {
            if (userError) {
                console.error('Erro ao enviar e-mail para o usuário:', userError);
                return res.status(500).json({ success: false, message: 'Erro ao enviar o e-mail de confirmação.' });
            }
            return res.json({ success: true, message: 'Formulário enviado com sucesso!' });
        });
    });
});

// Rota para receber uma recomendação
app.post('/recomendacoes', (req, res) => {
    const { nome, email, texto } = req.body;

    if (!nome || !email || !texto) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
    }

    const novaRecomendacao = { nome, email, texto, aprovado: false };
    recomendacoes.push(novaRecomendacao);

    const adminMailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: 'Nova recomendação recebida',
        html: `
            <div style="background-color: #1a1a1a; padding: 20px; font-family: Arial, sans-serif; color: #ffffff;">
                <div style="max-width: 600px; margin: 0 auto; background-color: #2a2a2a; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);">
                    <h1 style="color: #4CAF50; text-align: center; font-size: 24px; margin-bottom: 20px;">Nova Recomendação Recebida</h1>
                    <div style="background-color: #333; padding: 15px; border-radius: 5px; margin-bottom: 15px;">
                        <p style="margin: 0; color: #ffffff;"><strong>Nome:</strong> ${nome}</p>
                    </div>
                    <div style="background-color: #333; padding: 15px; border-radius: 5px; margin-bottom: 15px;">
                        <p style="margin: 0; color: #ffffff;"><strong>E-mail:</strong> ${email}</p>
                    </div>
                    <div style="background-color: #333; padding: 15px; border-radius: 5px; margin-bottom: 15px;">
                        <p style="margin: 0; color: #ffffff;"><strong>Texto:</strong> ${texto}</p>
                    </div>
                    <div style="text-align: center; margin-top: 20px;">
                        <a href="https://server-rho-drab-55.vercel.app/aprovar?email=${encodeURIComponent(email)}&texto=${encodeURIComponent(texto)}" style="background-color: #4CAF50; color: #ffffff; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-right: 10px;">Aprovar Recomendação</a>
                        <a href="https://server-rho-drab-55.vercel.app/rejeitar?email=${encodeURIComponent(email)}&texto=${encodeURIComponent(texto)}" style="background-color: #F44336; color: #ffffff; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Rejeitar Recomendação</a>
                    </div>
                </div>
            </div>
        `
    };

    const userMailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Obrigado pela sua recomendação!',
        html: `
            <div style="background-color: #1a1a1a; padding: 20px; font-family: Arial, sans-serif; color: #ffffff;">
                <div style="max-width: 600px; margin: 0 auto; background-color: #2a2a2a; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);">
                    <h1 style="color: #4CAF50; text-align: center; font-size: 24px; margin-bottom: 20px;">Obrigado pela sua recomendação!</h1>
                    <p style="text-align: center; color: #ffffff;">Olá, ${nome},</p>
                    <p style="text-align: center; color: #ffffff;">Recebemos sua recomendação com sucesso! Agradecemos imensamente por compartilhar sua opinião conosco.</p>
                    <p style="text-align: center; color: #ffffff;">Assim que sua recomendação for revisada, entraremos em contato novamente.</p>
                </div>
            </div>
        `
    };

    transporter.sendMail(adminMailOptions, (adminError) => {
        if (adminError) {
            console.error('Erro ao enviar e-mail para o administrador:', adminError);
            return res.status(500).json({ error: 'Erro ao enviar e-mail para o administrador.' });
        }

        transporter.sendMail(userMailOptions, (userError) => {
            if (userError) {
                console.error('Erro ao enviar e-mail para o usuário:', userError);
                return res.status(500).json({ error: 'Erro ao enviar e-mail de agradecimento para o usuário.' });
            }
            res.status(200).json({ message: 'Recomendação enviada para aprovação' });
        });
    });
});

// Rota para listar recomendações aprovadas
app.get('/recomendacoes', (req, res) => {
    res.json(recomendacoes.filter((rec) => rec.aprovado));
});

app.get('/aprovar', (req, res) => {
    const { email, texto } = req.query;
    const recomendacao = recomendacoes.find((rec) => rec.email === email && rec.texto === texto);

    if (recomendacao) {
        recomendacao.aprovado = true;
        res.send(`
            <html>
                <head>
                    <style>
                        body {
                            background-color: #000000;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            height: 100vh;
                            margin: 0;
                            font-family: Arial, sans-serif;
                            color: #ffffff;
                        }
                        .message {
                            text-align: center;
                            background-color: #1a1a1a;
                            padding: 20px;
                            border-radius: 10px;
                            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                        }
                        h1 {
                            color: #4CAF50;
                            font-size: 24px;
                            margin-bottom: 10px;
                        }
                        p {
                            color: #ffffff;
                            font-size: 16px;
                        }
                    </style>
                </head>
                <body>
                    <div class="message">
                        <h1>Recomendação Aprovada com Sucesso!</h1>
                        <p>A recomendação de <strong>${email}</strong> foi aprovada.</p>
                    </div>
                </body>
            </html>
        `);
    } else {
        res.status(404).send(`
            <html>
                <head>
                    <style>
                        body {
                            background-color: #000000;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            height: 100vh;
                            margin: 0;
                            font-family: Arial, sans-serif;
                            color: #ffffff;
                        }
                        .message {
                            text-align: center;
                            background-color: #1a1a1a;
                            padding: 20px;
                            border-radius: 10px;
                            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                        }
                        h1 {
                            color: #F44336;
                            font-size: 24px;
                            margin-bottom: 10px;
                        }
                        p {
                            color: #ffffff;
                            font-size: 16px;
                        }
                    </style>
                </head>
                <body>
                    <div class="message">
                        <h1>Recomendação Não Encontrada</h1>
                        <p>Não foi possível encontrar a recomendação.</p>
                    </div>
                </body>
            </html>
        `);
    }
});

app.get('/rejeitar', (req, res) => {
    const { email, texto } = req.query;
    recomendacoes = recomendacoes.filter((rec) => !(rec.email === email && rec.texto === texto));
    res.send(`
        <html>
            <head>
                <style>
                    body {
                        background-color: #000000;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        margin: 0;
                        font-family: Arial, sans-serif;
                        color: #ffffff;
                    }
                    .message {
                        text-align: center;
                        background-color: #1a1a1a;
                        padding: 20px;
                        border-radius: 10px;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                    }
                    h1 {
                        color: #F44336;
                        font-size: 24px;
                        margin-bottom: 10px;
                    }
                    p {
                        color: #ffffff;
                        font-size: 16px;
                    }
                </style>
            </head>
            <body>
                <div class="message">
                    <h1>Recomendação Rejeitada com Sucesso!</h1>
                    <p>A recomendação de <strong>${email}</strong> foi rejeitada.</p>
                </div>
            </body>
        </html>
    `);
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});