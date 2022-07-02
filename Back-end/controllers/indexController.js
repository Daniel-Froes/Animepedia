const posts = [
    {
        id: 1,
        title: "post 1",
    },
    {
        id: 2,
        title: "post 2",
    },
]


const controller = {
    index: (req, res) => res.render('index', {
        title: "Olá mundo",
        posts
    })
}

module.exports = controller;