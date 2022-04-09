const serveIO = require("../bundle.js")

const servere = new serveIO("./root4", 3030, "index.html")
servere.redirect("/google", "/openLinks.html")
servere.serve()
console.log("http://localhost:" + servere.port)

