const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use("/assets/images",express.static(__dirname + "./src/assets/images"));

app.use( express.static(path.join(__dirname, './dist')));  // adjusted to fix render


app.use("/api", require("./api/index.cjs"));


app.listen(PORT, () => console.log(`Server listening on port: ${PORT}!`));
