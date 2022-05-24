const mongoose = require('mongoose');

const user = mongoose.Schema({
    username: { type: 'string', required: true, unique: true },
    password: { type: 'string', required: true },
    AccountType: { type: 'string', required: true, enum: ['Admin', 'Project Owner'] },

});

module.exports = mongoose.model('user', user);