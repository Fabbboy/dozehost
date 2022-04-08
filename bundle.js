const serveI = require("./include/services/host.js");
const newDir = require("./include/services/redirect")
const fs = require("fs");
const samples = require("./include/services/samples");
const sam = new samples();

class dozehost{
    constructor(rootFolder, port, defaultFile){
        this.rootFolder = rootFolder;
        this.port = port;
        this.defaultFile = defaultFile;
        if (!fs.existsSync(rootFolder + "/logs")) {
            fs.mkdirSync(rootFolder + "/logs");
        }
        if (!fs.existsSync(rootFolder + "/logs/debug.log")) {
            fs.writeFileSync(rootFolder + "/logs/debug.log", "<<Started logging>>\n");
        }
        if (!fs.existsSync(rootFolder + "/redirect.json")) {
            fs.writeFileSync(rootFolder + "/redirect.json", "{}");
        }
        //create 404 file and put the error page in it
        fs.writeFileSync(rootFolder + "/404.html", sam.getErrorPage());
    }
    serve(){
        serveI(this.rootFolder, this.port, this.defaultFile);
    }
    redirect(req, res){
        newDir(this.rootFolder, req, res);
    }
}

module.exports = dozehost;