const YoutubeDL = require('youtube-dl')
const url = ''
const fileName = process.env.FILENAME || 'video-1.mp4'
const fs = require('fs')

function download() {
	console.log('========= DOWNLOADING ========')
	let video = YoutubeDL(url)
	video.pipe(fs.createWriteStream(fileName))
}

download()
