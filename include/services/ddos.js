//function that checks if the user is using a DDOS attack or not and returns the result
const fs = require('fs');

function ddos(req,  root, ip, cooldown) {
    //if the user is using a DDOS attack
    //return !!req.headers['user-agent'].includes('DDOS');
    //read the ips.json file
    const ips = JSON.parse(fs.readFileSync(root + '/logs/ips.json', 'utf8'));
    //check if ip tryed to access the website under 2 seconds multiple times

    return Date.now() - ips[ip] < cooldown;


}
module.exports = ddos;