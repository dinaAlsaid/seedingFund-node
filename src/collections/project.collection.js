'use strict';

const UserModel = require('../models/projectSchema.js');


class projectCollection {
    constructor() {
        this.Model = UserModel;
    }

    async newProject(record, user) {
        try {
            record.user = user._id
            //create a new record
            const newRec = new this.Model(record);
            return newRec.save();

        } catch (err) {
            return err.messsage;
        }
    }

    async findUserProjects(user) {
        try {

            let records = await this.Model.find({ user: user._id });
            console.log(records);
            return records;
        } catch (err) {
            return err.messsage;
        }
    }

}

module.exports = new projectCollection();
