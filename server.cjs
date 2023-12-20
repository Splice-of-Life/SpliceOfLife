const express = require("express");
const app = express();
const port = 3000;

app.use("/api", require("./api/index.cjs"));

app.get("/", (req, res) => res.send("Splice Of Life!"));

app.listen(port, () => console.log(`Server listening on port: ${port}!`));
