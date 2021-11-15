const {
    createUrl,
    fetchUrl
} = require('../services/shortner.services')
const {decodeUrl} = require('../utils/decodeUrl.js')
var moment = require('moment'); // require
var validUrl = require('valid-url');

async function newUrl(req, res, next) {
    let data = {};
    if(!req.body.url) {
        res.json({
            success: 0,
            message: "url string cannot be empty"
        })
    } else {
        data.url = req.body.url; 
        data.expiresOn = moment().add(process.env.POLL_EXPIRES_IN_MONTHS, 'months').calendar(); //change valure in .env file
        console.log(data.expiresOn)
        data.isExpired = false;
        data.uniqueLink = decodeUrl();
        let pollData = await createUrl(data)
        console.log("decodeUrl data",pollData)
        if(pollData !== null) res.json({
            success: 1,
            data: pollData
        })
        else res.json({
            success: 0,
            data: "NULL"
        })
    }
}

async function getUrlFromId(req, res, next) {
    let uniqueLinkId = req.params.uniqueLink;
    const fetchedData = await fetchUrl(uniqueLinkId);
    console.log("fetched dat",fetchedData[0].url)
    if(fetchedData.length >0 && validUrl.isUri(fetchedData[0].url)) res.redirect(fetchedData[0].url)
    else res.json({
        success: 0,
        data: "NULL"
    })
}

module.exports ={
    newUrl,
    getUrlFromId
}