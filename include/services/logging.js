const fs = require('fs');

function log(rootFolder, content){
        fs.appendFileSync(rootFolder + "/logs/debug.log", content)
}

module.exports = log;