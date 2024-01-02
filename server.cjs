require('dotenv').config();

const express = require('express');
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", require("./api/index.cjs"));
app.use('/assets', express.static(__dirname + '/dist/assets'));
app.get('/', (req, res) => res.sendFile(__dirname + '/dist/index.html'));
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}!`));
