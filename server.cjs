// require("dotenv").config();

const express = require("express");
const app = express();
// const { Client } = require("pg");
// const jwt = require("jsonwebtoken");
const path = require("path");

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const client = new Client({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });

// client
//   .connect()
//   .then(() => console.log("Connected to Database"))
//   .catch((err) => console.error("Connection error", err.stack));

// const secretKey = process.env.SECRET_KEY;

// app.post("/api/login", async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     const query = "SELECT * FROM users WHERE username = $1 AND password = $2";
//     const result = await client.query(query, [username, password]);

//     if (result.rows.length > 0) {
//       const token = jwt.sign({ username }, secretKey, { expiresIn: "1h" });
//       res.status(200).json({ message: "Login successful", token });
//     } else {
//       res.status(401).json({ message: "Invalid credentials" });
//     }
//   } catch (error) {
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

app.use("/assets", express.static(__dirname + "./dist/assets"));

app.use(express.static(path.join(__dirname, "./dist")));

// function verifyToken(req, res, next) {
//   const token = req.headers["authorization"];

//   if (!token) {
//     return res.status(403).json({ message: "Token is not provided" });
//   }

//   jwt.verify(token, secretKey, (err, decoded) => {
//     if (err) {
//       return res.status(401).json({ message: "Invalid token" });
//     }
//     req.user = decoded;
//     next();
//   });
// }

// app.get("/auth", verifyToken, (req, res) => {
//   res.json({ message: "This is a protected route!", user: req.user });
// });

// app.use("*", (req, res) => res.send("Splice Of Life!"));

// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ message: "Something went wrong!" });
// });

app.use("/api", require("./api/index.cjs"));

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}!`));
