const event = require('events');
const util = require('util'); // support inheritance from built in modules
const http = require('http');
const fs = require('fs');


const myChunckedFile = fs.createReadStream('longText.txt');
const writeChunckedFile = fs.createWriteStream('transferedText.text');
//another way to use writable streams directly is >> myChunckedFile.pipe(writeChunckedFile);

// creating server and sending data for it
const server = http.createServer((req,res)=>{
    myChunckedFile.on('data',(chunck)=>{
        res.end('A new chunck is recieved '+ chunck);
        writeChunckedFile.write(chunck);
    });    
});
server.listen(8080,'127.0.0.1');

console.log('Practicing session 3 is here!');
