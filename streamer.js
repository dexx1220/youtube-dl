const fs = require('fs')
const https = require('https')
const file = fs.createWriteStream('video.mp4')

const url = ''
https.get(url, (response) => {
  response.pipe(file)
})
