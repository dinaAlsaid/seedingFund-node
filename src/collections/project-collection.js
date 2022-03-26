'use strict';

const UserModel = require('../models/projectSchema.js');


class projectCollection {
    constructor() {
        this.Model = UserModel;
    }

    async newProject(record,user) {
        try {
            record.user = user._id
            //create a new record
            const newRec = new this.Model(record);
            return newRec.save();

        } catch (err) {
            return err.messsage;
        }
    }

    async authenticate(username, password) {
        try {

            let record = await this.Model.find({ username });
            // console.log(record);
            const valid = await bcrypt.compare(password, record[0].password);
            return record[0];
        } catch (err) {
            return err.messsage;
        }
    }

    generateToken(user) {
        try {
            const token = jwt.sign({ username: user.username }, SECRET);
            return token;

        } catch (err) {

            return err.message;
        }
    }

    async findAll() {
        try {
            let results = await this.Model.find();
            return results;
        } catch (err) {
            return err.message;
        }
    }

    async findUser(username) {
        try {

            let results = await this.Model.findOne({ username });
            return results;
        } catch (err) {
            return err.message;
        }

    }

    async authenticateJWT(token) {
        try {

            const tokenObj = jwt.verify(token, SECRET);
            let user = await this.Model.findOne({ username: tokenObj.username });
            if (user) {
                return Promise.resolve(tokenObj);
            } else {
                return Promise.reject();
            }
        } catch (err) {
            return err.message;
        }

    }
}

module.exports = new projectCollection();
