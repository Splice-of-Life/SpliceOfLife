const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + "./dist/assets"));

app.get("/", (req, res) => res.send(__dirname + "/dist/index.html"));

app.use("/api", require("./api/index.cjs"));

app.get("/", (req, res) => res.send("Splice Of Life!"));

app.listen(port, () => console.log(`Server listening on port: ${port}!`));
