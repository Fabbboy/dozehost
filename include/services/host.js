//function that takes a root folder as input and a bool as input and host them
const fs = require('fs');
const add = require('./redirect.js');
const log = require('./logging');
const ddos = require("./ddos")
//define io

function serve(root, port, defaultFile, cooldown){
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

        var ips = JSON.parse(fs.readFileSync(root + "/logs/ips.json", 'utf8'));
        var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;//check if ip is in ips.json else add it with Date.now()
        //run ddos check if true block request
        const ddose = ddos(req, root, ip, cooldown)
        if(ddose){
            res.writeHead(403, {'Content-Type': 'text/html'});
            res.end("<h1>403 Forbidden</h1>");
            //wait for 5 seconds and then remove ip from ips.json
            log(root, "-------------\nBlocked\nIp: " + ip + "\nTime: " + Date.now() - ips[ip] + "\n Timestamp: " + Date.now() + "\n-------------");
            setTimeout(function(){
                ips[ip] = undefined;
                fs.writeFileSync(root + "/logs/ips.json", JSON.stringify(ips));
            }, 1000);
            ips[ip] = Date.now();
            fs.writeFileSync(root + "/logs/ips.json", JSON.stringify(ips));
            return;
        }else{

        }


        const path = require('url').parse(req.url).pathname;
        let file = root + path;
        //create redirect.json file if it doesn't exist in the root folder
        //check if redirect.json includes the path requestet by the user and redirect to it if it does
        var redirect = JSON.parse(fs.readFileSync(root + "/serverAssets/redirect.json"));
        //check if redirect[path] includes http:// or https://
        if(redirect[path] !== undefined){
                file = root + redirect[path];
                //get ip of the client
                log(root, "-------------\nRedirected\nFrom: " + path + "\nTo: " + redirect[path] + "\nIp: " + ip +"\nTimestamp: " + Date.now().toString() + "\n-------------\n")
        }
        /*if (redirect[path] !== undefined) {
            file = root + redirect[path];
        }*/
        //redirect to file
        fs.readFile(file, function (err, data) {
            if (err) {
                //res.writeHead(404);
                fs.readFile(root + "/serverAssets/404.html", function (err, data) {
                        res.writeHead(200);
                        res.end(data);
                });
                log(root, "-------------\nGot 404 Request\nRequest: " + file + "\nTimestamp: " + Date.now().toString() + "\n-------------\n")
                //res.end("./templates/404.html");
            } else {
                res.writeHead(200);
                res.end(data);
            }
            ips[ip] = Date.now();
            fs.writeFileSync(root + "/logs/ips.json", JSON.stringify(ips));
        });
        //defend against ddos attack
        //if ip last connection is less than 2 seconds ago, block it



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
    log(root, "-------------\nStarted server\nPort: " + port + "\nTimestamp: " + Date.now().toString() + "\n-------------\n")
    app.listen(port);
    return port;

}
//Function to shutdown the server
module.exports = serve;