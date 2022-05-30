const controller = {
    index: (req, res) => res.render('categoria', {title: "blog"}),
    show:  (req, res) => res.render('post',{title: "post"})
}

module.exports = controller;