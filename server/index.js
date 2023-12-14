const express = require("express");
const cors = require("cors");
const app = express();
const connectDB= require('./config/database');
const userRouter = require("./routes/userRouter");
require("dotenv").config();

const PORT = process.env.PORT || 8000;

connectDB();

const corsOptions = {
  origin: ['http://localhost:5173'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
  allowedHeaders: ['Content-Type','auth-token'],
}

app.use(cors(corsOptions))
app.use(express.json({limit:'50mb'}))

app.use('/api',userRouter)

app.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
})
