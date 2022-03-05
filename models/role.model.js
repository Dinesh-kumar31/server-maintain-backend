const mongoose = require("mongoose")

const Schema = mongoose.Schema();

const Role = new Schema({
    name: { type: String, default: '' }
});

const role = mongoose.model('role', Role);
module.exports = {
    role
}