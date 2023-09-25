const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const database = require('./database.js');
//routes
const categoryRoute=require("./routes/categories.js")


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

const PORT = process.env.PORT || 5000;

app.use("/api",categoryRoute)

app.listen(PORT, () => {
  database();
  console.log(`Server is running on port ${PORT}`);
})

