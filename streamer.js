const fs = require('fs')
const https = require('https')
const file = fs.createWriteStream('video.mp4')

const url = 'https://f13.file-upload.com:183/d/qaxidd6snlgpv7w7rs25mfyo2gkluhyglrtrkyusvclnqgxfcwrbmpq3lrxdpghzkbpxxljo/Game.of.Thrones.S08E05.1080p.WEB.H264-MEMENTO.mkv'
https.get(url, (response) => {
  response.pipe(file)
})