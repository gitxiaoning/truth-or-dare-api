const express = require("express");
const dotenv = require('dotenv');
const cors = require('cors')
dotenv.config();

const BACKEND_PORT = process.env.BACKEND_PORT || 8080;
const FRONTEND_PORT = process.env.FRONTEND_PORT || 3000;

// Set up the API
const truthOrDare = express()

// Set up the cors
truthOrDare.use(cors({ origin: FRONTEND_PORT}))

// The endpoint for the truth
const truth = require("./Routes/truth.js");
truthOrDare.use("/truth", truth);

// The endpoint for the dare
const dare = require("./Routes/dare.js");
truthOrDare.use("/dare", dare);


// Listening to the port
truthOrDare.listen(BACKEND_PORT, ()=>{
    console.log(`Listening to port ${BACKEND_PORT}`);
})