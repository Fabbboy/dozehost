const serveIO = require("../bundle.js")

const servere = new serveIO("./root2", 3030, "index.html")
servere.redirect("/", "/index.html")
servere.serve()
console.log("http://localhost:" + servere.port)


