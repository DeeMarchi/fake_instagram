const bcrypt = require('bcrypt');

const IndexController = {

    login: (req, res) => {
        res.render('auth/login');
    },

    logar: (req, res) => {
        console.log(req.body);
    },

    registro: (req, res) => {
        res.render('auth/register');
    },

    registrar: (req, res) => {
        console.log(req.body);

        const { email, nomeCompleto, usuario, senha } = req.body;
        const senhaCrypto = bcrypt.hashSync(senha, 10);

        console.log(senhaCrypto);
    },

    home: (req, res) => {
        res.render('index', { title: 'Express' });
    },
};

module.exports = IndexController;