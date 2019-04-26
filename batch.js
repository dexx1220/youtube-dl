const YoutubeDL = require('youtube-dl')
const fs = require('fs')

function download() {
	console.log('========= BATCH DOWNLOAD IN PROCESS ========')
	YoutubeDL.exec('', ["--batch-file=batch.txt", "--format=mp4 "], {}, function(err, output) {
    if (err) {
      console.log('=== ERROR ===')
      console.log(err)
    }
    console.log('=== BATCH DOWNLOAD DONE ===')
  })
}

download()
