const phoneService = require('../services/phone-service');

function addBookRoutes(app) {

    //LIST
    app.get('/phone', (req, res) => {
        phoneService.query()
            .then(phones => {
                return res.json(phones)
            })
    })

    //SIGNLE
    app.get('/phone/:id', (req, res) => {
        phoneService.getPhoneById(req.params.id)
            .then(phone => res.json(phone))
    })

    app.put('/phone/:id', (req, res) => {
        phoneService.updatePhoneReviews(req.body)
            .then(phone => res.json(phone))
    })

}

module.exports = addBookRoutes