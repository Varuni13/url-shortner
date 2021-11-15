let mongoose = require('mongoose')
const { Schema } = require("mongoose")

const shortnerSchema = new Schema({
    url: {
        required: true,
        type: String,
        trim: true
    },
    uniqueLink: {                             //for shareable links
        type: String,
        required: true
    },
    expiresOn: {
        type: String,
        required: true  //if 0, new link never expires
    },
    isExpired: {
        type: Boolean,
        required: true,
        default: false
    }
},{
    timestamps: true
})
let Shortner = mongoose.model('Shortner', shortnerSchema ); // Compile model from schema

module.exports = Shortner;