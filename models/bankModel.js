const mongoose = require("mongoose");
const { Schema } = mongoose;

const bankSchema = new Schema({
    amount: {
        type: Number,
        required: true
    },
    bank: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    swiftCode: {
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

const bankModel = mongoose.model("bankModel", bankSchema);
module.exports = bankModel;