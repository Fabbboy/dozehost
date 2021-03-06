# Dozehost 🚀
<tt>made by Fabboy </tt>
<hr>
<br>

### What is Dozehost❓
Dozehost is a simple, fast, and secure way to host your website. It's free and open source. Dozehost supports various features and will be updated as new features are added.

### How to use Dozehost? ⚙️
1. Install the NPM package
```
npm install dozehost
```
2. Create a server file where you can host your website for example "server.js"
3. Create a root folder where your website is located for example "root"

Current file structure:    
(i also create a "index.html" file)
```
├── root 
│   └── index.html
├── server.js
```            
4. Setup the Server script to run your website
   (This script can be various depending on your server setup)
```js
//import the package
const dozehost = require("dozehost")
//create a server
const doze = new dozehost("./root", 3030, "index.html")  //set the root folder, the port, and the default file
//redirect all requests on empty / to the default file
doze.redirect("/", "/index.html")
// start the host
doze.serve()
//print the url
console.log("http://localhost:" + doze.port)
```
5. Open your browser and go to http://localhost:3030 to see your website 🌐
Now the file structure should look like this:
```
├── root 
│   ├── serverAssets 
│   │   ├── 404.html
│   │   └── redirect.json
│   ├── debug 
│   │   ├── ips.json
│   │   └── debug.log
│   └── index.html    
├── server.js
```

### Features 🔧
- Fast
- Redirecting
- Easy
- Logging
- DDOS protection (works sometimes but not always)
- IP tracking (perfect if you're hosting your application publicly)

The script will create a redirect.json file with all redirects in it. You can add and remove redirects from the redirect.json file. 
The script will also create a 404.html file if it doesn't find a file. You can edit the 404.html file.
The script will also create a debug.log file 
The script will also create a ips.json with all the ips that have visited the website and their userid.

### DDOS protection 💣
The DDOS protection works with Milliseconds and will try to block the ip for a certain amount of time.

### Future Features 🚀
- Add support for other file types
- Dashboard for admins
- Support for multiple servers
- external redirects

### License 🔑
Dozehost is licensed under the MIT license. You can view the full license text [here](https://github.com/Fabbboy/dozehost/blob/master/license.md).

