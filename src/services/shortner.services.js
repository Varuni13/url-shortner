const Shortner = require("../models/shortner.js")

async function createUrl(data) {
    const value = await Shortner.create(data)     
    if(value === null){
        // console.log("kuch nahi mila API ko")
        return null
    }
    else {
        console.log("Resource created:: ",value)
        return value
    }
}

async function fetchUrl(linkId){
    const value = await Shortner.find(
        {
            uniqueLink: linkId
        }
    )
    if(value === null){
        // console.log("kuch nahi mila API ko")
        return null
    } 
    else {
        // console.log(value)
        return value
    }
}
module.exports = {
    createUrl,
    fetchUrl
}