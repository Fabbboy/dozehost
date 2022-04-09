const serveIO = require("../bundle.js")

const servere = new serveIO("./root4", 3030, "index.html")
const serveree = new serveIO("./root3", 3031, "index.html")
servere.serve()
console.log("http://localhost:" + servere.port)

