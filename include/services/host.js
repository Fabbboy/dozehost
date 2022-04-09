//function that takes a root folder as input and a bool as input and host them
const fs = require('fs');
const add = require('./redirect.js');
const log = require('./logging');
//define io

function serve(root, port, defaultFile){
    //if first char is . remove it of default file
    if(defaultFile[0] === '.'){
        defaultFile = defaultFile.substring(1);
    }
    //if second char is not / add i
    if(defaultFile[0] !== '/'){
        defaultFile = '/' + defaultFile;
    }
    add(root, "/", defaultFile);
    //check if root is a folder
    if(!fs.lstatSync(root).isDirectory()){
        console.log("Root is not a folder");
        return;
    }
    //check if port is a number or "random"
    if(port === "random"){
        port = Math.floor(Math.random() * (65535 - 1024) + 1024);
    }
    else if(isNaN(port)){
        console.log("Port is not a number");
        return;
    }
    //host app on port and root folder to the internet and return port number to user
    //on public ip
    const app = require('http').createServer(function (req, res) {
        const path = require('url').parse(req.url).pathname;
        let file = root + path;
        //create redirect.json file if it doesn't exist in the root folder
        //check if redirect.json includes the path requestet by the user and redirect to it if it does
        var redirect = JSON.parse(fs.readFileSync(root + "/redirect.json"));
        if (redirect[path] !== undefined) {
            file = root + redirect[path];
        }
        //redirect to file
        fs.readFile(file, function (err, data) {
            if (err) {
                //res.writeHead(404);
                fs.readFile(root + "/404.html", function (err, data) {
                        res.writeHead(200);
                        res.end(data);
                });
                log(root, "-------------\nGot 404 Request\nRequest: " + file + "\nTimestamp: " + Date.now().toString() + "\n-------------\n", 1)
                //res.end("./templates/404.html");
            } else {
                res.writeHead(200);
                res.end(data);
            }
        });
       /* fs.readFile(file, function (err, data) {
            if (err) {
                res.writeHead(404);
                res.end("File not found");
            } else {
                res.writeHead(200);
                res.end(data);
            }
        });*/
    });
    log(root, "-------------\nStarted server\nPort: " + port + "\nTimestamp: " + Date.now().toString() + "\n-------------\n", 1)
    app.listen(port);
    return port;

}
//Function to shutdown the server
module.exports = serve;