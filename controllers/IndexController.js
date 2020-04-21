const IndexController = {

    login: (req, res) => {
        res.render('auth/login');
    },

    registro: (req, res) => {
        res.render('auth/register');
    },

    home: (req, res) => {
        res.render('index', { title: 'Express' });
    },
};

module.exports = IndexController;