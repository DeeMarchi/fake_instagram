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
    },

    home: (req, res) => {
        res.render('index', { title: 'Express' });
    },
};

module.exports = IndexController;