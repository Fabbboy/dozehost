const fs = require('fs');
const log = require('./logging');

function redirect(root, url, to){
    var file = root + '/redirect.json';
    //read file
    const red = JSON.parse(fs.readFileSync(file, 'utf8'));
    //if not add / infront of to
    if(to.charAt(0) !== '/'){
        to = '/' + to;
    }
    if(red.hasOwnProperty(url)){

    }
        if (red.hasOwnProperty(url)) {
            return;
        } else {
            //add to to redirect.json
            red[url] = [to];
            //write file
            fs.writeFileSync(file, JSON.stringify(red, null, 2));
            log(root, "-------------\nAdded Redirect\nFrom: " + url + "\nTo: " + to +  "\nTimestamp: " + Date.now().toString() + "\n-------------\n", 1)
        }
}

module.exports = redirect;