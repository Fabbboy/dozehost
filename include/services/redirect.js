const fs = require('fs');

function redirect(root, url, to){
    var file = root + '/redirect.json';
    //read file
    const red = JSON.parse(fs.readFileSync(file, 'utf8'));
    //check if url is in redirect.json
        //check if to is in redirect.json
        if (red.hasOwnProperty(url)) {
            return;
        } else {
            //add to to redirect.json
            red[url] = [to];
            //write file
            fs.writeFileSync(file, JSON.stringify(red, null, 2));
        }
}

module.exports = redirect;