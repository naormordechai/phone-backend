const mongoService = require('./mongo-service');

const ObjectId = require('mongodb').ObjectId;

function query() {
    return mongoService.connect()
        .then(db => {
            const collection = db.collection('phones')
            return collection.find({}).toArray()
        })
}

function getPhoneById(phoneId) {
    phoneId = new ObjectId(phoneId);
    return mongoService.connect()
        .then(db => {
            const collection = db.collection('phones')
            return collection.findOne({ _id: phoneId })
        })
}

function updatePhoneReviews(phone) {
    phone._id = new ObjectId(phone._id);
    return mongoService.connect()
        .then(db => {
            return db.collection('phones').updateOne({ _id: phone._id }, {$set: phone})
            .then(_ => phone)
        })
}

module.exports = {
    query,
    getPhoneById,
    updatePhoneReviews
}
