const express = require("express");
const app = express()
const cors = require("cors");
const dotenv = require("dotenv").config();
const port = process.env.port || 8080
const connectDB = require("./config/dbConnect")
const userRoutes = require("./routes/userRoutes")

connectDB();

app.use(cors())
app.use(express.json())
app.use("/",userRoutes);



app.get("/", (req, res) =>
  res.send("Server Running Successfully!")
);

app.listen(port, ()=>{
    console.log(`Server is running on the port http://localhost:${port}`)
})