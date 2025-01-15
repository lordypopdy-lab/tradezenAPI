const mongoose = require("mongoose");
const { Schema } = mongoose;

const cryptoSchema = new Schema({
    amount: {
        type: Number,
        required: true
    },
    cryptoAddress: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "Pending"
    },
    email: {
        type: String,
        required: true
    },
    approve: {
        type: String,
        default: "Approve",
        required: false
    },
    decline: {
        type: String,
        default: "Decline",
        required: false
    },
    delete: {
        type: String,
        default: "Delete",
        required: false
    }
})

const cryptoModel = mongoose.model("cryptoModel", cryptoSchema);
module.exports = cryptoModel;