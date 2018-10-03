const userService = require('../services/user-service');

function addUserRoutes(app) {

    app.post('/user', (req, res) => {
        userService.checkLogin(req.body)
            .then(user => res.json(user))
    })

    app.get('/user/:id', (req, res) => {
        userService.getUserById(req.params.id)
            .then(user => res.json(user))
    })

    app.put('/user/:id', (req, res) => {
        userService.updatedCartUser(req.body)
            .then(user => res.json(user))
    })
}

module.exports = addUserRoutes
