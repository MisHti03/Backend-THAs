var router = require('express').Router();
var path = require("path");
var fs = require("fs");

router.get('/', function(req, res){

    res.sendFile(path.join(__dirname, "../public/html/index.html"));
});

router.get('/video', function(req, res){

    const videoPath = path.join(__dirname, "../public/videos/nature.mp4");
    const videoSize = fs.statSync(videoPath).size;

    const range = req.headers.range;
    if (range) {
        const parts = range.replace(/bytes=/, "").split("-")
        const start = parseInt(parts[0], 10)
        const end = parts[1]
        ? parseInt(parts[1], 10)
        : videoSize-1
    

    
    
   // const CHUNK_SIZE = 10 ** 6; //1MB
    //const start = Number(range.replace(/bytes=/, ""));
   // const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
    


    //const contentLength = end - start + 1;
    //const headers = {
        //"Content-Range": 'bytes ${start}-${end}/${videoSize}',
        //"Accept-Ranges": "bytes",
        //"Content-Length": contentLength,
        //"Content-type": "video/mp4"
    //};
    
         
        const contentLength = (end-start)+1;
        const headers = {
        'Content-Range': `bytes ${start}-${end}/${videoSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': contentLength,
        'Content-Type': 'video/mp4',
        };

    res.writeHead(206, headers);

    const videoStream = fs.createReadStream(videoPath, { start, end});

    videoStream.pipe(res);
    }});



    

module.exports = router;


