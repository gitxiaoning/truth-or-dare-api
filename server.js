const express = require("express");
const dotenv = require('dotenv');
dotenv.config();


// Set up the API
const truthOrDare = express()

// The endpoint for the truth
const truth = require("./Routes/truth.js");
truthOrDare.use("/truth", truth);

// The endpoint for the dare
const dare = require("./Routes/dare.js");
truthOrDare.use("/dare", dare);


// Listening to the port
truthOrDare.listen(process.env.PORT, ()=>{
    console.log(`Listening to port ${process.env.PORT}`);
})