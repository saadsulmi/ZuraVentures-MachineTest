const express = require("express");
const cors = require("cors");
const app = express();
const connectDB= require('./config/database');
const userRouter = require("./routes/userRouter");
require('dotenv').config();

const PORT = process.env.PORT || 8000;

connectDB();

const productionOrigins=[process.env.PRODUCTION_ORIGIN1,process.env.PRODUCTION_ORIGIN2];
const developmentOrigin=process.env.DEVELOPMENT_ORIGIN
const allowedOrgins = process.env.NODE_ENV==='production'?productionOrigins:developmentOrigin;

const corsOptions = {
  origin: '*',
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
