const admin = {
    index: (req, res) => res.render('admin'),
    aprove: (req, res) => res.render('aprovar'),
    post: (req, res) => res.render('criarPost'),
    users: (re, res) => res.render('usuarios'),
    vips: (req, res) => res.render('vips')
}

module.exports = admin;