const mongoService = require('./mongo-service');

const ObjectId = require('mongodb').ObjectId;

function checkLogin(userInfo) {
    return mongoService.connect()
        .then(db => {
            const collection = db.collection('user')
            // return collection.find({}).toArray()
            return collection.findOne({ email: userInfo.email, password: userInfo.password })
        })
}

function getUserById(userId) {
    userId = new ObjectId(userId);
    return mongoService.connect()
        .then(db => {
            return db.collection('user').findOne({ _id: userId })
        })
}

function updatedCartUser(user) {
    user._id = new ObjectId(user._id);
    return mongoService.connect()
        .then(db => {
            return db.collection('user').updateOne({ _id: user._id }, { $set: user })
                .then(_ => user)
        })
}

module.exports = {
    checkLogin,
    getUserById,
    updatedCartUser
}