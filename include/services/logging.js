const fs = require('fs');

function log(rootFolder, content, mode){
    if(mode === 1){
        fs.appendFileSync(rootFolder + "/logs/debug.log", content)
    }
    if(mode === 2){
        fs.writeFileSync(rootFolder + "/logs/count.log", content)
    }
}

module.exports = log;