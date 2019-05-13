const path = require('path');
const fs   = require('fs');
const ytdl = require('youtube-dl');
 
function playlist(url) {
  var video = ytdl(url, ['--playlist-start=31', '--playlist-end=36']);
 
  video.on('error', function error(err) {
    console.log('error 2:', err);
  });
 
  var size = 0;
  video.on('info', function(info) {
    console.log('===== VIDEO INFO =====')
    console.log(info)
    var output = path.join(__dirname + '/',  info.playlist_index - 1 + '.mp4');
    video.pipe(fs.createWriteStream(output));
  });
 
  var pos = 0;
  video.on('data', function data(chunk) {
    pos += chunk.length;
    // `size` should not be 0 here.
    if (size) {
      var percent = (pos / size * 100).toFixed(2);
      process.stdout.cursorTo(0);
      process.stdout.clearLine(1);
      process.stdout.write(percent + '%');
    }
  });
 
  video.on('next', playlist);
 
}

playlist('')