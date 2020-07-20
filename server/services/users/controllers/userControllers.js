const UserModel = require('../models/UserModel');

class UserControllers {
    static async findAll(req, res) {
        try {
            const User = await UserModel.findAll({});
            return res.status(200).json(User);
        } catch (error) {
            console.log("error static findAll", error);
            res.status(404).json({
                error: error,
                msg: "Error find all User"
            })
        } 
    }

    static async findOneUser(req, res) {
        try {
            const User = await UserModel.findOneUser(req.params.UserId);
            return res.status(200).json(User);
        } catch (error) {
            console.log("error static findOneUser", error);
            res.status(404).json({
                error: error,
                msg: "Error find one User"
            })
        }
    }
    
    static async addUser(req, res) {
        try {
            const User = await UserModel.addUser(req.body);
            return res.status(200).json(User.ops)    
        } catch (error) {
            console.log("error static addUser", error);
            res.status(404).json({
                error: error,
                msg: "Error add User"
            })
        }
    }
    
    static async deleteUser(req, res) {
        try {
            const User = await UserModel.deleteUser(req.params.UserId);            
            return res.status(201).json(User.result)
        } catch (error) {
            console.log("error static deleteUser", error);
            res.status(404).json({
                error: error,
                msg: "Error delete User"
            })
        }
    }
    
    static async updateUser(req, res) {
        let updatedUser = {
            "title": req.body.title,
            "overview": req.body.overview,
            "poster_path": req.body.poster_path,
            "popularity": req.body.popularity,
            "tags": req.body.tags
        }
        try {
            const User = await UserModel.updateUser(req.params.UserId, updatedUser);
            return res.status(201).json(User.result)
        } catch (error) {
            console.log("error static updateUser", error);
            res.status(404).json({
                error: error,
                msg: "Error update User"
            })
        }
    }
}

module.exports = UserControllers;