const url = require("url")
const queryString = require('querystring')

let rawUrl = "https://stackabuse.com?page=2&limit=3"

let parsedUrl = url.parse(rawUrl)
let parsedQs = queryString.parse(parsedUrl.query)

console.log('mengolah data query staring')
console.log(parsedUrl)
console.log(`Data page ${parsedQs.page}`)
console.log(`Data limit ${parsedQs.limit}`)
