const express = require('express')
const { newUrl,getUrlFromId } = require('../controllers/poll.controller')
let poll = express.Router();


poll.post("/url-shortner", newUrl)     //create new poll

poll.get("/url-shortner/:uniqueLink", getUrlFromId)   //fetch poll with url

module.exports = poll;