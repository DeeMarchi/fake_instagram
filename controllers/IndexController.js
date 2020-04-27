const bcrypt = require('bcrypt');
const { User } = require('../models');
const { Op } = require('sequelize');

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

    registrar: async (req, res) => {
        console.log(req.body);

        const { email, nomeCompleto, usuario, senha } = req.body;

        const [user, naoPresente] = await User.findOrCreate({
            where: {
                [Op.or]: [
                    { name: nomeCompleto },
                    { username: usuario },
                    { email: email },
                ],
            },
            defaults: {
                name: nomeCompleto,
                username: usuario,
                email: email,
                password: bcrypt.hashSync(senha, 10),
            },
        });
        if (!naoPresente) {
            return res.send("Parece que já temos um usuário com esses dados cadastrados!");
        }
    },

    home: (req, res) => {
        res.render('index', { title: 'Express' });
    },
};

module.exports = IndexController;