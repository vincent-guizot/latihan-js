const { getDatabase } = require('../configs/mongo');

const { ObjectId } = require('mongodb');

const db = getDatabase();
const Users = db.collection("Users");

class UsersModel {
    static findAll() {
        return Users.find({}).toArray();
    }

    static findOneUser(UserId) {
        return Users.findOne({_id: ObjectId(UserId)});
    }

    static addUser(newUsers) {
        return Users.insertOne(newUsers);
    }

    static deleteUser(UserId) {
        return Users.deleteOne({_id: ObjectId(UserId)});
    }

    static updateUser(UserId, updatedUser) {
        return Users.updateOne({_id: ObjectId(UserId)}, {$set: updatedUser});
    }

}

module.exports = UsersModel;